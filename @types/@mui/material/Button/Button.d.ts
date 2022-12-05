import * as MuiButton from "@mui/material/Button/Button";


declare module "@mui/material/Button/Button" {
    interface ButtonProps extends MuiButton.ButtonProps<P, D> {
        dattu: MuiButton.OverrideProps<MuiButton.ButtonTypeMap<P, D>, D>;
    }
}