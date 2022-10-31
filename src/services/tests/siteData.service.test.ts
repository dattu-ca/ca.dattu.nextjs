import {fetchSiteData} from "../siteData.service";
import {siteConfigMock} from "~src/services/mock/siteConfig.mock";
import {headerNavigationMock} from "~src/services/mock/headerNavigation.mock";


describe("siteConfig.service", () => {
    test("Should return proper data", async () => {
        const result = await fetchSiteData();
        expect(result).toEqual([siteConfigMock.get, headerNavigationMock.get]);
    });
});