import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { render } from "@testing-library/react";

import GetAllChamp from "./GetAllChamp";

describe("Static Query Get all champions", () => {
  test("test exemple", () => {
    expect(1).toBe(1);
  });

  it("should render correctly", () => {
    render(<GetAllChamp />);
    const text = screen.findByText("bonjour ceci est un test");
    expect(text).toBeTruthy();
  });
});
