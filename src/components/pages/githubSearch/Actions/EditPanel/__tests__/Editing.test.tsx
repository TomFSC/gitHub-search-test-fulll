import { render, screen } from "@testing-library/react";
import Editing from "../EditPanel";

describe("Editing component", () => {
  test("Render Editing", () => {
    render(
      <Editing
        nbOfSelectedUsers={0}
        onChange={jest.fn()}
        onDelete={jest.fn()}
        onDuplicate={jest.fn()}
        isAllChecked={false}
      />
    );
    const editing = screen.getByTestId("editing");
    expect(editing).toBeInTheDocument();
  });
  test("Render Editing with no selected user", () => {
    render(
      <Editing
        nbOfSelectedUsers={0}
        onChange={jest.fn()}
        onDelete={jest.fn()}
        onDuplicate={jest.fn()}
        isAllChecked={false}
      />
    );
    const count = screen.getByTestId("count");
    expect(count.innerHTML).toBe("0 element selected");
  });
  test("Render Editing with 2 selected user", () => {
    render(
      <Editing
        nbOfSelectedUsers={2}
        onChange={jest.fn()}
        onDelete={jest.fn()}
        onDuplicate={jest.fn()}
        isAllChecked={false}
      />
    );
    const count = screen.getByTestId("count");
    expect(count.innerHTML).toBe("2 elements selected");
  });
});
