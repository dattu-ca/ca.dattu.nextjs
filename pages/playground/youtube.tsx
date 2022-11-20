import {GetStaticProps} from "next";
import axios from "axios";
import {Box, Button, Container, TextField} from "@mui/material";
import {fetchSiteData} from "~src/services";
import {useState} from "react";


const YoutubePage = () => {

    const [value, setValue] = useState<string>();


    const onClickSubmitHandler = () => {
        axios.post("/api/playground/youtube", {
            value: value
        }).then(r => r);
    };

    return (
        <div>
            <Box mt={3}/>
            <Container>
                <TextField value={value} label="Youtube" variant="outlined"
                           onChange={e => setValue(e.currentTarget.value)} fullWidth={true}/>
                <Button onClick={onClickSubmitHandler}>Submit</Button>
            </Container>
        </div>
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

export default YoutubePage;
