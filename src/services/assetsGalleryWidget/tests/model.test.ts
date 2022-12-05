import {morphAssetsGalleryWidget} from "../model";


describe("morphAssetsGalleryWidget", () => {
    it("Should morph assets gallery widget", () => {
        const raw = {
            slug: "test slug",
            content: {
                links: {
                    entries: {
                        block: []
                    }
                }
            }
        };
        expect(morphAssetsGalleryWidget(raw)).toStrictEqual({slug: "test slug", assets: []});
    });
});