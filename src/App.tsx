import { Box, Stack } from "@mui/material";
import { CustomPaper } from "./components/CustomPaper";
import { CustomSelection } from "./components/form/MultiChipSelection";
import { usePoliceData } from "./api_connector/API";
import { CustomBarChart } from "./components/CustomBarChart";

function App() {
  const { forceList, stopAndSearchData, updateStopAndSearchData } =
    usePoliceData();

  const selectionChangeCallback = async (value: string) => {
    updateStopAndSearchData(value);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Stack>
        <CustomPaper>
          <h1>Stop and Searches by Force</h1>
          <CustomSelection
            data={forceList}
            label="Police Force"
            selectionChangeCallback={selectionChangeCallback}
          />
          <CustomBarChart stopAndSearchData={stopAndSearchData} />
        </CustomPaper>
      </Stack>
    </Box>
  );
}

export default App;
