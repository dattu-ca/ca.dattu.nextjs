import Head from "next/head";
import {tSiteData} from "~src/services/pageLoad";


interface iProps {
    siteData: tSiteData;
}

const HeadComponent = (props: iProps) => {
    const siteData = props.siteData;
    const appSettings = siteData.appSettings.contentBlocks.JSONDataWidget?.find(widget => widget.slug === "site-config");

    const title = appSettings?.data.title;
    const description = appSettings?.data.description;
    const keywords = appSettings?.data.keywords;
    const author = appSettings?.data.author;
    const primaryColor = appSettings?.data.primaryColor || "#139587";

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <meta name="theme-color" content={primaryColor} />
        </Head>
    );
};

export default HeadComponent;