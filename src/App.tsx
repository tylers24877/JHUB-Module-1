import { Fragment } from "react/jsx-runtime";
import { Grid } from "@mui/material";
import PoliceForceSearch from "./components/PoliceForceSearch/PoliceForceSearch";

function App() {
  return (
    <Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "100vh",
        }}
      >
        <Grid item xs={12} sx={{ minWidth: { xs: "100%", md: "unset" } }}>
          <PoliceForceSearch />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
