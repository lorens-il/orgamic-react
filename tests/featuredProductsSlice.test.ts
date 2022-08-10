import reducer, {changingActiveBtn, changingSearchValue}  from  "../src/components/featuredProducts/featuredProductsSlice";

const initialState = {
    activeBtn: "All",
    searchValue: ''
};

describe('sliceFPs', () => { 
    it('shoud return reducer default state', () => {
        const result = reducer(initialState, {type: ''});

        expect(result).toEqual({
            activeBtn: "All",
            searchValue: ''
        });
    });

    it('shoud return value changes activeBtn with help "changingActiveBtn"', () => {
        const action = {type: changingActiveBtn.type, payload: "Berry"};
        const result = reducer(initialState, action);

        expect(result.activeBtn).toBe('Berry');
    });
    it('shoud return value changes activeBtn with help "changingSearchValue"', () => {
        const action = {type: changingSearchValue.type, payload: "123e"};
        const result = reducer(initialState, action);
        
        expect(result.searchValue).toBe('123e');
    });
 });