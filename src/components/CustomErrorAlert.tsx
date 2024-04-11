import { Fragment } from "react/jsx-runtime";
import { error } from "../interfaces/Error";
import { Alert, Snackbar } from "@mui/material";
import { useState, useEffect } from "react";

const CustomErrorAlert = ({ error }: { error: error }) => {
  const [isDisplaying, setDisplaying] = useState<boolean>(false);

  useEffect(() => {
    if (error) {
      setDisplaying(true);
    } else {
      setDisplaying(false);
    }
  }, [error]);

  return (
    <Fragment>
      <Snackbar
        open={isDisplaying}
        autoHideDuration={5000}
        ClickAwayListenerProps={{ onClickAway: () => null }}
        onClick={() => setDisplaying(false)}
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
