import { render, screen } from '@testing-library/react';
import SocialNetworkApp from "./App";
import React from "react";
import ReactDOM from "react-dom";

test('renders without crashing', () => {
  render(<SocialNetworkApp/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SocialNetworkApp/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
