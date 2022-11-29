import type {NextApiRequest, NextApiResponse} from "next";
import {google, youtube_v3} from "googleapis";
import {GaxiosResponse} from "gaxios";
import {AllowCORS} from "~src/utils/cors";
import {YoutubeClient} from "~src/utils/youtube";


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<youtube_v3.Schema$VideoListResponse>
) => {
    await AllowCORS(req, res);

    const qa = req.query;

    const params: youtube_v3.Params$Resource$Videos$List = {
        part: ["snippet", "recordingDetails"],
        id: [qa.id as string]
    };
    const response = await YoutubeClient.videos.list(params);
    res.status(200).json(response?.data);
};


export default handler;