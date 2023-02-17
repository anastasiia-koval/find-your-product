import Flag from "../../assets/svg/flag.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./EnergeticChip.scss";

const EnergeticChip = ({ energyClass }: { energyClass: string }) => {
  return (
    <Box className="chipContainer">
      <img src={Flag} alt="flag" />
      <Typography className="text">{energyClass}</Typography>
    </Box>
  );
};

export default EnergeticChip;
