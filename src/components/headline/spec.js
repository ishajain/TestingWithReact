import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';
import {findByTestAttribute} from '../../../utils'

const setUp = (props={}) => {
   return shallow(<Headline {...props}/>)
}

describe("Headline Component", () => {
   let component;
   describe("Have Props", () => {
        beforeEach(()=> {
            const props = {
                header: "Test header",
                description: "Test description"
            }
            component = setUp(props);
        })

        it("Should render with no errors", () => {
            const headerComponent = findByTestAttribute(component,"headerComponent")
            expect(headerComponent.length).toBe(1)
        })

        it("Should render with h1", () => {
            const header = findByTestAttribute(component,"header");
            expect(header.length).toBe(1);
        })
        it("Should render with description", () => {
           
            const desc = findByTestAttribute(component,"description")
            //console.log(desc)
            expect(desc.length).toBe(1)
        })
   })

   describe("Have no props", () => {
        beforeEach(() => {
            component = setUp()
        })

   })

})