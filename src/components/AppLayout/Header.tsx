import {MouseEvent, useState} from "react";
import * as _ from "lodash";
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
import {tSiteData} from "~src/services/pageLoad";
import SearchComponent from "./Search";


interface iProps {
    siteData?: tSiteData;
}

const HeaderComponent = (props: iProps) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const [anchorElNav, setAnchorElNav] = useState<(EventTarget & HTMLButtonElement) | null>(null);

    const {siteData} = props;
    const links = siteData?.header?.contentBlocks?.NavigationWidget?.find(widget => widget.slug === "header-navigation")?.links;
    const headerConfig = siteData?.header?.contentBlocks?.JSONDataWidget?.find(widget => widget.slug === "header-config")?.data;
    const headerLogos = siteData?.header?.contentBlocks?.AssetsGalleryWidget?.find(widget => widget.slug === "header-logos")?.assets;

    const logos = {
        full: headerLogos?.find(logo => logo.slug === "logo-full"),
        small: headerLogos?.find(logo => logo.slug === "logo-circle")
    };

    if (!links) {
        return null;
    }
    const handleOpenNavMenu = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return <AppBar position="sticky" color="transparent"
                   sx={{backgroundColor: "common.white", boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)"}}
                   elevation={0}>
        <Container maxWidth={false}>
            <Toolbar disableGutters>
                {
                    !matches ? (
                        <Box width="100%" sx={{display: "flex", alignItems: "center"}}>
                            <Box mr={2}>
                                <NextLink href="/">
                                    <Button>
                                        {
                                            logos.full
                                            && <picture>
                                                <img src={logos.full.asset.url}
                                                     alt={`${logos.full.name} ${logos.full.description || ''}` }
                                                     title={`${logos.full.name} ${logos.full.description || ''}` }
                                                     width="100%"
                                                     height={120}
                                                />
                                            </picture>
                                        }
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
                                    links.map(link => (
                                        <NextLink key={link.url}
                                                  href={link.url}
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
                                <SearchComponent ariaLabel={_.get(headerConfig, "search.ariaLabel")}
                                                 placeholder={_.get(headerConfig, "search.placeHolders")} />
                            </Box>
                        </Box>
                    ) : (
                        <Box width="100%" sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                            <Box mr={1}>
                                <NextLink href="/">
                                    <Button>
                                        {
                                            logos.small
                                            && <picture>
                                                <img src={logos.small.asset.url}
                                                     alt={`${logos.small.name} ${logos.small.description || ''}` }
                                                     title={`${logos.small.name} ${logos.small.description || ''}` }
                                                     width="100%"
                                                     height={60}
                                                />
                                            </picture>
                                        }
                                    </Button>
                                </NextLink>
                            </Box>
                            <Box mr={1}>
                                <SearchComponent ariaLabel={"Search"}
                                                 placeholder={"Search..."} />
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
                                    <MenuIcon />
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
                                        display: "block"

                                    }}
                                >
                                    {
                                        links.map((link) => (
                                            <MenuItem key={link.url}
                                                      onClick={handleCloseNavMenu}>
                                                <Typography component={NextLink}
                                                            href={`${link.url}`}
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

export {HeaderComponent};