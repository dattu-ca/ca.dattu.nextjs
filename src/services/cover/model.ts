import {ICoverFields} from "~/@types/generated/contentful";
import {WIDGET_TYPE_NAME} from "~gqlContentful";
import {iJSONDataWidget, morphJSONDataWidget} from "../jsonDataWidget";
import {iNavigationWidget, morphNavigationWidget} from "../navigationWidget";
import {iAssetsGalleryWidget, morphAssetsGalleryWidget} from "../assetsGalleryWidget";


type tContent = {
    JSONDataWidget?: iJSONDataWidget[],
    NavigationWidget?: iNavigationWidget[]
    AssetsGalleryWidget?: iAssetsGalleryWidget[]
}


export type tCover = ICoverFields & {
    id?: string,
    contentBlocks: tContent
}


export const morphCover = (raw: any): (tCover[] | null) => {
    if (!raw?.data?.documentCollection) {
        return null;
    }
    return raw?.data?.documentCollection.items?.map((item: any) => {
        const fields: tCover = {
            id: item.sys.id,
            slug: item.slug,
            content: item.content,
            contentBlocks: {}
        };
        return fields;
    }).map((item: tCover) => {


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
                                case WIDGET_TYPE_NAME.JSON_DATA_WIDGET: {
                                    const jsonData = morphJSONDataWidget(block);
                                    if (jsonData) {
                                        contentBlocks.JSONDataWidget = [
                                            ...(contentBlocks.JSONDataWidget || []),
                                            jsonData
                                        ];
                                    }
                                    break;
                                }
                                case WIDGET_TYPE_NAME.NAVIGATION_WIDGET: {
                                    const navigation = morphNavigationWidget(block);
                                    if (navigation) {
                                        contentBlocks.NavigationWidget = [
                                            ...(contentBlocks.NavigationWidget || []),
                                            navigation
                                        ];
                                    }
                                    break;
                                }
                                case WIDGET_TYPE_NAME.ASSETS_COLLECTION: {
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