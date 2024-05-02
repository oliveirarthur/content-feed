import Image from "next/image";
import { ContentCard } from "../interfaces/feed";
import { getPostAnchor } from "../services/feed.service";
import { FeedCardBody } from "./FeedCardBody";

export function FeedCard({ item }: { item: ContentCard }) {
  return (
    <div
      className="bg-gray-900 rounded-lg shadow-md flex flex-col items-stretch"
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
      <div className="border-t border-gray-600 px-4 py-2 mt-auto">
        <p className="text-gray-500 text-sm">{item.comments.length} Comments</p>
      </div>
    </div>
  );
}
