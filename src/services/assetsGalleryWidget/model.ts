import * as _ from 'lodash';
import {iAssetWidget, morphAssetWidget} from "../assetWidget";


export interface iAssetsGalleryWidget {
    slug: string,
    assets: iAssetWidget[]
}

export const morphAssetsGalleryWidget = (raw: any): iAssetsGalleryWidget | undefined => {
    if (raw) {
        return {
            slug: raw.slug,
            assets: _.get(raw, "content.links.entries.block", []).map((block:any) => morphAssetWidget(block))
        };
    }
    return undefined;
};
