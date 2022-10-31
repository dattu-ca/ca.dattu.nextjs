import {fetchHeaderNavigation} from "../headerNaigation.service";
import {headerNavigationMock} from "~src/services/mock/headerNavigation.mock";

describe('headerNavigation.service', () => {
    test('Should return proper data', async () => {
        const result = await fetchHeaderNavigation();
        expect(result).toEqual(headerNavigationMock.get);
    })
})