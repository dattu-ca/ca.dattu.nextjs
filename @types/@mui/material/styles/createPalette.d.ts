import * as createPalette from "@mui/material/styles/createPalette";


declare module "@mui/material/styles/createPalette" {
    interface CommonColors extends createPalette.CommonColors{
        brandGreen: string;
        brandBrown: string;
    }
}