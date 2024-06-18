import { useState, useEffect } from "react";
import { TypeCounts } from "../../interfaces/TypeCounts";
import { StopAndSearchData } from "../../interfaces/StopAndSearch";

const useBarChart = (data: StopAndSearchData[]) => {
  const [typeCounts, setTypeCounts] = useState<TypeCounts>({
    "No Data": 0,
  });

  const types = Object.keys(typeCounts);
  const counts = Object.values(typeCounts);

  useEffect(() => {
    const counts: TypeCounts = {};

    // Count occurrences of each type
    data.forEach((entry) => {
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
  }, [data]);

  return { types, counts };
};
export default useBarChart;
