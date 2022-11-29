import {GetStaticProps} from "next";
import {Container} from "@mui/material";


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

    return {
        props: {}
    };
};

export default HomePage;
