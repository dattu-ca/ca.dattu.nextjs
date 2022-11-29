import React, {ReactNode, useEffect, useRef, useState} from "react";
import {Container, lighten, Typography, useTheme, Box, Grid} from "@mui/material";
import {Property} from "csstype";
import {iSize, useWindowSize} from "~src/hooks/useWindowSize";
import {iBanner, Document} from "~src/models";
import RichTextRenderer from "../RichTextRenderer";


interface iClasses {
    banner?: string;
    container?: string;
    title?: string;
    subtitle?: string;
}

interface iProps {
    pretitle?: string;
    title: string;
    titleIcon?: ReactNode;
    subtitle?: string;
    bannerContent?: Document | null;
    bannerColor?: Property.Color;
    bannersCollection: iBanner[];
    children?: ReactNode;
    classes?: iClasses;
}

const BannerComponent = ({
                             pretitle,
                             title,
                             titleIcon,
                             subtitle,
                             bannersCollection,
                             bannerColor,
                             classes,
                             bannerContent,
                             children
                         }: iProps) => {
    const theme = useTheme();
    const wrapperRef = useRef<HTMLDivElement>();
    const containerRef = useRef<HTMLDivElement | undefined>();

    const [wrapperHeight, setWrapperHeight] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const size: iSize = useWindowSize();

    useEffect(() => {
        setWrapperHeight(wrapperRef?.current?.offsetHeight || 0);
        setContainerHeight(containerRef?.current?.offsetHeight || 0);
    }, [size.width]);

    return <Box className={classes?.banner}
                ref={wrapperRef}
                sx={{
                    height: containerHeight * (3 / 4),
                    px: theme.spacing(3),
                    position: "relative",
                    boxShadow: theme.shadows[4],
                    marginBottom: (containerHeight - (wrapperHeight - 60 - 10)) / 10
                }}>
        <Box component="span"
             role="img"
             aria-label={bannersCollection?.[0]?.fileName}
             aria-description={bannersCollection?.[0]?.description}
             sx={{
                 backgroundColor: bannerColor ? bannerColor : lighten(theme.palette.secondary.main, 0.0),
                 backgroundImage: `url("${bannersCollection?.[0]?.url}")`,
                 backgroundSize: "cover",
                 backgroundRepeat: "no-repeat",
                 height: "100%",
                 width: "100%",
                 position: "absolute",
                 top: 0,
                 left: 0
             }} />
        <Container maxWidth="lg"
                   component={Box}
                   className={classes?.container}
                   ref={containerRef}
                   sx={{
                       p: 0,
                       position: "absolute",
                       top: theme.spacing(5),
                       left: "50%",
                       transform: "translate(-50%)"
                   }}>
            <Box sx={{
                backgroundColor: theme.palette.common.white,
                borderColor: bannerColor
                             ? bannerColor
                             : lighten(theme.palette.secondary.main, 0.0),
                borderWidth: 0,
                borderStyle: "solid",
                py: theme.spacing(5),
                px: theme.spacing(5),
                mx: theme.spacing(2),
                boxShadow: theme.shadows[8]
            }}>
                {
                    pretitle
                    && <Typography variant="h2"
                                   component="h2"
                                   textAlign="center"
                                   color="secondary.main"
                                   className={classes?.subtitle}>
                        <span dangerouslySetInnerHTML={{__html: pretitle}} />
                    </Typography>
                }
                <Typography variant="h1"
                            component="h1"
                            textAlign="center"
                            color="primary.main"
                            className={classes?.title}>
                    <Grid container
                          spacing={1}
                          alignItems="center"
                          justifyContent="center"
                          sx={{flexWrap: "nowrap"}}>
                        {
                            titleIcon && <Grid item>{titleIcon}</Grid>
                        }
                        <Grid item>
                            <span dangerouslySetInnerHTML={{__html: title}} />
                        </Grid>
                    </Grid>
                </Typography>
                {
                    subtitle
                    && <Typography variant="h2"
                                   component="h2"
                                   textAlign="center"
                                   color="secondary.main"
                                   className={classes?.subtitle}>
                        <span dangerouslySetInnerHTML={{__html: subtitle}} />
                    </Typography>
                }

                {
                    bannerContent
                    && (
                        <Box mt={2}>
                            <RichTextRenderer content={bannerContent} />
                        </Box>
                    )
                }
                {
                    children
                    && (
                        <Box mt={2}>
                            {children}
                        </Box>
                    )
                }
            </Box>
        </Container>
    </Box>;
};

export default BannerComponent;