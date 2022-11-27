import Head from "next/head";
import {iKeyValue} from "~src/models";


interface iSiteConfig extends iKeyValue {
    title?: string;
    description?: string;
    keywords?: string;
    author?: string;
}

export interface iMetaProps {
    metaTitle: string;
    metaDescription: string;
}

interface iProps {
    siteConfig: iSiteConfig | null;
    meta?: iMetaProps;
}

const HeadComponent = (props: iProps) => {
    const {siteConfig, meta} = props;
    if (!siteConfig) {
        return null;
    }
    const title = `${meta?.metaTitle && meta?.metaTitle + " | "} ${siteConfig?.title}`;
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={meta?.metaDescription || siteConfig?.description} />
            <meta name="keywords" content={siteConfig?.keywords} />
            <meta name="author" content={siteConfig?.author} />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
    );
};

export default HeadComponent;