// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {iSiteConfig} from "~models/siteConfig.model";
import {fetchSiteConfigFromExternal} from "~services/siteConfig.api";


interface iResponse extends iSiteConfig {
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<iResponse>
) => {
    const result = await fetchSiteConfigFromExternal()
    res.status(200).json(result);
}


export default handler;