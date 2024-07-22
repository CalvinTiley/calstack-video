import {
    enterFullscreen,
    exitFullscreen,
    isFullscreen,
    toggleFullscreen,
} from ".";
import { ACTIVE_CONTROL_CLASS } from "@constants/controls";

import { Player } from "@/Player";

describe("events utilities", () => {
    afterEach(() => {
        vi.restoreAllMocks();
        vi.resetAllMocks();
    });

    describe("isFullscreen", () => {
        describe("returns true", () => {
            it("when fullscreenElement is truthy", () => {
                vi.stubGlobal("document", {
                    fullscreenElement: true,
                });

                const result = isFullscreen();

                expect(result).toBeTruthy();
            });

            it("when fullscreenElement is falsy and webkitFullscreenElement is truthy", () => {
                vi.stubGlobal("document", {
                    fullscreenElement: false,
                    webkitFullscreenElement: true,
                });

                const result = isFullscreen();

                expect(result).toBeTruthy();
            });

            it("when fullscreenElement is falsy, webkitFullscreenElement is falsy and mozFullScreenElement is truthy", () => {
                vi.stubGlobal("document", {
                    fullscreenElement: false,
                    webkitFullscreenElement: false,
                    mozFullScreenElement: true,
                });

                const result = isFullscreen();

                expect(result).toBeTruthy();
            });
        });

        it("returns false when fullscreenElement is falsy, webkitFullscreenElement is falsy and mozFullScreenElement is falsy", () => {
            vi.stubGlobal("document", {
                fullscreenElement: false,
                webkitFullscreenElement: false,
                mozFullScreenElement: false,
            });

            const result = isFullscreen();

            expect(result).toBeFalsy();
        });
    });

    describe("enterFullscreen", () => {
        it("calls standard fullscreen API if requestFullscreen method exists on wrapper", () => {
            const mockFullscreenFn = vi.fn();
            const mockFullscreenClassListRemoveFn = vi.fn();
            const mockFullscreenSetAttributeFn = vi.fn();
            const mockWrapperSetAttributeFn = vi.fn();

            enterFullscreen({
                elements: {
                    fullscreenButton: {
                        classList: {
                            remove: mockFullscreenClassListRemoveFn,
                        },
                        setAttribute: mockFullscreenSetAttributeFn,
                    } as unknown as HTMLButtonElement,
                    video: {} as HTMLVideoElement,
                    wrapper: {
                        requestFullscreen: mockFullscreenFn,
                        setAttribute: mockWrapperSetAttributeFn,
                    } as unknown as HTMLDivElement,
                },
                options: {},
            } as unknown as Player);

            expect(mockFullscreenFn).toHaveBeenCalledOnce();
            expect(mockWrapperSetAttributeFn).toHaveBeenCalledWith(
                "data-fullscreen",
                "true",
            );
            expect(mockFullscreenClassListRemoveFn).toHaveBeenCalledWith(
                ACTIVE_CONTROL_CLASS,
            );
            expect(mockFullscreenSetAttributeFn).toHaveBeenCalledWith(
                "data-active",
                "false",
            );
        });

        it("calls Webkit fullscreen API if webkitRequestFullscreen method exists on wrapper", () => {
            const mockFullscreenFn = vi.fn();
            const mockFullscreenClassListRemoveFn = vi.fn();
            const mockFullscreenSetAttributeFn = vi.fn();
            const mockWrapperSetAttributeFn = vi.fn();

            enterFullscreen({
                elements: {
                    fullscreenButton: {
                        classList: {
                            remove: mockFullscreenClassListRemoveFn,
                        },
                        setAttribute: mockFullscreenSetAttributeFn,
                    } as unknown as HTMLButtonElement,
                    video: {} as HTMLVideoElement,
                    wrapper: {
                        webkitRequestFullscreen: mockFullscreenFn,
                        setAttribute: mockWrapperSetAttributeFn,
                    } as unknown as HTMLDivElement,
                },
                options: {},
            } as unknown as Player);

            expect(mockFullscreenFn).toHaveBeenCalledOnce();
            expect(mockWrapperSetAttributeFn).toHaveBeenCalledWith(
                "data-fullscreen",
                "true",
            );
            expect(mockFullscreenClassListRemoveFn).toHaveBeenCalledWith(
                ACTIVE_CONTROL_CLASS,
            );
            expect(mockFullscreenSetAttributeFn).toHaveBeenCalledWith(
                "data-active",
                "false",
            );
        });

        it("calls Firefox fullscreen API if mozRequestFullScreen method exists on wrapper", () => {
            const mockFullscreenFn = vi.fn();
            const mockFullscreenClassListRemoveFn = vi.fn();
            const mockFullscreenSetAttributeFn = vi.fn();
            const mockWrapperSetAttributeFn = vi.fn();

            enterFullscreen({
                elements: {
                    fullscreenButton: {
                        classList: {
                            remove: mockFullscreenClassListRemoveFn,
                        },
                        setAttribute: mockFullscreenSetAttributeFn,
                    } as unknown as HTMLButtonElement,
                    video: {} as HTMLVideoElement,
                    wrapper: {
                        mozRequestFullScreen: mockFullscreenFn,
                        setAttribute: mockWrapperSetAttributeFn,
                    } as unknown as HTMLDivElement,
                },
                options: {},
            } as unknown as Player);

            expect(mockFullscreenFn).toHaveBeenCalledOnce();
            expect(mockWrapperSetAttributeFn).toHaveBeenCalledWith(
                "data-fullscreen",
                "true",
            );
            expect(mockFullscreenClassListRemoveFn).toHaveBeenCalledWith(
                ACTIVE_CONTROL_CLASS,
            );
            expect(mockFullscreenSetAttributeFn).toHaveBeenCalledWith(
                "data-active",
                "false",
            );
        });

        it("does not call fullscreen API if not supported", () => {
            const consoleSpy = vi.spyOn(console, "error");
            const mockFullscreenClassListRemoveFn = vi.fn();
            const mockFullscreenSetAttributeFn = vi.fn();
            const mockWrapperSetAttributeFn = vi.fn();

            enterFullscreen({
                elements: {
                    fullscreenButton: {
                        classList: {
                            remove: mockFullscreenClassListRemoveFn,
                        },
                        setAttribute: mockFullscreenSetAttributeFn,
                    } as unknown as HTMLButtonElement,
                    video: {} as HTMLVideoElement,
                    wrapper: {
                        setAttribute: mockWrapperSetAttributeFn,
                    } as unknown as HTMLDivElement,
                },
                options: {},
            } as unknown as Player);

            expect(consoleSpy).toHaveBeenCalledWith(
                "Fullscreen API is not supported",
            );
            expect(mockWrapperSetAttributeFn).not.toHaveBeenCalled();
            expect(mockFullscreenClassListRemoveFn).not.toHaveBeenCalled();
            expect(mockFullscreenSetAttributeFn).not.toHaveBeenCalled();
        });
    });

    describe("exitFullscreen", () => {
        it("calls standard fullscreen API if exitFullscreen method exists on wrapper", () => {
            const mockFullscreenFn = vi.fn();

            vi.stubGlobal("document", {
                exitFullscreen: mockFullscreenFn,
                webkitExitFullscreen: false,
                mozCancelFullScreen: false,
            });

            const mockFullscreenClassListAddFn = vi.fn();
            const mockFullscreenSetAttributeFn = vi.fn();
            const mockWrapperSetAttributeFn = vi.fn();

            exitFullscreen({
                elements: {
                    fullscreenButton: {
                        classList: {
                            add: mockFullscreenClassListAddFn,
                        },
                        setAttribute: mockFullscreenSetAttributeFn,
                    } as unknown as HTMLButtonElement,
                    video: {} as HTMLVideoElement,
                    wrapper: {
                        requestFullscreen: mockFullscreenFn,
                        setAttribute: mockWrapperSetAttributeFn,
                    } as unknown as HTMLDivElement,
                },
                options: {},
            } as unknown as Player);

            expect(mockFullscreenFn).toHaveBeenCalledOnce();
            expect(mockWrapperSetAttributeFn).toHaveBeenCalledWith(
                "data-fullscreen",
                "false",
            );
            expect(mockFullscreenClassListAddFn).toHaveBeenCalledWith(
                ACTIVE_CONTROL_CLASS,
            );
            expect(mockFullscreenSetAttributeFn).toHaveBeenCalledWith(
                "data-active",
                "true",
            );
        });

        it("calls Webkit fullscreen API if webkitExitFullscreen method exists on wrapper", () => {
            const mockFullscreenFn = vi.fn();

            vi.stubGlobal("document", {
                exitFullscreen: false,
                webkitExitFullscreen: mockFullscreenFn,
                mozCancelFullScreen: false,
            });

            const mockFullscreenClassListAddFn = vi.fn();
            const mockFullscreenSetAttributeFn = vi.fn();
            const mockWrapperSetAttributeFn = vi.fn();

            exitFullscreen({
                elements: {
                    fullscreenButton: {
                        classList: {
                            add: mockFullscreenClassListAddFn,
                        },
                        setAttribute: mockFullscreenSetAttributeFn,
                    } as unknown as HTMLButtonElement,
                    video: {} as HTMLVideoElement,
                    wrapper: {
                        webkitRequestFullscreen: mockFullscreenFn,
                        setAttribute: mockWrapperSetAttributeFn,
                    } as unknown as HTMLDivElement,
                },
                options: {},
            } as unknown as Player);

            expect(mockFullscreenFn).toHaveBeenCalledOnce();
            expect(mockWrapperSetAttributeFn).toHaveBeenCalledWith(
                "data-fullscreen",
                "false",
            );
            expect(mockFullscreenClassListAddFn).toHaveBeenCalledWith(
                ACTIVE_CONTROL_CLASS,
            );
            expect(mockFullscreenSetAttributeFn).toHaveBeenCalledWith(
                "data-active",
                "true",
            );
        });

        it("calls Firefox fullscreen API if mozCancelFullScreen method exists on wrapper", () => {
            const mockFullscreenFn = vi.fn();

            vi.stubGlobal("document", {
                exitFullscreen: false,
                webkitExitFullscreen: false,
                mozCancelFullScreen: mockFullscreenFn,
            });

            const mockFullscreenClassListAddFn = vi.fn();
            const mockFullscreenSetAttributeFn = vi.fn();
            const mockWrapperSetAttributeFn = vi.fn();

            exitFullscreen({
                elements: {
                    fullscreenButton: {
                        classList: {
                            add: mockFullscreenClassListAddFn,
                        },
                        setAttribute: mockFullscreenSetAttributeFn,
                    } as unknown as HTMLButtonElement,
                    video: {} as HTMLVideoElement,
                    wrapper: {
                        mozRequestFullScreen: mockFullscreenFn,
                        setAttribute: mockWrapperSetAttributeFn,
                    } as unknown as HTMLDivElement,
                },
                options: {},
            } as unknown as Player);

            expect(mockFullscreenFn).toHaveBeenCalledOnce();
            expect(mockWrapperSetAttributeFn).toHaveBeenCalledWith(
                "data-fullscreen",
                "false",
            );
            expect(mockFullscreenClassListAddFn).toHaveBeenCalledWith(
                ACTIVE_CONTROL_CLASS,
            );
            expect(mockFullscreenSetAttributeFn).toHaveBeenCalledWith(
                "data-active",
                "true",
            );
        });

        it("does not call fullscreen API if not supported", () => {
            const consoleSpy = vi.spyOn(console, "error");
            const mockFullscreenClassListRemoveFn = vi.fn();
            const mockFullscreenSetAttributeFn = vi.fn();
            const mockWrapperSetAttributeFn = vi.fn();

            vi.stubGlobal("document", {
                exitFullscreen: false,
                webkitExitFullscreen: false,
                mozCancelFullScreen: false,
            });

            exitFullscreen({
                elements: {
                    fullscreenButton: {
                        classList: {
                            add: mockFullscreenClassListRemoveFn,
                        },
                        setAttribute: mockFullscreenSetAttributeFn,
                    } as unknown as HTMLButtonElement,
                    video: {} as HTMLVideoElement,
                    wrapper: {
                        setAttribute: mockWrapperSetAttributeFn,
                    } as unknown as HTMLDivElement,
                },
                options: {},
            } as unknown as Player);

            expect(consoleSpy).toHaveBeenCalledWith(
                "Fullscreen API is not supported",
            );
            expect(mockWrapperSetAttributeFn).not.toHaveBeenCalled();
            expect(mockFullscreenClassListRemoveFn).not.toHaveBeenCalled();
            expect(mockFullscreenSetAttributeFn).not.toHaveBeenCalled();
        });
    });

    describe("toggleFullscreen", () => {
        it("enters fullscreen mode when not in fullscreen mode", () => {
            const mockRequestFullscreen = vi.fn();
            const mockExitFullscreen = vi.fn();

            vi.stubGlobal("document", {
                fullscreenElement: false,
                exitFullscreen: mockExitFullscreen,
            });

            toggleFullscreen({
                elements: {
                    fullscreenButton: {
                        classList: {
                            add: vi.fn(),
                            remove: vi.fn(),
                        },
                        setAttribute: vi.fn(),
                    } as unknown as HTMLButtonElement,
                    video: {} as HTMLVideoElement,
                    wrapper: {
                        requestFullscreen: mockRequestFullscreen,
                        setAttribute: vi.fn(),
                    } as unknown as HTMLDivElement,
                },
                options: {},
            } as unknown as Player);
        });

        it("exits fullscreen when in fullscreen mode", () => {
            const mockRequestFullscreen = vi.fn();
            const mockExitFullscreen = vi.fn();

            vi.stubGlobal("document", {
                fullscreenElement: true,
                exitFullscreen: mockExitFullscreen,
            });

            toggleFullscreen({
                elements: {
                    fullscreenButton: {
                        classList: {
                            add: vi.fn(),
                            remove: vi.fn(),
                        },
                        setAttribute: vi.fn(),
                    } as unknown as HTMLButtonElement,
                    video: {} as HTMLVideoElement,
                    wrapper: {
                        requestFullscreen: mockRequestFullscreen,
                        setAttribute: vi.fn(),
                    } as unknown as HTMLDivElement,
                },
                options: {},
            } as unknown as Player);
        });
    });
});
