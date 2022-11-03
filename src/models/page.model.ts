interface iPageSmall {
    slug: string;
}
interface iPage extends iPageSmall{    
    title: string;
    content?: any;    
}

interface iPagesSmall{
    pages: Array<iPageSmall>
}

interface iPages {
    pages: Array<iPage>
}

export type {
    iPageSmall,
    iPage,
    iPagesSmall,
    iPages
};