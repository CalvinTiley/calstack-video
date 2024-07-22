export const logError = (message: string) => {
    throw new Error(`Video Player: ${message}`);
};
