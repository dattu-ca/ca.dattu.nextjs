import {COVER_QUERY} from "~gqlContentful";
import {tCover, morphCover} from "./model";

const fetchDataGql = async (slug: string): Promise<tCover[] | null> => {
    const response = await COVER_QUERY({
        where: {
            slug: slug
        }
    });
    return morphCover(response);
};

export {fetchDataGql};