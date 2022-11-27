import {iContentWidget} from "~src/models";
import {prepareRichTextWhileMorphing} from "~src/utils/prepareRichTextWhileMorphing";
import {gqlClient} from "./config";
import {gql} from "@apollo/client";


const morphContentWidget = (base: any): iContentWidget => {
    return base?.data?.contentWidget?.map((item: any) => {
        const contentWidget: iContentWidget = {
            id: item.sys.id,
            title: item.title,
            content: prepareRichTextWhileMorphing(item.content)
        };
        return contentWidget;
    });
};

const getContentWidgetGql = async (id: string): Promise<iContentWidget | null> => {
    console.log("IN getContentWidgetGql", id)
    const response = await gqlClient.query({
        query: gql`
            query($id: String){
              contentWidget(id: $id) {
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
    console.log("RESPONSE", response);
    return morphContentWidget(response);
};

export {getContentWidgetGql};