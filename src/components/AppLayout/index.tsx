import React from "react";
import {tSiteData} from "~src/services/pageLoad";
import HeadComponent from "./Head";
import {HeaderComponent} from "./Header";


interface iProps {
    children: React.ReactNode;
    siteData: tSiteData
}

const AppLayoutComponent = ({children, siteData}: iProps) => {
    return <>
        <HeadComponent siteData={siteData} />
        <HeaderComponent siteData={siteData} />
        {children}
    </>;
};

export {
    AppLayoutComponent
};