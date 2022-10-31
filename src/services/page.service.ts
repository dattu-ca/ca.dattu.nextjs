// import {axiosContentful} from './axios.config';

import {iPages, iPage} from "~src/models";
import {pageMocks} from "~src/services/mock/page.mock";


const fetchPages = () => {
    return new Promise<iPages>((resolve) => {
        resolve(pageMocks.get);
    });
};

const fetchPage = (slug: string) => {
    return new Promise<iPage | undefined>((resolve) => {
        resolve(pageMocks.get.pages.find(page => page.slug === slug));
    });
};

export {fetchPages, fetchPage};