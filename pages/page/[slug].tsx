import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {ParsedUrlQuery} from "querystring";
import {Helmet} from "react-helmet";

import {fetchPage, fetchPagesSlugs, fetchSiteData} from "~src/services";
import {iPage} from "~src/models";
import {
    Box,
    Typography
} from "@mui/material";
import BannerComponent from "~src/components/Banner";


interface iPageProps {
    page: iPage;
}

const PagesPage = (props: iPageProps) => {
    const {page} = props;

    return <Box component="main">
        {
            page
            && <BannerComponent pretitle={page.pretitle}
                                title={page.title}
                                subtitle={page.subtitle}
                                bannerContent={page.bannerContent} />
        }

        <Box pb={5} />
        {
            page
            && <pre>{JSON.stringify(page, null, 2)}</pre>
        }

    </Box>;
};


interface iParams extends ParsedUrlQuery {
    slug: string;
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const {slug} = context.params as iParams;
    const data = await fetchSiteData();
    const page = await fetchPage(slug);
    return {
        props: {
            siteData: data,
            page: page
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const result = await fetchPagesSlugs();
    const paths = result.pages.map(page => ({params: {slug: page.slug}}));
    return {
        paths: paths,
        fallback: true
    };
};


export default PagesPage;