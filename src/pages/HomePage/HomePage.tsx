import "./HomePage.scss";
import { ProductCard } from "../../components/index";
import { products } from "../../mock/mockData";
import Dropdown from "../../components/Dropdown/Dropdown";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";
import {
  sortBy,
  functionalityFilters,
  energyClassFilters,
  capacityFilters,
} from "./filtersData";
import { Typography } from "@mui/material";

const HomePage = () => {
  const [sortValue, setSortValue] = useState<string>("Wszystkie");
  const [functionValue, setFunctionValue] = useState<string>("Wszystkie");
  const [energyClassValue, setEnergyClassValue] = useState<string>("Wszystkie");
  const [capacityValue, setCapacityValue] = useState<string | number>(
    "Wszystkie"
  );
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChangeSortValue = (event: SelectChangeEvent) => {
    setSortValue(event.target.value);
  };
  const handleChangeFunctionValue = (event: SelectChangeEvent) => {
    setFunctionValue(event.target.value);
  };
  const handleChangeEnergyValue = (event: SelectChangeEvent) => {
    setEnergyClassValue(event.target.value);
  };
  const handleChangeCapacityValue = (event: SelectChangeEvent) => {
    setCapacityValue(event.target.value);
  };

  const handleSearch = (target: string) => {
    setSearchValue(target);
  };

  const filteredBySearch =
    searchValue.length !== 0
      ? products.filter((product) =>
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : products;

  const filteredProducts = filteredBySearch
    .filter((product) => {
      const energyFilter =
        energyClassValue !== "Wszystkie"
          ? energyClassValue.toLowerCase() === product.energyClass.toLowerCase()
          : filteredBySearch;
      const functionalityFilter =
        functionValue !== "Wszystkie"
          ? product.functionality
              .toLowerCase()
              .includes(functionValue.toLowerCase())
          : filteredBySearch;
      const capacityFilter =
        capacityValue !== "Wszystkie"
          ? product.capacity === capacityValue
          : filteredBySearch;
      return energyFilter && functionalityFilter && capacityFilter;
    })
    .sort((a, b) => {
      if (sortValue === "Cena") {
        return a.price - b.price;
      }
      if (sortValue === "Pojemność") {
        return a.capacity - b.capacity;
      }
      return 0;
    });

  return (
    <>
      <nav className="navBarContainer">
        <Typography variant="h1" fontSize={40} fontWeight={600}>
          Wybierz urządzenie
        </Typography>
      </nav>
      <Box className="homePageContainer">
        <TextField
          className="search"
          sx={{
            background: "white",
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { border: "none" },
            },
          }}
          id="search"
          label="Search..."
          variant="outlined"
          onChange={(event) => handleSearch(event.target.value)}
        />
        <Box className="filtersContainer">
          <Dropdown
            value={sortValue}
            label="Sortuj po:"
            items={sortBy}
            handleChange={handleChangeSortValue}
          />
          <Dropdown
            value={functionValue}
            label="Funkcje:"
            items={functionalityFilters}
            handleChange={handleChangeFunctionValue}
          />
          <Dropdown
            value={energyClassValue}
            label="Klasa Energetyczna:"
            items={energyClassFilters}
            handleChange={handleChangeEnergyValue}
          />
          <Dropdown
            value={capacityValue}
            label="Pojemność:"
            items={capacityFilters}
            handleChange={handleChangeCapacityValue}
          />
        </Box>
        <Box>
          <p className="cardsAmount">
            Liczba wyników: {filteredProducts.length}
          </p>
          <Box className="productContainer">
            {filteredProducts.length === 0 ? (
              <p>Ooops, there is no products for selected filters</p>
            ) : (
              filteredProducts.map((product, index) => {
                return <ProductCard key={index} {...product} />;
              })
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
