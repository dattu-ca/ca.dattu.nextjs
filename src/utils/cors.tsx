import NextCors from "nextjs-cors";
import {NextApiRequest, NextApiResponse} from "next";

export const AllowCORS = async (req: NextApiRequest, res: NextApiResponse) => {
    await NextCors(req, res, {
        methods: ["GET"],
        origin: ["http://localhost:3006", "https://dattuca-contentful.netlify.app/"],
        optionsSuccessStatus: 200
    });
};