import {Document} from "@contentful/rich-text-types";


interface iContentWidget {
    id: string;
    title: string;
    content: Document | null;
}

export type{
    iContentWidget
};