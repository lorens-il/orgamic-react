import {selectorActiveBtn, selectorSearchValue} from "../src/components/featuredProducts/selector";

const activeBtn = {
    filters: { 
        activeBtn: 'Berry',
        searchValue: 'garlic'
    }
};

describe('redux selector active btn', () => {
    it('select active btn in state', () => {
        const result = selectorActiveBtn(activeBtn);

        expect(result).toEqual({ 
            activeBtn: 'Berry',
            searchValue: 'garlic'
        });
    });
    it('select search value', () => {
        const result = selectorSearchValue(activeBtn);

        expect(result).toEqual({ 
            activeBtn: 'Berry',
            searchValue: 'garlic'
        });
    });
});