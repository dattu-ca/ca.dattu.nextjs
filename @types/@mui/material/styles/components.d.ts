import * as components from "@mui/material/styles/components";

declare module "@mui/material/styles/components" {
    interface MuiButton extends components.Components.MuiButton{
        dattu: string;
    }
}