import Head from "next/head";
import * as _ from 'lodash';
import {tScaffoldingData} from "~src/services";


interface iProps {
    scaffoldingData?: tScaffoldingData;
}

const HeadComponent = (props: iProps) => {
    const siteData = props.scaffoldingData;
    const appSettings =  siteData?.appSettings?.contentBlocks?.JSONDataWidget?.find(widget => widget.slug === "site-config");

    const title = _.get(appSettings, "data.title");
    const description = _.get(appSettings, "data.description");
    const keywords = _.get(appSettings, "data.keywords");
    const author = _.get(appSettings, "data.author");
    const primaryColor = _.get(appSettings, "data.primaryColor") || "#139587";

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