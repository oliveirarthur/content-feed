import Image from "next/image";
import { ContentCard } from "../interfaces/feed";
import { getPostAnchor } from "../services/feed.service";
import { FeedCardBody } from "./FeedCardBody";
import { FeedCardComments } from "./FeedCardComments";

interface FeedCardProps {
  item: ContentCard;
}

export function FeedCard({ item }: FeedCardProps) {
  return (
    <div
      className="bg-gray-900 rounded-lg shadow-md flex flex-col items-stretch"
      data-testid="feed-card"
      id={getPostAnchor(item.id)}
    >
      <Image
        className="rounded-lg w-full h-48 object-cover object-center dark:invert p-4"
        src={item.imageUri}
        alt={`Image for: ${item.textData.title}`}
        width={300}
        height={100}
      ></Image>
      <FeedCardBody item={item} />
      <FeedCardComments item={item} />
    </div>
  );
}
