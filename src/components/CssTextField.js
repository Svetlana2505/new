import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const CssTextField = styled(TextField)({
  label: {
    fontSize: "16x",
    lineHeight: "26px",
    fontFamily: "Nunito",
    fontWeight: 400,
    color: "#7E7E7E",
  },
  "&.MuiFormControl-root": {
    // marginBottom: "25px",
    width: "100%",
  },

  "& label.Mui-focused": {
    color: "#D0CFCF",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#D0CFCF",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#D0CFCF",
    },
  },
});
