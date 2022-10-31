import {AppProps} from "next/app";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {CacheProvider, EmotionCache} from "@emotion/react";
import {theme} from "~src/styles/theme";
import createEmotionCache from "~src/styles/createEmotionCache";
import {HeadComponent} from "~src/components/";
import {iHeaderNavigation, iSiteConfig} from "~src/models";
import {HeaderComponent} from "~src/components";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


interface iPageProps {
    siteData: [iSiteConfig, iHeaderNavigation];
}

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
    pageProps: iPageProps;
}

const MyApp = (props: MyAppProps) => {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    const {siteData} = pageProps;
    return (
        <CacheProvider value={emotionCache}>
            <HeadComponent siteConfig={siteData ? siteData[0] : undefined}/>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <HeaderComponent headerNavigation={siteData ? siteData[1] : undefined}/>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MyApp;