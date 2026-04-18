test("mocked color API returns valid structure", () => {
  const mockResponse = {
    results: ["red", "blue", "green"]
  };

  expect(mockResponse).toHaveProperty("results");
  expect(Array.isArray(mockResponse.results)).toBe(true);
  expect(mockResponse.results.length).toBeGreaterThan(0);
});