import {Document} from "@contentful/rich-text-types";


interface iPageSmall {
    slug: string;
}

interface iPage extends iPageSmall {
    pretitle?: string;
    title: string;
    subtitle?: string;
    bannerContent: Document | null;
    content: Document | null;
}

interface iPagesSmall {
    pages: Array<iPageSmall>;
}

interface iPages {
    pages: Array<iPage>;
}

export type {
    iPageSmall,
    iPage,
    iPagesSmall,
    iPages
};