import { Fragment } from "react/jsx-runtime";
import { Error } from "../interfaces/Error";
import { Alert, Snackbar } from "@mui/material";
import { useState, useEffect } from "react";

const useErrorAlert = (error: Error) => {
  const [isDisplaying, setDisplaying] = useState<boolean>(false);

  useEffect(() => {
    if (error) {
      setDisplaying(true);
    } else {
      setDisplaying(false);
    }
  }, [error]);

  return { isDisplaying, setDisplaying };
};

const CustomErrorAlert = ({ error }: { error: Error }) => {
  const { isDisplaying, setDisplaying } = useErrorAlert(error);

  return (
    <Fragment>
      <Snackbar
        open={isDisplaying}
        autoHideDuration={5000}
        ClickAwayListenerProps={{ onClickAway: () => null }}
        onClick={() => setDisplaying(false)}
        onClose={() => setDisplaying(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};
export { CustomErrorAlert };
