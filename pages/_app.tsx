import {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider, EmotionCache} from '@emotion/react';
import {theme} from '~src/styles/theme';
import createEmotionCache from '~src/styles/createEmotionCache';
import {HeadComponent} from "~src/components/";
import {iHeaderNavigation, iSiteConfig} from "~src/models";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
    siteConfig: iSiteConfig;
    headerNavigation: iHeaderNavigation;
}

const MyApp = (props: MyAppProps) => {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    const {siteConfig} = pageProps;
    return (
        <CacheProvider value={emotionCache}>
            <HeadComponent siteConfig={siteConfig}/>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;