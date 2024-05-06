import { FeedResponse } from "./interfaces/feed";
import { getFeedData } from "./services/feed.service";
import { FeedCard } from "./components/FeedCard";

export default async function Home() {
  const feedResponse: FeedResponse = await getFeedData();

  const sortedFeed = feedResponse.contentCards?.sort((a, b) => {
    return b.metadata.priority - a.metadata.priority;
  });

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4" data-testid="feed-grid">
      {sortedFeed?.map((item) => (
        <FeedCard key={item.id} item={item} />
      ))}
    </main>
  );
}
