import { useState, useEffect, useCallback } from "react";
import { ForceItem } from "../interfaces/ForceItem";
import { StopAndSearchData } from "../interfaces/StopAndSearch";
import { LoadingState } from "../interfaces/LoadingState";

const usePoliceData = () => {
  const [forceList, setForceList] = useState<ForceItem[]>([]);
  const [stopAndSearchData, setStopAndSearchData] = useState<
    StopAndSearchData[]
  >([]);

  const [loading, setLoading] = useState<LoadingState>({
    forceList: true,
    stopAndSearch: true,
  });

  const getForceList = useCallback(async () => {
    setLoading((prevLoading) => ({ ...prevLoading, forceList: true }));
    try {
      const response = await fetch("https://data.police.uk/api/forces");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setForceList(data);
    } catch (error) {}
    setLoading((prevLoading) => ({ ...prevLoading, forceList: false }));
  }, []); // empty dependency array since there are no external dependencies

  const updateStopAndSearchData = async (forceId: string) => {
    setLoading((prevLoading) => ({ ...prevLoading, stopAndSearch: true }));
    try {
      const response = await fetch(
        `https://data.police.uk/api/stops-force?force=${forceId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setStopAndSearchData(data);
    } catch (error) {}
    setLoading((prevLoading) => ({
      ...prevLoading,
      stopAndSearch: false,
    }));
  };

  useEffect(() => {
    getForceList();
  }, [getForceList]);

  return { forceList, stopAndSearchData, updateStopAndSearchData, loading };
};

export { usePoliceData };
