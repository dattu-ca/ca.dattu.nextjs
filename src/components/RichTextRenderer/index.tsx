import {documentToReactComponents, Options} from "@contentful/rich-text-react-renderer";
import React, {Fragment} from "react";
import {Document} from "@contentful/rich-text-types";
import {renderOptions} from "./renderOptions";

interface iProps {
    content: Document;
}

const RichTextRenderer = ({content}: iProps) => {
    return <Fragment>
        {documentToReactComponents(content, renderOptions)}
    </Fragment>;
}; 

export default  RichTextRenderer;