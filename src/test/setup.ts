import "@testing-library/jest-dom/vitest";

class MockIntersectionObserver implements IntersectionObserver {
	readonly root: Element | null = null;
	readonly rootMargin: string = "0px";
	readonly thresholds: ReadonlyArray<number> = [];

	disconnect(): void {}
	observe(): void {}
	takeRecords(): IntersectionObserverEntry[] {
		return [];
	}
	unobserve(): void {}
}

Object.defineProperty(globalThis, "IntersectionObserver", {
	writable: true,
	configurable: true,
	value: MockIntersectionObserver,
});
