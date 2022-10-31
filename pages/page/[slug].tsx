import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {ParsedUrlQuery} from "querystring";
import {fetchPage, fetchPages, fetchSiteData} from "~src/services";
import {iPage} from "~src/models";


interface iPageProps {
    page: iPage;
}

const PagesPage = (props: iPageProps) => {
    const {page} = props;
    return <div>
        <pre>{JSON.stringify(page, null, 2)}</pre>
    </div>;
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
    const result = await fetchPages();
    const paths = result.pages.map(page => ({params: {slug: page.slug}}));
    return {
        paths: paths,
        fallback: true
    };
};


export default PagesPage;