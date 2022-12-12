import {AppProps} from "next/app";
import {ApolloProvider} from "@apollo/client";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {CacheProvider, EmotionCache} from "@emotion/react";
import {getTheme} from "~src/styles/theme";
import createEmotionCache from "~src/styles/createEmotionCache";

import {gqlClient} from "~gqlConfig";
import {tScaffoldingData} from "~src/services";
import {AppLayoutComponent} from "~src/components";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface iPageProps {
    scaffoldingData?: tScaffoldingData;
}

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
    pageProps: iPageProps;
}

const MyApp = (props: MyAppProps) => {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

    const theme = getTheme();

    return (
        <ApolloProvider client={gqlClient}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {/*<AppLayoutComponent scaffoldingData={pageProps.scaffoldingData}>*/}
                    {/*    <Component />*/}
                    {/*</AppLayoutComponent>*/}
                    <Component />
                </ThemeProvider>
            </CacheProvider>
        </ApolloProvider>
    );
};

export default MyApp;