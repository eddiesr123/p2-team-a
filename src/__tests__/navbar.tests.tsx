import React from 'react';
import {shallow, mount, render} from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme'; 
import Navbar from '../components/Navbar';
configure({ adapter: new Adapter() });

describe ('Navbar', () => {
    it('should have a logout button with ID of logout', () => {
       let wrapper = mount(<Navbar/>);
        expect(wrapper.find('button#logout').props().value).toBe('Logout');
        wrapper.unmount();
    })
    it('should have a username box with ID of username', () => {
        const wrapper = mount(<Navbar/>);
        expect(wrapper.find('input#inputUsername').props().id).toBe('inputUsername');
        wrapper.unmount();
    })
    it('should have a password box of type password', () => {
        const wrapper = mount(<Navbar/>);
        expect(wrapper.find('#inputPassword').props().type).toBe('password');
        wrapper.unmount();
    })
    it ('should have a login/submit button', () => {
        const wrapper = mount(<Navbar/>);
        expect(wrapper.find('button#login-from-nav').props().value).toBe('Login');
        wrapper.unmount();
    })
    it('should have a shopping cart icon', () => {
        const wrapper = mount(<Navbar/>);
        expect(wrapper.find('img').props().id).toBe('cart');
        wrapper.unmount();
    })
    it('should have the title "Costumes of Doom"', () => {
        const wrapper = mount(<Navbar/>);
        expect(wrapper.find('#mainTitle').props().id).toBe('mainTitle');
        wrapper.unmount();
    })
})

