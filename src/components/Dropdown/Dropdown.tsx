import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

interface DropdownProps {
  value: string | number;
  label: string;
  items: Array<ItemsProps>;
  handleChange: any;
}
interface ItemsProps {
  value: string | number;
  label: string;
}

const Dropdown = (props: DropdownProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <InputLabel
        id={`select-label-${props.label}`}
        sx={{ fontSize: "20px", fontWeight: 700, color: "black" }}
      >
        {props.label}
      </InputLabel>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          onChange={props.handleChange}
          sx={{
            backgroundColor: "white",
            textAlign: "start",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
          }}
        >
          {props.items.map((item, index) => {
            return (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
