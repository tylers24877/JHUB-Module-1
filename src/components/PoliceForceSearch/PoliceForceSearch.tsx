import { Typography, Fade, CircularProgress, Stack } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { usePoliceData } from "../../api_connector/API";
import { CustomBarChart } from "../CustomBarChart/CustomBarChart";
import { CustomPaper } from "../CustomPaper";
import { CustomSelection } from "../CustomSelection/CustomSelection";
import { CustomErrorAlert } from "../CustomErrorAlert";
import CustomDatePicker from "../CustomDatePicker";
import useFormData from "./PoliceForceSearchHelper";

const PoliceForceSearch = () => {
  const { forceList, stopAndSearchData, refetch, loading, error } =
    usePoliceData();

  const { date, setDate, forceId, setForceId } = useFormData(refetch);

  return (
    <Fragment>
      <CustomErrorAlert error={error} />
      <CustomPaper sx={{ minHeight: { xs: "100vh", md: "unset" } }}>
        <Stack sx={{ alignItems: "center" }} spacing={4}>
          <Typography variant="h4">Stop and Searches by Force</Typography>
          <Stack spacing={1} sx={{ alignItems: "center" }}>
            <CustomSelection
              value={forceId}
              setValue={setForceId}
              data={forceList}
              label="Police Force"
            />
            <CustomDatePicker value={date} setValue={setDate} />
            <Typography variant="caption">
              Some Police forces may have no data.
            </Typography>
          </Stack>
          <div style={{ position: "relative" }}>
            <Fade in={stopAndSearchData.length > 0} timeout={500}>
              <div>
                <CustomBarChart stopAndSearchData={stopAndSearchData} />
              </div>
            </Fade>
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
            <Fade in={stopAndSearchData.length === 0} timeout={500}>
              <Typography
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
                variant="body1"
              >
                No Data
              </Typography>
            </Fade>
          </div>
        </Stack>
      </CustomPaper>
    </Fragment>
  );
};
export default PoliceForceSearch;
