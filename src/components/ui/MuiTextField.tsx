import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
import clsx from "clsx";

function MuiTextField(props: TextFieldProps) {
  const { className, ...rest } = props;

  return (
    <TextField
      {...rest}
      fullWidth
      variant="outlined"
      className={clsx("bg-white dark:bg-slate-900", className)}
      sx={{
        "& .MuiInputLabel-root": {
          color: "secondary.main",
        },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "primary.main",
          },
        },
      }}
    />
  );
}

export default MuiTextField;
