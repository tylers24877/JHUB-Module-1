import { BarChart } from "@mui/x-charts";
import { useState, useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import { StopAndSearchData } from "../interfaces/StopAndSearch";
import { TypeCounts } from "../interfaces/TypeCounts";

const CustomBarChart = (props: { stopAndSearchData: StopAndSearchData[] }) => {
  const { stopAndSearchData } = props;
  const [typeCounts, setTypeCounts] = useState<TypeCounts>({
    "No Data": 0,
  });

  useEffect(() => {
    const counts: TypeCounts = {};

    // Count occurrences of each type
    stopAndSearchData.forEach((entry) => {
      if (entry.type in counts) {
        counts[entry.type]++;
      } else {
        counts[entry.type] = 1;
      }
    });
    if (Object.keys(counts).length === 0) {
      counts["No data"] = 0;
    }
    setTypeCounts(counts);
  }, [stopAndSearchData]);

  const types = Object.keys(typeCounts);
  const counts = Object.values(typeCounts);

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
