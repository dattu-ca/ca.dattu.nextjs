import {COPY_QUERY} from "~gqlContentful";
import {Copy, morphCopy} from "./model";

const fetchDataGql = async (slug: string): Promise<Copy[] | null> => {
    const response = await COPY_QUERY({
        where: {
            slug: slug
        }
    });
    return morphCopy(response);
};

export {fetchDataGql};