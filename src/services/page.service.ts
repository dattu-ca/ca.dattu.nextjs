// import {axiosContentful} from './axios.config';

import {iPages, iPage} from "~src/models";
import {pageMocks} from "~src/services/mock/page.mock";
import {getAllPages, getPage} from "~src/services/page.graphql";


const fetchPages = async (): Promise<iPages> => {
    try {
        return await getAllPages();
    }
    catch (exception) {
        console.error("Exception in fetchPages", exception);
        return new Promise<iPages>((resolve) => {
            resolve(pageMocks.get);
        });
    }
};

const fetchPage = async (slug: string) => {
    try{
        return await getPage(slug);
    }
    catch(exception){
        console.error("Exception in fetchPage", exception);
        return new Promise<iPage | undefined>((resolve) => {
            resolve(pageMocks.get.pages.find(page => page.slug === slug));
        });
    }
};

export {fetchPages, fetchPage};