import { ProductCardProps } from "../components/ProductCard/ProductCardType";
export const products = [
  {
    id: "1",
    image: require("../assets/images/washingMachine2.png"),
    title: "WW90T754ABT, Pralka™, 9 kg, biała",
    capacity: 9,
    size: "55 x 60 x 85",
    functionality: "Panel AI Control, Wyświetlacz elektroniczny",
    energyClass: "A",
    priceExpireDateRange: { from: "15.09.2022", to: "21.09.2022" },
    price: 3199.0,
    currency: "zl",
    installment: "53,31 zł x 60 rat",
  },
  {
    id: "2",
    image: require("../assets/images/washingMachine.png"),
    title: "DEW90T734ABT, Pralka QuickDrive™, 9 kg, biała",
    capacity: 10.5,
    size: "55 x 60 x 85",
    functionality:
      "Drzwi AddWash, Silnik inwerterowy, Wyświetlacz elektroniczny",
    energyClass: "B",
    priceExpireDateRange: { from: "15.09.2022", to: "21.09.2022" },
    price: 3199.0,
    currency: "zl",
    installment: "53,31 zł x 60 rat",
  },
  {
    id: "3",
    image: require("../assets/images/washingMachine.png"),
    title: "WE5554ABT, Pralka QuickDrive™, 9 kg",
    capacity: 8,
    size: "55 x 60 x 85",
    functionality: "Panel AI Control, Wyświetlacz elektroniczny",
    energyClass: "C",
    priceExpireDateRange: { from: "15.09.2022", to: "21.09.2022" },
    price: 2199.0,
    currency: "zl",
    installment: "53,31 zł x 60 rat",
  },
  {
    id: "4",
    image: require("../assets/images/washingMachine.png"),
    title: "WW90T754ABT, Pralka QuickDrive™, 9 kg, biała",
    capacity: 9,
    size: "55 x 60 x 85",
    functionality:
      " Drzwi AddWash™, Panel AI Control, Wyświetlacz elektroniczny",
    energyClass: "D",
    priceExpireDateRange: { from: "15.09.2022", to: "21.09.2022" },
    price: 3199.0,
    currency: "zl",
    installment: "53,31 zł x 60 rat",
  },
  {
    id: "5",
    image: require("../assets/images/washingMachine2.png"),
    title: "WW90T754ABT, Pralka QuickDrive™, 9 kg, biała",
    capacity: 10.5,
    size: "55 x 60 x 85",
    functionality:
      " Drzwi AddWash™, Panel AI Control, Wyświetlacz elektroniczny",
    energyClass: "E",
    priceExpireDateRange: { from: "15.09.2022", to: "21.09.2022" },
    price: 3100.0,
    currency: "zl",
    installment: "53,31 zł x 60 rat",
  },
  {
    id: "6",
    image: require("../assets/images/washingMachine.png"),
    title: "WW90T754ABT, Pralka QuickDrive™, 9 kg, biała",
    capacity: "8",
    size: "55 x 60 x 85",
    functionality:
      " Drzwi AddWash™, Panel AI Control, Silnik inwerterowy, Wyświetlacz elektroniczny",
    energyClass: "F",
    priceExpireDateRange: { from: "15.09.2022", to: "21.09.2022" },
    price: 3199.0,
    currency: "zl",
    installment: "53,31 zł x 60 rat",
  },
] as Array<ProductCardProps>;
