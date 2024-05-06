import Home from "@app/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { feedResponse as mockData } from "./__mock__/feedResponse";

describe("Feed", () => {
  beforeAll(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });
  });

  it("renders the main feed", async () => {
    render(await Home());

    const feedGrid = screen.getByTestId("feed-grid");
    const feedCards = screen.getAllByTestId("feed-card");

    expect(feedGrid).toBeInTheDocument();
    expect(feedCards.length).toBe(mockData.contentCards.length);
  });
});
