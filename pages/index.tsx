import {GetStaticProps} from 'next'
import {Container} from "@mui/material";


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
    const siteConfig = {
        title: 'dattu.ca | Portfolio | Personal Blog',
        description: 'This site is a portfolio as an actor, developer and a human; as well as a personal blog.',
        keywords: 'Actor, Developer, Human, Spiritual, Portfolio, Blog',
        author: 'Dattu Patel'
    };
    return {
        props: {
            siteConfig
        },
    }
}

export default HomePage;
