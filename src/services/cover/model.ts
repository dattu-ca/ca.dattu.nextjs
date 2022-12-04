import {ICoverFields} from "~/@types/generated/contentful";
import {WIDGET_TYPE_NAME} from "~gqlContentful";
import {iJSONDataWidget, morphJSONDataWidget} from "../jsonDataWidget";
import {iNavigationWidget, morphNavigationWidget} from "../navigationWidget";


type tContent = {
    JSONDataWidget?: iJSONDataWidget[],
    NavigationWidget?: iNavigationWidget[]
}


export type tCover = ICoverFields & {
    id?: string,
    contentBlocks: tContent
}


export const morphCover = (raw: any): (tCover[] | null) => {
    if (!raw?.data?.coverCollection) {
        return null;
    }
    return raw?.data?.coverCollection.items?.map((item: any) => {
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