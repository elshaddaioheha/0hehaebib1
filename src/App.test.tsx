import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders primary sections", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /about/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /skills/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /expertise/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /experience/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /works/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /hire me/i, level: 2 })).toBeInTheDocument();
  });
});
