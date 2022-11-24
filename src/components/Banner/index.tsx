import React, {ReactNode, useState} from "react";
import {Container, lighten, Typography, useTheme, Box} from "@mui/material";
import {Property} from "csstype";


interface iClasses {
    banner?: string;
    container?: string;
    title?: string;
    subtitle?: string;
}

interface iProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
    bannerColor?: Property.Color;
    bannerBg?: string;
    classes?: iClasses;
}

const BannerComponent = ({title, subtitle, bannerBg, bannerColor, classes, children}: iProps) => {
    const theme = useTheme();

    const [wrapperHeight, setWrapperHeight] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);

    return <Box className={classes?.banner}
                ref={(r: HTMLDivElement) => {
                    setWrapperHeight(r?.offsetHeight || 0);
                }}
                sx={{
                    backgroundColor: bannerColor ? bannerColor : lighten(theme.palette.secondary.main, 0.0),
                    backgroundImage: `url("${bannerBg}")`,
                    paddingTop: [theme.spacing(17), theme.spacing(17)],
                    px: theme.spacing(3),
                    position: "relative",
                    boxShadow: theme.shadows[4],
                    marginBottom: (containerHeight - (wrapperHeight - 60 - 10)) / 10
                }}>
        <Container maxWidth="md"
                   className={classes?.container}
                   ref={(r: HTMLDivElement) => {
                       setContainerHeight(r?.offsetHeight || 0);
                   }}
                   sx={{
                       backgroundColor: theme.palette.common.white,
                       borderColor: bannerColor ? bannerColor : lighten(theme.palette.secondary.main, 0.0),
                       borderWidth: 0,
                       borderStyle: "solid",
                       py: theme.spacing(5),
                       position: "absolute",
                       top: theme.spacing(6),
                       left: "50%",
                       transform: "translate(-50%)",
                       boxShadow: theme.shadows[8]
                   }}>
            <Typography variant="h3"
                        component="h1"
                        textAlign="center"
                        className={classes?.title}>
                {title}
            </Typography>
            {
                subtitle
                && <Typography variant="h6"
                               component="h2"
                               textAlign="center"
                               className={classes?.subtitle}>
                    {subtitle}
                </Typography>
            }
            <Box>
                {children}
            </Box>
        </Container>
    </Box>;
};

export default BannerComponent;