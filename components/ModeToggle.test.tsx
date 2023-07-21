import { screen, render, logRoles } from "@testing-library/react";
import { ModeToggle } from "./ModeToggle";

describe("mode-toggle", () => {
  test("rendered correctly", () => {
    const view = render(<ModeToggle />);
    logRoles(view.container);
  });
});
