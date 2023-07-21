import { screen, render, logRoles } from "@testing-library/react";
import { ModeToggle } from "./ModeToggle";

describe("mode-toggle", () => {
  test("rendered correctly", () => {
    const view = render(<ModeToggle />);
    screen.debug();
    const toggleElement = screen.getByRole("button", { name: "Toggle theme" });
    expect(toggleElement).toBeInTheDocument();
    const themeOption = screen.findByTestId("dark option");
    expect(themeOption).toBeInTheDocument();
  });
});
