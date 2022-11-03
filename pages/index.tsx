import {GetStaticProps} from "next";
import {Container} from "@mui/material";
import {fetchSiteData} from "~src/services";


const HomePage = () => {
    return (
        <div>
            <Container>
                Hello Container TEST
            </Container>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const data = await fetchSiteData();
    console.log("data", data);
    return {
        props: {
            siteData: data
        }
    };
};

export default HomePage;
