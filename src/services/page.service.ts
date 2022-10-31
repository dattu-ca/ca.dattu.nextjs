import {iPages, iPage} from "~src/models";
import {pageMocks} from "./mock/page.mock";
import {getAllPages, getPage} from "./page.graphql";


const fetchPages = async (): Promise<iPages> => {
    try {
        return await getAllPages();
    }
    catch (exception) {
        console.error("Exception in fetchPages", exception);
        return new Promise<iPages>((resolve) => {
            resolve({pages: []});
        });
    }
};

const fetchPage = async (slug: string) => {
    try {
        return await getPage(slug);
    }
    catch (exception) {
        console.error("Exception in fetchPage", exception);
        return new Promise<iPage | undefined>((resolve) => {
            resolve(undefined);
        });
    }
};

export {fetchPages, fetchPage};