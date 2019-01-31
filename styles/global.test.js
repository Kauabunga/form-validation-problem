import React from "react";
import { render } from "enzyme";

import GlobalCSS from "./global";

it("should render the global styles and check it against a snapshot", () => {
  const component = render(<GlobalCSS />);
  expect(component).toMatchSnapshot();
});
