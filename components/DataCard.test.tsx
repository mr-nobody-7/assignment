import { screen, render, logRoles } from "@testing-library/react";
import DataCard from "./DataCard";

describe("DataCard", () => {
  test("rendered correctly", () => {
    const data = {
      id: "cfhjk",
      title: "vivek",
      description: "developer",
      date: "today",
    };
    const view = render(<DataCard data={data} />);
    logRoles(view.container);
    const headingEl = screen.getByRole("heading", { level: 3 });
    expect(headingEl).toBeInTheDocument();

    const para = screen.getByText("developer");
    expect(para).toBeInTheDocument();

    const date = screen.getByText("today");
    expect(date).toBeInTheDocument();
  });
});
