import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { ForceItem } from "../../interfaces/ForceItem";

interface CustomSelectionProps {
  data: ForceItem[];
  loading: boolean;
  label: string;
  selectionChangeCallback?: (selectedItem: string) => void;
}
export const CustomSelection = (props: CustomSelectionProps) => {
  const { data, loading, label, selectionChangeCallback } = props;

  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<typeof selectedItem>) => {
    const { value } = event.target;
    setSelectedItem(value as string);
    if (selectionChangeCallback) {
      selectionChangeCallback(value as string);
    }
  };

  return (
    <Fragment>
      <FormControl sx={{ width: 300, textAlign: "left" }}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={selectedItem}
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
