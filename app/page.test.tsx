import { screen, render } from "@testing-library/react";
import Home from "./page";
import Providers from "@/components/Providers";

describe("home", () => {
  test("rendered correctly", () => {
    screen.debug();
    render(
      <Providers>
        <Home />
      </Providers>
    );

    // const headerEle = screen.findByTestId("homeheader");
    // expect(headerEle).toBeInTheDocument();
  });
});
