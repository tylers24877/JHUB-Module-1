import { Box, CircularProgress, Fade, Stack, Typography } from "@mui/material";
import { CustomPaper } from "./components/CustomPaper";
import { CustomSelection } from "./components/form/CustomSelection";
import { usePoliceData } from "./api_connector/API";
import { CustomBarChart } from "./components/CustomBarChart";
import { Fragment } from "react/jsx-runtime";
import { CustomErrorAlert } from "./components/CustomErrorAlert";

function App() {
  const { forceList, stopAndSearchData, refetch, loading, error } =
    usePoliceData();

  const selectionChangeCallback = async (value: string) => {
    refetch(value);
  };

  return (
    <Fragment>
      <CustomErrorAlert error={error} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CustomPaper>
          <Stack alignItems="center" spacing={4}>
            <Typography variant="h4">Stop and Searches by Force</Typography>
            <Stack>
              <CustomSelection
                data={forceList}
                loading={loading.forceList}
                label="Police Force"
                selectionChangeCallback={selectionChangeCallback}
              />
              <Typography variant="caption">
                Some Police forces may have no data.
              </Typography>
            </Stack>
            <div style={{ position: "relative" }}>
              <CustomBarChart stopAndSearchData={stopAndSearchData} />
              <Fade in={loading.stopAndSearch} timeout={500}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress />
                </div>
              </Fade>
            </div>
          </Stack>
        </CustomPaper>
      </Box>
    </Fragment>
  );
}

export default App;
