import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header component", () => {
  test("header render", async () => {
    render(<Header isEditMode={false} onClick={() => {}} />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  test("header render without Edit Mode", async () => {
    render(<Header isEditMode={false} onClick={() => {}} />);
    const title = screen.getByRole("heading");
    const button = screen.getByRole("button");
    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("header-btn");
  });

  test("header render with Edit Mode", async () => {
    render(<Header isEditMode={true} onClick={() => {}} />);
    const title = screen.getByRole("heading");
    const button = screen.getByRole("button");
    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("header-btn active");
  });
});
