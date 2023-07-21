import { screen, render, logRoles } from "@testing-library/react";
import SideBar from "./SideBar";
import Providers from "./Providers";

describe("sidebar", () => {
  test("rendered correctly", async () => {
    const view = render(
      <Providers>
        <SideBar />
      </Providers>
    );
    logRoles(view.container);
    const imgEl = screen.getByAltText("logo");
    expect(imgEl).toBeInTheDocument();

    const btn1 = screen.getByTestId("sidebar-toggle");
    expect(btn1).toBeInTheDocument();

    const list = screen.getByRole("tablist");
    expect(list).toBeInTheDocument();
  });
});
