import { ContentCard } from "../interfaces/feed";

export function FeedCardAuthor({ item }: { item: ContentCard }) {
  const authorFullname = [item.textData.author.last, item.textData.author.first]
    .filter(Boolean)
    .join(", ");

  return <p className="mb-2">{authorFullname}</p>;
}
