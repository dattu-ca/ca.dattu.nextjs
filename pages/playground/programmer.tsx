import {GetStaticProps} from "next";
import {Box} from "@mui/material";
import {fetchSiteData} from "~src/services";
import BannerComponent from "~src/components/Banner";


const ProgrammerPage = () => {
    return (
        <Box>
            <BannerComponent title="Web Developer">
                
            </BannerComponent>
            <p>CONTENT STARTS HERE</p>
        </Box>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const data = await fetchSiteData();
    return {
        props: {
            siteData: data
        }
    };
};

export default ProgrammerPage;
