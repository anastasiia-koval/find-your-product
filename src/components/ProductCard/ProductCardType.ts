export interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  capacity: number;
  size: string;
  functionality: string;
  energyClass: EnerglyClass;
  priceExpireDateRange: PriceExpiryDateProps;
  price: number;
  currency: CurrencyType;
  installment: string;
}

interface PriceExpiryDateProps {
  from: string;
  to: string;
}

type EnerglyClass = "A" | "B" | "C" | "D" | "F" | "E";
type CurrencyType = "zl" | "dollars";
