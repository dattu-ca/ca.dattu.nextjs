import {morphAssetWidget} from "../model";


describe("morphAssetWidget", () => {
    it("Should morph asset widget", () => {
        const raw = {
            slug: "morphAssetWidget_slug",
            name: "morphAssetWidget name",
            description: "morphAssetWidget description",
            asset: {
                url: "https://www.google.ca",
                fileName: 'morphAssetWidget asset fileName',
                description: "morphAssetWidget asset description",
            }
        }
        expect(morphAssetWidget(raw)).toStrictEqual(raw);
    });
});