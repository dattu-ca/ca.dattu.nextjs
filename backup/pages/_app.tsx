import {AppProps} from "next/app";
import {ApolloProvider} from "@apollo/client";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {CacheProvider, EmotionCache} from "@emotion/react";
import {getTheme} from "~src/styles/theme";
import createEmotionCache from "~src/styles/createEmotionCache";
import {HeadComponent, iMetaProps} from "~src/components/";
import {iLink, iKeyValue} from "~src/models";
import {HeaderComponent} from "~src/components";
import {gqlClient} from "~src/services/config";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


interface iPageProps {
    siteData: [iKeyValue | null, Array<iLink>];
    page: iMetaProps;
}

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
    pageProps: iPageProps;
}

const MyApp = (props: MyAppProps) => {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    const {siteData, page} = pageProps;
    const siteConfig = siteData?.[0];
    const links = siteData?.[1];

    const theme = getTheme({
        primary: siteConfig?.primaryColor,
        secondary: siteConfig?.secondaryColor
    });
    
    return (
        <ApolloProvider client={gqlClient}>
            <CacheProvider value={emotionCache}>
                <HeadComponent siteConfig={siteConfig} meta={page} />
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <HeaderComponent links={links} />
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </ApolloProvider>
    );
};

export default MyApp;