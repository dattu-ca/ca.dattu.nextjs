interface iPage {
    id?: string;
    slug: string;
    title: string;
    content: any;    
}

interface iPages {
    pages: Array<iPage>
}

export type {
    iPage,
    iPages
};