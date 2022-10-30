// import {axiosContentful} from './axios.config';

import {iSiteConfig} from "~src/models";

const fetchSiteConfig = () => {
    return new Promise<iSiteConfig>((resolve) => {
        resolve({
            title: 'dattu.ca | Portfolio | Personal Blog',
            description: 'This site is a portfolio as an actor, developer and a human; as well as a personal blog.',
            keywords: 'Actor, Developer, Human, Spiritual, Portfolio, Blog',
            author: 'Dattu Patel'
        })
    })
}

export {fetchSiteConfig}