import { fireEvent, render, screen } from "@testing-library/react";
import HeaderBtn from "../../../../reusable-ui/Button";

describe("HeaderBtn component", () => {
  test("header button on normal mode", async () => {
    const onClick = jest.fn();
    render(
      <HeaderBtn
        className={"header-btn"}
        label={"Edit Mode"}
        onClick={onClick}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("header-btn");
    expect(button).toHaveTextContent("Edit Mode");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
    setTimeout(() => {
      expect(button).toHaveClass("header-btn active");
    }, 500);
  });

  test("header button on Edit Mode", async () => {
    const onClick = jest.fn();
    render(
      <HeaderBtn
        className={"header-btn active"}
        label={"Edit Mode"}
        onClick={onClick}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("header-btn active");
    expect(button).toHaveTextContent("Edit Mode");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(button).toHaveClass("header-btn");
  });
});
