import { screen, render } from "@testing-library/react";
import HomeHeader from "./HomeHeader";
import Providers from "./Providers";
describe("home header", () => {
  test("rendered correctly", async () => {
    render(
      <Providers>
        <HomeHeader />
      </Providers>
    );
    const para = screen.getByText("Employess");
    expect(para).toBeInTheDocument();

    const sl = screen.getByRole("combobox");
    expect(sl).toBeInTheDocument();
  });

  // test("options correctly", async () => {
  //   render(
  //     <Providers>
  //       <HomeHeader />
  //     </Providers>
  //   );
  //   const txt = await screen.findByText("active", {
  //     timeout: 2000,
  //   });
  //   expect(txt).toBeInTheDocument();
  // });
});
