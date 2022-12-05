import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {ParsedUrlQuery} from "querystring";

import {fetchPage, fetchPagesSlugs, fetchSiteData} from "~src/services";
import {iPage} from "~src/models";
import {
    Box, Container
} from "@mui/material";
import BannerComponent from "~src/components/Banner";
import {RichTextRenderer} from "~src/components";
import ContentRenderer from "../../src/components/ContentRenderer";


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
                                bannerContent={page.bannerContent}
                                bannersCollection={page.bannersCollection} />
        }
        {
            page.content
            && <Container maxWidth="lg">
                <ContentRenderer content={page.content}  />
            </Container>
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