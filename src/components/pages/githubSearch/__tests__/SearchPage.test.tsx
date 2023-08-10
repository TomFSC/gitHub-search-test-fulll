import { fireEvent, render, screen } from "@testing-library/react";
import SearchPage from "../SearchPage";
import Checkbox from "../../../reusable-ui/Checkbox";

describe("SearchPage component", () => {
  test("Render SearchPage correctly", () => {
    render(<SearchPage />);
    const mainContainer = screen.getByTestId("main-container");
    expect(mainContainer).toBeTruthy();
  });
  test("Render without Edit Mode & without datas", () => {
    render(<SearchPage />);
    const editing = screen.queryByTestId("editing");
    const errorMsg = screen.queryByTestId("error-msg");
    const result = screen.queryByTestId("result");
    const card = screen.queryByTestId("card");
    expect(editing).toBeFalsy();
    expect(errorMsg).toBeFalsy();
    expect(result).toBeInTheDocument();
    expect(card).toBeFalsy();
  });
  test("Render with Edit Mode & without datas", async () => {
    render(<SearchPage />);
    const errorMsg = screen.queryByTestId("error-msg");
    const result = screen.queryByTestId("result");
    const card = screen.queryByTestId("card");
    const headerBtn = screen.getByRole("button");

    expect(errorMsg).toBeFalsy();
    expect(result).toBeInTheDocument();
    expect(card).toBeFalsy();

    fireEvent.click(headerBtn);

    const editing = screen.queryByTestId("editing");
    const checkboxes = screen.getAllByRole("checkbox");
    const icons = screen.getByTestId("icons");
    expect(editing).toBeInTheDocument();
    expect(icons).toBeInTheDocument();
    checkboxes.forEach((checkbox) => expect(checkbox).toBeInTheDocument());
  });
  test("onCheckAll boxes", async () => {
    render(<SearchPage />);
    const headerBtn = screen.getByRole("button");
    fireEvent.click(headerBtn);
    const checkAll = screen.getByTestId("check-all");
    await fireEvent.change(checkAll);
    const checkboxes = screen.getAllByRole("checkbox");
    setTimeout(() => {
      checkboxes.forEach((checkbox) =>
        expect((checkbox as HTMLInputElement).checked).toBeTruthy()
      );
    });
  });
});
