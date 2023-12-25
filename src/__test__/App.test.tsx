import { describe, it, expect } from "vitest";

describe("Home", () => {
    const message = "Hello world";

    it("Should render correctly", () => {
        expect(message).toBe(message);
    });
});
