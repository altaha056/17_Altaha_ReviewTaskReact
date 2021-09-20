import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./pages/Home";
import News from "./pages/News";
import NewsSearch from "./components/NewsSearch";

describe("tesss", () => {
  test("testing home", () => {
    render(<Home />);
    expect(screen.getByText(/Anne Sullivan/i)).toBeInTheDocument();
  });

  test("test news search", () => {
    render(<NewsSearch />);

    fireEvent.input(screen.getByRole("textbox", { name: /search/i }), {
      target: { value: "Sepak Bola" },
    });
    expect(screen.getByLabelText(/Search/)).toHaveValue("Sepak Bola");
  });

  test("test news search 2", () => {
    render(<NewsSearch />);

    fireEvent.input(screen.getByRole("textbox", { name: /search/i }), {
      target: { value: "tess" },
    });
    expect(screen.getByLabelText(/Search/)).toHaveValue("tess");
  });

  test("test news search 3", () => {
    render(<NewsSearch />);

    fireEvent.input(screen.getByRole("textbox", { name: /search/i }), {
      target: { value: "asd" },
    });
    expect(screen.getByLabelText(/Search/)).toHaveValue("asd");
  });

  test("test news search 4", () => {
    render(<NewsSearch />);

    fireEvent.input(screen.getByRole("textbox", { name: /search/i }), {
      target: { value: "qwe" },
    });
    expect(screen.getByLabelText(/Search/)).toHaveValue("qwe");
  });
});
