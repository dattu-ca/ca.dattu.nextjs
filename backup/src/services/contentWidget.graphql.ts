import {gql} from "@apollo/client";
import {iContentWidget} from "~src/models";
import {prepareRichTextWhileMorphing} from "./morphRichText";
import {gqlClient} from "./config";


const morphContentWidget = (base: any): (iContentWidget | null) => {
    if (!base?.data?.contentWidget) {
        return null;
    }
    return base?.data?.contentWidget?.map((item: any) => {
        const contentWidget: iContentWidget = {
            __typename: item.__typename,
            id: item.sys.id,
            title: item.title,
            content: prepareRichTextWhileMorphing(item.content)
        };
        return contentWidget;
    });
};



const getContentWidgetGql = async (id: string): Promise<iContentWidget | null> => {
    const response = await gqlClient.query({
        query: gql`
            query($id: String){
              contentWidget(id: $id) {
                __typename
                sys {
                  id
                }
                title
                content {
                  json
                }
              }
            }            
        `,
        variables: {
            id: id
        }
    });
    return morphContentWidget(response);
};

export {getContentWidgetGql};