import { ProductCardProps } from "./ProductCardType";
import Typography from "@mui/material/Typography";
import "./ProductCard.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EnergeticChip from "../EnergeticChip/EnergeticChip";

const ProductCard = (props: ProductCardProps) => {
  return (
    <Box className="card">
      <img src={props.image} alt={`product${props.id}`} />
      <Typography variant="h6" className="productTitle">
        {props.title}
      </Typography>
      <Box className="productDetailsContainer">
        <Box className="productDetails">
          <Typography variant="subtitle2" className="specificationText">
            Pojemność(kg): <strong>{props.capacity}</strong>
          </Typography>
          <Typography variant="subtitle2" className="specificationText">
            Wymiary(GxSxW): <strong>{props.size}</strong>
          </Typography>
          <Typography variant="subtitle2" className="specificationText">
            Funkcje: <strong>{props.functionality}</strong>
          </Typography>
        </Box>

        <Box className="energeticDetails">
          <Typography variant="subtitle2" className="specificationText">
            Klasa energetyczna:
          </Typography>
          <EnergeticChip energyClass={props.energyClass}></EnergeticChip>
        </Box>

        <Box>
          <Typography variant="subtitle2" className="specificationText">
            Cena obowiązuje: {props.priceExpireDateRange.from} -{" "}
            {props.priceExpireDateRange.to}
          </Typography>
          <Typography className="price">
            {props.price} <span>{props.currency}</span>
          </Typography>
        </Box>
      </Box>
      <Button variant="contained" className="button">
        Wybierz
      </Button>
    </Box>
  );
};

export default ProductCard;
