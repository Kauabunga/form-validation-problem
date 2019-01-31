import React from "react";
import { render } from "enzyme";

import Index from "./index";

it("should render the index and check it against a snapshot", () => {
  const component = render(<Index />);
  expect(component).toMatchSnapshot();
});
