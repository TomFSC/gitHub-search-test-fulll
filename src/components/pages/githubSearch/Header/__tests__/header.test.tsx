import { render, screen } from "@testing-library/react";
import Header from "../Header";
import HeaderBtn from "../HeaderBtn";

test("header render", async () => {
  render(<Header isEditMode={false} setIsEditMode={() => {}} />);
  const title = screen.getByRole("heading");
  const button = screen.getByRole("button");
  expect(title).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("header button on normal mode", async () => {
  render(
    <HeaderBtn
      className={"header-btn"}
      label={"Edit Mode"}
      onClick={() => {}}
    />
  );
  const button = screen.getByRole("button");
  expect(button).toHaveClass("header-btn");
  expect(button).toHaveTextContent("Edit Mode");
});

test("header button on Edit Mode", async () => {
  render(
    <HeaderBtn
      className={"header-btn active"}
      label={"Edit Mode"}
      onClick={() => {}}
    />
  );
  const button = screen.getByRole("button");
  expect(button).toHaveClass("header-btn active");
  expect(button).toHaveTextContent("Edit Mode");
});
