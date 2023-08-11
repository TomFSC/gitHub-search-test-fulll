import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { SearchContextProvider } from "../context/SearchContext";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <SearchContextProvider>{children}</SearchContextProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
