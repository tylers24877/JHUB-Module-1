import dayjs from "dayjs";
import { useEffect, useState } from "react";

type RefetchCallback = (forceId: string, date: dayjs.Dayjs) => void;

const useFormData = (refetchCallback: RefetchCallback) => {
  const [forceId, setForceId] = useState<string>("");

  const [date, setDate] = useState<dayjs.Dayjs>(dayjs().subtract(1, "month"));

  useEffect(() => {
    if (refetchCallback) {
      refetchCallback(forceId, date);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceId, date]);

  return { forceId, setForceId, date, setDate };
};

export default useFormData;
