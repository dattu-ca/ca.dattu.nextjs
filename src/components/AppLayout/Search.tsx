import * as React from "react";
import {styled, alpha} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({theme}) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.1)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto"
    }
}));

const SearchIconWrapper = styled("div")(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch"
        }
    }
}));

interface iProps {
    placeholder?: string;
    ariaLabel?: string;
}

const SearchComponent = (props: iProps) => {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon color="primary"/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder={props.placeholder}
                inputProps={{"aria-label": props.ariaLabel}}
            />
        </Search>
    );
};
SearchComponent.defaultProps = {
    placeholder: "Search...",
    ariaLabel: "search"
};
export default SearchComponent;
