import _ from "lodash";
import {BLOCKS, Document, Text} from "@contentful/rich-text-types";


export const prepareRichTextWhileMorphing = (raw: any): (Document | null) => {
    if (raw && raw.json) {
        const converted = _.cloneDeep(raw.json) as Document;
        const last = converted.content.at(-1);
        if (last
            && last.nodeType === BLOCKS.PARAGRAPH
            && last.content.length === 1
            && last.content[0].nodeType
            && (last.content[0] as Text).value === "") {
            converted.content.pop();
        }
        return converted;
    }
    return null;
};