import {GetStaticProps} from "next";
import {Container} from "@mui/material";
import {fetchScaffoldingData} from "~src/services";


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
    const scaffoldingData = await fetchScaffoldingData();
    return {
        props: {
            scaffoldingData
        }
    };
};

export default HomePage;
