import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));
