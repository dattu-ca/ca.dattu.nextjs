import {iBanner} from "./banners.model";
import {Document} from "./contentful.model";

interface iPageSmall {
    slug: string;
}

interface iPage extends iPageSmall {
    metaTitle?: string;
    metaDescription?: string;
    pretitle?: string;
    title: string;
    subtitle?: string;
    bannerContent: Document | null;
    bannersCollection: iBanner[];
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