import {GetStaticProps} from 'next'
import {Container} from "@mui/material";
import {fetchSiteConfig} from "~src/services/external/siteConfig.external";

const HomePage = () => {
    return (
        <div>
            <Container>
                Hello Container TEST
            </Container>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const siteConfig = await fetchSiteConfig();
    return {
        props: {
            siteConfig
        },
    }
}

export default HomePage;
