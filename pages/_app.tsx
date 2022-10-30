import {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider, EmotionCache} from '@emotion/react';
import {theme} from '~styles/theme';
import createEmotionCache from '~styles/createEmotionCache';
import {iSiteConfig} from "~models/siteConfig.model";
import Head from "next/head";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
    siteConfig: iSiteConfig
}

const MyApp = (props: MyAppProps) => {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    const {siteConfig} = pageProps;
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>{siteConfig?.title}</title>
                <meta name="description" content={siteConfig?.description}/>
                <meta name="keywords" content={siteConfig?.keywords}/>
                <meta name="author" content={siteConfig?.author}/>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;