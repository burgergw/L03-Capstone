import React from "react";
import Login from "./components/Login";
import renderer from 'react-test-renderer';

test('Login component renders correctly', () => {
    const tree = renderer
    .create(<Login/>).toJSON();
    expect(tree).toMatchSnapshot();
})