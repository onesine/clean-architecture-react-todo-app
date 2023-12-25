import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import App from "../App.tsx";

describe("App", () => {
    it("Should render correctly", () => {
        render(<App />);

        const element = screen.getByText("Vite + React");

        expect(element).toBeInTheDocument();
    });
});
