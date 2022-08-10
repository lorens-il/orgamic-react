import { IInitialState } from "../../interfaces/interfaces";

export const selectorActiveBtn = (state: {filters: IInitialState}): IInitialState => state.filters;
export const selectorSearchValue = (state: {filters: IInitialState} ): IInitialState => state.filters;