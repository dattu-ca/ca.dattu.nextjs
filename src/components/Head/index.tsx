import Head from "next/head";
import {iSiteConfig} from "~src/models";

interface iProps {
    siteConfig: iSiteConfig
}

const HeadComponent = (props: iProps) => {
    const {siteConfig} = props;
    return (
        <Head>
            <title>{siteConfig?.title}</title>
            <meta name="description" content={siteConfig?.description}/>
            <meta name="keywords" content={siteConfig?.keywords}/>
            <meta name="author" content={siteConfig?.author}/>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Head>
    );
}

export default HeadComponent;