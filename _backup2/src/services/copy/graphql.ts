import {COPY_QUERY} from "~gqlContentful";
import {tCopy, morphCopy} from "./model";

const fetchDataGql = async (slug: string): Promise<tCopy[] | null> => {
    const response = await COPY_QUERY({
        where: {
            slug: slug
        }
    });
    return morphCopy(response);
};

export {fetchDataGql};