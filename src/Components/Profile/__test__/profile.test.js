import React from 'react';
import ReactDom from 'react-dom';
import Profile from '../Profile'
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({ adapter: new Adapter() });

it('renders Profile without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(
    <BrowserRouter>
     <Profile></Profile>
    </BrowserRouter>, 
  div);

  ReactDom.unmountComponentAtNode(div);
});

    it('has an h2 tag', () => {
      const component = shallow(<Profile/>);    
      var node = component.find('h2');
      expect(node.length).toEqual(3);
      
  });