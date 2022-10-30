import {GetStaticProps} from 'next'
import {Container} from "@mui/material";
import {fetchSiteConfigFromExternal} from "~services/siteConfig.api";

const HomePage = () => {
    return (
        <div>
            <Container>
                Hello Container
            </Container>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const siteConfig = await fetchSiteConfigFromExternal();
    return {
        props: {
            siteConfig
        },
    }
}

export default HomePage;
