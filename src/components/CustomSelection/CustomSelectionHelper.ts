import { SelectChangeEvent } from "@mui/material";

const useCustomSelection = (
  selectionChangeCallback?: (selectedItem: string) => void
) => {
  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    if (selectionChangeCallback) {
      selectionChangeCallback(value as string);
    }
  };
  return { handleChange };
};
export default useCustomSelection;
