/**
 * @jest-environment jsdom
 */

 import { render} from "@testing-library/react";

 import Discounts from "../src/components/discounts/Discounts";
 
 import * as RTKQhooks from "../src/api/apiSlice";
 jest.mock("../src/api/apiSlice");
 
 const mockedUseGetDiscountsQuery = jest.spyOn(RTKQhooks, "useGetDiscountsQuery");
 
 describe('Discounts', () => {
 
 it('should create empty Discounts', () => {
 
     mockedUseGetDiscountsQuery.mockReturnValue({data: []});
 
     const component = render(<Discounts/>);
     expect(component).toMatchSnapshot();
 });
 
 it('should create Discounts with list discounts', () => {
 
     mockedUseGetDiscountsQuery.mockReturnValue({data: [{
         "id": "95a3839-cf41-46dc-84bf-63369d3bdf6a",
         "setStyle": 1, 
         "title": "Get 10% off on Vegetables",
         "desc": "Shop our selection of organic fresh vegetables in a discounted price. 10% off on all vegetables.",
         "url": "https://i.ibb.co/SyQPJSB/broccoli.png",
         "alt": "vegetables"
     }]});
 
     const component = render(<Discounts/>);
     expect(component).toMatchSnapshot();
 });
 
 });
 