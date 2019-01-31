import React from "react";
import renderer from "react-test-renderer";
import GlobalCSS from "./global";

it("should render the global styles and check it against a snapshot", () => {
  const tree = renderer.create(<GlobalCSS />).toJSON();
  expect(tree).toMatchSnapshot();
});
