import {GetStaticProps} from "next";
import {Container} from "@mui/material";
import {fetchDataForPageLoad} from "~src/services/pageLoad";


const HomePage = () => {
    return (
        <div>
            <Container>
                Hello Container TEST
            </Container>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async (x) => {
    const siteData = await fetchDataForPageLoad();
    return {
        props: {
            siteData
        }
    };
};

export default HomePage;
