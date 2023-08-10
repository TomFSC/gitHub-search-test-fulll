import { render, screen } from "@testing-library/react";
import Actions from "../Actions";

describe("Actions component", () => {
  test("actions render correctly without Edit Mode", async () => {
    render(
      <Actions
        isEditMode={false}
        nbOfSelectedUsers={0}
        handleChange={() => {}}
        onCheckAll={() => {}}
        isAllChecked={false}
        value={""}
        onDuplicate={() => {}}
        onDelete={() => {}}
      />
    );

    const actions = screen.getByTestId("actions-section");
    const editing = screen.queryByTestId("editing");

    expect(actions).toBeInTheDocument();
    expect(editing).toBeFalsy();
  });
  test("actions render correctly with Edit Mode", async () => {
    render(
      <Actions
        isEditMode={true}
        nbOfSelectedUsers={0}
        handleChange={() => {}}
        onCheckAll={() => {}}
        isAllChecked={false}
        value={""}
        onDuplicate={() => {}}
        onDelete={() => {}}
      />
    );

    const actions = screen.getByTestId("actions-section");
    const editing = screen.queryByTestId("editing");

    expect(actions).toBeInTheDocument();
    expect(editing).toBeTruthy();
  });
});
