import {MouseEvent, useState} from "react";
import NextLink from "next/link";
import {
    useTheme,
    useMediaQuery,
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Button,
    MenuItem
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "~src/assets/logos/Full-Logo.svg";
import {iHeaderNavigation} from "~src/models";
import SearchComponent from "./search";


interface iProps {
    headerNavigation: iHeaderNavigation;
}

const HeaderComponent = (props: iProps) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

    const {headerNavigation} = props;

    const [anchorElNav, setAnchorElNav] = useState<(EventTarget & HTMLButtonElement) | null>(null);
    const handleOpenNavMenu = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return <AppBar position="sticky" color="transparent" sx={{backgroundColor: "common.white"}}>
        <Container maxWidth={false}>
            <Toolbar disableGutters>
                {
                    matches ? (
                        <Box width="100%" sx={{display: "flex", alignItems: "center"}}>
                            <Box mr={2}>
                                <NextLink href="./">
                                    <Button>
                                        <Logo height={120}
                                              width="100%"
                                              alt={headerNavigation.logo.alt}
                                              title={headerNavigation.logo.alt}/>
                                    </Button>
                                </NextLink>
                            </Box>
                            <Box mr={1}
                                 sx={{
                                     flexGrow: 1,
                                     display: "flex",
                                     justifyContent: "flex-start",
                                     "& a": {
                                         textDecoration: "none"
                                     }
                                 }}>
                                {
                                    headerNavigation.links.map(link => (
                                        <NextLink key={link.href}
                                                  href={link.href}
                                                  passHref>
                                            <Button sx={{
                                                "&:hover": {
                                                    textDecoration: "underline",
                                                    textDecorationColor: "currentcolor"
                                                }
                                            }}>
                                                {link.label}
                                            </Button>
                                        </NextLink>
                                    ))
                                }
                            </Box>
                            <Box>
                                <SearchComponent ariaLabel={headerNavigation.search?.ariaLabel}
                                                 placeholder={headerNavigation.search?.placeholder}/>
                            </Box>
                        </Box>
                    ) : (
                        <Box width="100%" sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                            <Box mr={1}>
                                <NextLink href="./">
                                    <Button>
                                        <Logo height={60}
                                              width="100%"
                                              alt={headerNavigation.logo.alt}
                                              title={headerNavigation.logo.alt}/>
                                    </Button>
                                </NextLink>
                            </Box>
                            <Box mr={1}>
                                <SearchComponent ariaLabel={headerNavigation.search?.ariaLabel}
                                                 placeholder={headerNavigation.search?.placeholder}/>
                            </Box>
                            <Box sx={{display: "flex"}}>
                                <IconButton
                                    data-testid="btn-open-navigation"
                                    size="large"
                                    aria-label="Open navigation menu"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left"
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left"
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: "block",
                                        
                                    }}
                                >
                                    {
                                        headerNavigation.links.map((link) => (
                                            <MenuItem key={link.href}
                                                      onClick={handleCloseNavMenu}>
                                                <Typography component={NextLink}
                                                            href={`${link.href}`}
                                                            sx={{
                                                                textDecoration: "none",
                                                                color: "primary.main"
                                                            }}>
                                                    {link.label}
                                                </Typography>
                                            </MenuItem>
                                        ))
                                    }
                                </Menu>
                            </Box>
                        </Box>
                    )
                }
            </Toolbar>
        </Container>
    </AppBar>;
};

export default HeaderComponent;