import {BLOCKS, Document} from "@contentful/rich-text-types";
import _ from 'lodash';

export const prepareRichText = (raw: any): (Document | null) => {
    if (raw && raw.json) {
        const converted = _.cloneDeep(raw.json) as Document;
        const last = converted.content.at(-1);
        // @ts-ignore
        if (last && last.content.length === 1 && last.nodeType === BLOCKS.PARAGRAPH && last.content[0].nodeType && last.content[0]['value'] === '') {
            converted.content.pop();
        }
        return converted;
    }
    return null;
};