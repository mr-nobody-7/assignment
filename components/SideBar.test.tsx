import { screen, render } from "@testing-library/react";
import SideBar from "./SideBar";
import Providers from "./Providers";

describe("sidebar", () => {
  test("rendered correctly", async () => {
    render(
      <Providers>
        <SideBar />
      </Providers>
    );
    const imgEl = screen.getByRole("img");
    expect(imgEl).toBeInTheDocument();
  });
});
