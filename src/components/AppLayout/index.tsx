import React from "react";
import {tScaffoldingData} from "~src/services";
import HeadComponent from "./Head";
import {HeaderComponent} from "./Header";


interface iProps {
    children: React.ReactNode;
    scaffoldingData?: tScaffoldingData
}

const AppLayoutComponent = ({children, scaffoldingData}: iProps) => {
    return <>
        <HeadComponent scaffoldingData={scaffoldingData} />
        <HeaderComponent scaffoldingData={scaffoldingData} />
        {children}
    </>;
};

export {
    AppLayoutComponent
};