import Head from "next/head";
import {iKeyValue} from "~src/models";


interface iSiteConfig extends iKeyValue {
    title?: string;
    description?: string;
    keywords?: string;
    author?: string;
}

interface iProps {
    siteConfig: iSiteConfig | null;
    pageTitle?:string;
}

const HeadComponent = (props: iProps) => {
    const {siteConfig, pageTitle} = props;
    if (!siteConfig) {
        return null;
    }
    const title = `${ pageTitle && pageTitle + ' | ' } ${siteConfig?.title}`;
    
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={siteConfig?.description}/>
            <meta name="keywords" content={siteConfig?.keywords}/>
            <meta name="author" content={siteConfig?.author}/>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Head>
    );
};

export default HeadComponent;