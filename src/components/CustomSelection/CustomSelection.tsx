import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { ForceItem } from "../../interfaces/ForceItem";
import useCustomSelection from "./CustomSelectionHelper";

interface CustomSelectionProps {
  data: ForceItem[];
  label: string;
  value: string;
  setValue: (value: string) => void;
}

export const CustomSelection = (props: CustomSelectionProps) => {
  const { data, label, value, setValue } = props;

  const { handleChange } = useCustomSelection(setValue);

  return (
    <Fragment>
      <FormControl sx={{ width: 300, textAlign: "left" }}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
        >
          {data.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};
