import {fetchSiteConfig} from "../siteConfig.service";
import {siteConfigMock} from "~src/services/mock/siteConfig.mock";

describe('siteConfig.service', () => {
    test('Should return proper data', async () => {
        const result = await fetchSiteConfig();
        expect(result).toEqual(siteConfigMock.get);
    })
})