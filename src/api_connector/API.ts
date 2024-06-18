import { useState, useEffect, useCallback } from "react";
import { ForceItem } from "../interfaces/ForceItem";
import { StopAndSearchData } from "../interfaces/StopAndSearch";
import { LoadingState } from "../interfaces/LoadingState";
import { Error } from "../interfaces/Error";
import { Dayjs } from "dayjs";

/**
 * Custom hook for fetching police data.
 */
const usePoliceData = () => {
  const [forceList, setForceList] = useState<ForceItem[]>([]);

  const [stopAndSearchData, setStopAndSearchData] = useState<
    StopAndSearchData[]
  >([]);

  const [loading, setLoading] = useState<LoadingState>({
    forceList: true,
    stopAndSearch: false,
  });

  const [error, setError] = useState<Error>(null);

  /**
   * Fetches the list of police forces from the API.
   * @returns {Promise<void>} A promise that resolves when the data is fetched successfully.
   */
  const getForceList = useCallback(async () => {
    setError(null);
    setLoading((prevLoading) => ({ ...prevLoading, forceList: true }));
    try {
      const response = await fetch("https://data.police.uk/api/forces");
      setLoading((prevLoading) => ({ ...prevLoading, forceList: false }));
      if (!response.ok) {
        setError("Network response was not ok");
      }
      setForceList(await response.json());
    } catch (error) {
      setError("An error occurred while fetching the data");
    }
  }, []);

  /**
   * Fetches stop and search data from the police API for a specific force.
   * @param forceId - The ID of the force for which to fetch the data.
   * @param date - The date for which to fetch the data.
   */
  const refetch = async (forceId: string, date: Dayjs) => {
    if (!forceId) {
      return;
    }
    setError(null);
    setLoading((prevLoading) => ({ ...prevLoading, stopAndSearch: true }));
    try {
      const response = await fetch(
        `https://data.police.uk/api/stops-force?force=${forceId}&date=${date.format(
          "YYYY-MM"
        )}`
      );
      setLoading((prevLoading) => ({
        ...prevLoading,
        stopAndSearch: false,
      }));
      if (!response.ok) {
        setError("Network response was not ok");
      }
      setStopAndSearchData(await response.json());
    } catch (error) {
      setError("An error occurred while fetching the data");
    }
  };

  useEffect(() => {
    getForceList();
  }, [getForceList]);

  return {
    forceList,
    stopAndSearchData,
    refetch,
    loading,
    error,
  };
};

export { usePoliceData };
