import {iBanner} from "./banners.model";
import {Document} from "./contentful.model";
import {tContentList} from "./contentList.model";


interface iBasePage {
    slug: string;
}

interface iPage extends iBasePage {
    metaTitle?: string;
    metaDescription?: string;
    pretitle?: string;
    title: string;
    subtitle?: string;
    bannerContent: Document | null;
    bannersCollection: iBanner[];
    content: Document | null;
    contentList: tContentList;
}

interface iPagesSmall {
    pages: Array<iBasePage>;
}

interface iPages {
    pages: Array<iPage>;
}

export type {
    iBasePage,
    iPage,
    iPagesSmall,
    iPages
};