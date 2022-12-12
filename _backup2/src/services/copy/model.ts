import {ICopyFields} from "~/@types/generated/contentful";
import {CONTENT_MODEL_TYPE_NAME} from "~gqlContentful";
import {iJSONDataWidget, morphJSONDataWidget} from "../jsonDataWidget";
import {iNavigationWidget, morphNavigationWidget} from "../navigationWidget";
import {iAssetsGalleryWidget, morphAssetsGalleryWidget} from "../assetsGalleryWidget";


type tContent = {
    JSONDataWidget?: iJSONDataWidget[],
    NavigationWidget?: iNavigationWidget[]
    AssetsGalleryWidget?: iAssetsGalleryWidget[]
}


export type tCopy = ICopyFields & {
    id?: string,
    contentBlocks: tContent
}


export const morphCopy = (raw: any): (tCopy[] | null) => {
    if (!raw?.data?.copyCollection) {
        return null;
    }
    return raw?.data?.copyCollection.items?.map((item: any) => {
        const fields: tCopy = {
            id: item.sys.id,
            slug: item.slug,
            content: item.content,
            contentBlocks: {}
        };
        return fields;
    }).map((item: tCopy) => {
        if (item.content) {
            const content = item.content as any;
            const contentBlocks: tContent = {};
            if (content.links) {
                const links = content.links;
                if (links.entries.block) {
                    const blocks = links.entries.block;
                    if (Array.isArray(blocks)) {
                        blocks.forEach(block => {
                            switch (block.typename) {
                                case CONTENT_MODEL_TYPE_NAME.JSON_DATA_WIDGET: {
                                    const jsonData = morphJSONDataWidget(block);
                                    if (jsonData) {
                                        contentBlocks.JSONDataWidget = [
                                            ...(contentBlocks.JSONDataWidget || []),
                                            jsonData
                                        ];
                                    }
                                    break;
                                }
                                case CONTENT_MODEL_TYPE_NAME.NAVIGATION_WIDGET: {
                                    const navigation = morphNavigationWidget(block);
                                    if (navigation) {
                                        contentBlocks.NavigationWidget = [
                                            ...(contentBlocks.NavigationWidget || []),
                                            navigation
                                        ];
                                    }
                                    break;
                                }
                                case CONTENT_MODEL_TYPE_NAME.ASSETS_COLLECTION: {
                                    const assetsGalleryCollection = morphAssetsGalleryWidget(block);
                                    if (assetsGalleryCollection) {
                                        contentBlocks.AssetsGalleryWidget = [
                                            ...(contentBlocks.AssetsGalleryWidget || []),
                                            assetsGalleryCollection
                                        ];
                                    }
                                    break;
                                }
                                default: {

                                }
                            }
                        });
                    }
                }

            }
            item.contentBlocks = contentBlocks;
        }

        return {
            ...item
        };
    });
};