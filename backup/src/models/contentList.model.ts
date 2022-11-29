import {Document} from "@contentful/rich-text-types";
import {iKeyValue} from "./keyValue.model";
import {iLink} from "./link.model";


interface iBase {
    __typename: string;
    id: string;
    title: string;
}


interface iContentWidget extends iBase {
    content: Document | null;
}

interface iExperience extends iBase {
    experiencesList: string[];
}


type tContentList =
    Array<iExperience | iContentWidget | iKeyValue | iLink>
    | iExperience
    | iContentWidget
    | iKeyValue
    | iLink
    | null;

export type{
    iContentWidget,
    iExperience,
    tContentList
};