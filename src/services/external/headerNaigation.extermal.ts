// import {axiosContentful} from './axios.config';

import {iHeaderNavigation} from "~src/models";

const fetchHeaderNavigation = () => {
    return new Promise<iHeaderNavigation>((resolve) => {
        resolve({
            links: [
                {
                    href: '/',
                    label: 'Home',
                    visible: true
                },
                {
                    href: '/about',
                    label: 'About',
                    visible: true
                }
            ]
        })
    })
}

export {fetchHeaderNavigation}