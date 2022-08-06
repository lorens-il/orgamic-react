import {selectorActiveBtn} from '../src/components/featuredProducts/FeaturedProducts';

describe('redux selector active btn', () => {
    it('change active btn in state', () => {

        const activeBtn = {
            filters: { 
                activeBtn: 'Berry',
                searchValue: ''
            }
        };
        const result = selectorActiveBtn(activeBtn);

        expect(result).toEqual(activeBtn);
    });
});