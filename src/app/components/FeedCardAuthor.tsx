import { ContentCard } from "../interfaces/feed";

interface FeedCardAuthorProps {
    item: ContentCard;
}

export function FeedCardAuthor({ item }: FeedCardAuthorProps) {
  const authorFullname = [item.textData.author.last, item.textData.author.first]
    .filter(Boolean)
    .join(", ");

  return <span className="mb-2">{authorFullname}</span>;
}
