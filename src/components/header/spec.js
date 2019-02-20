import React from 'react';
import Header from './index';
import {shallow} from 'enzyme';
import { findByTestAttribute } from '../../../utils';

const setup = (props={}) => {
    return shallow(<Header {...props}/>)
}


describe('Header Component', () => {
   let component;
   beforeEach(()=> {
       component = setup()
   })
   
   it('Should render with no errors', () => {
     
        const wrapper = findByTestAttribute(component,'headerComponent');
        expect(wrapper.length).toBe(1);
   })
   it('Should render logo with no errors', () => {
     
    const wrapper = findByTestAttribute(component,'logoIMG');
    expect(wrapper.length).toBe(1);
})


})