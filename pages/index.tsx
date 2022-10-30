import {GetServerSideProps} from 'next'
import {Container} from "@mui/material";
import {fetchSiteConfig} from '~services/siteConfig.service';

const HomePage = () => {
    return (
        <div>
            <Container>
                Hello Container
            </Container>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const siteConfig = await fetchSiteConfig();
    return {
        props: {
            siteConfig
        },
    }
}

export default HomePage;
