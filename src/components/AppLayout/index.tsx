import React from "react";
import {tSiteData} from "~src/services/pageLoad";
import HeadComponent from "./Head";


interface iProps {
    children: React.ReactNode;
    siteData: tSiteData
}

const AppLayoutComponent = ({children, siteData}: iProps) => {
    return <>
        <HeadComponent siteData={siteData} />
        {children}
    </>;
};

export {
    AppLayoutComponent
};