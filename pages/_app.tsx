import {AppProps} from "next/app";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {CacheProvider, EmotionCache} from "@emotion/react";
import {theme} from "~src/styles/theme";
import createEmotionCache from "~src/styles/createEmotionCache";
import {HeadComponent} from "~src/components/";
import {iLink, iSiteConfig} from "~src/models";
import {HeaderComponent} from "~src/components";
import {ApolloProvider} from "@apollo/client";
import {gqlClient} from "~src/services/config";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface iPageProps {
    siteData: [iSiteConfig | null, Array<iLink>];
}

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
    pageProps: iPageProps;
}

const MyApp = (props: MyAppProps) => {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    const {siteData} = pageProps;
    return (
        <ApolloProvider client={gqlClient}>
            <CacheProvider value={emotionCache}>
                <HeadComponent siteConfig={siteData?.[0]}/>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <HeaderComponent links={siteData?.[1]}/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </ApolloProvider>
    );
};

export default MyApp;