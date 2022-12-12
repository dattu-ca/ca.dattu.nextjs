import {AppProps} from "next/app";
import {ApolloProvider} from "@apollo/client";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {CacheProvider, EmotionCache} from "@emotion/react";
import {getTheme} from "~src/styles/theme";
import createEmotionCache from "~src/styles/createEmotionCache";
import {gqlContentfulClient} from "~gqlContentfulConfig";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;    
}

const MyApp = (props: MyAppProps) => {
    const {Component, emotionCache = clientSideEmotionCache} = props;

    const theme = getTheme();

    return (
        <ApolloProvider client={gqlContentfulClient}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component />
                </ThemeProvider>
            </CacheProvider>
        </ApolloProvider>
    );
};

export default MyApp;