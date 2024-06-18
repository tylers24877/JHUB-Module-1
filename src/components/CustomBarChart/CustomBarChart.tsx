import { BarChart } from "@mui/x-charts";
import { Fragment } from "react/jsx-runtime";
import { StopAndSearchData } from "../../interfaces/StopAndSearch";
import useBarChart from "./CustomBarChartHelper";

const CustomBarChart = (props: { stopAndSearchData: StopAndSearchData[] }) => {
  const { stopAndSearchData } = props;

  const { types, counts } = useBarChart(stopAndSearchData);

  return (
    <Fragment>
      <BarChart
        series={[{ data: counts }]}
        width={500}
        height={300}
        xAxis={[{ data: types, scaleType: "band" }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </Fragment>
  );
};
export { CustomBarChart };
