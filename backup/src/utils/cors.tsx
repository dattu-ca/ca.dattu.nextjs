import NextCors from "nextjs-cors";
import {NextApiRequest, NextApiResponse} from "next";


export const AllowCORS = async (req: NextApiRequest, res: NextApiResponse) => {
    const origin = (process.env.ALLOW_CORS as string).split(";");
    await NextCors(req, res, {
        methods: ["GET"],
        origin: origin,
        optionsSuccessStatus: 200
    });
};