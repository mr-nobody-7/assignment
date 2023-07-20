import { screen, render, getByRole } from "@testing-library/react";
import Header from "./Header";

describe("header", () => {
  test("rendered correclty", () => {
    render(<Header />);
    const divEl = screen.queryByTestId("division");
    expect(divEl).toBeInTheDocument();
    const btnEle2 = screen.getByTestId("sidebar-toggle");
    expect(btnEle2).toBeInTheDocument();
    const imgEl = screen.getByRole("img");
    expect(imgEl).toBeInTheDocument();
    // const btnEle1 = screen.getByTestId("theme-toggle");
    // expect(btnEle1).toBeInTheDocument();
  });
});
