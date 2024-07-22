import { logError } from ".";

describe("logger utilities", () => {
    describe("logError", () => {
        test("should throw an error with the correct message", () => {
            const errorMessage = "Test error message";

            expect(() => logError(errorMessage)).toThrowError(
                new Error(`Video Player: ${errorMessage}`),
            );
        });

        test("should throw an error with the correct message when message is empty", () => {
            const errorMessage = "";

            expect(() => logError(errorMessage)).toThrowError(
                new Error(`Video Player: ${errorMessage}`),
            );
        });

        test("should throw an error with the correct message when message contains special characters", () => {
            const errorMessage = "Error: Something went wrong!";

            expect(() => logError(errorMessage)).toThrowError(
                new Error(`Video Player: ${errorMessage}`),
            );
        });
    });
});
