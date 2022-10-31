// import {axiosContentful} from './axios.config';

import {iHeaderNavigation} from "~src/models";
import {headerNavigationMock} from "~src/services/mock/headerNavigation.mock";

const fetchHeaderNavigation = () => {
    return new Promise<iHeaderNavigation>((resolve) => {
        resolve(headerNavigationMock.get)
    })
}

export {fetchHeaderNavigation}