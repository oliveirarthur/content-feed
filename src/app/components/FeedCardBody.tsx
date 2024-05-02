"use client";
import { useState } from "react";
import { ContentCard } from "../interfaces/feed";
import { getPostAnchor } from "../services/feed.service";
import { FeedCardAuthor } from "./FeedCardAuthor";

export function FeedCardBody({ item }: { item: ContentCard }) {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleFullContent = () => setShowFullContent(!showFullContent);

  return (
    <div className="px-4 pb-4">
      <div className="grid grid-cols-2">
        <div>
          <h2 className="text-xl font-bold mb-2">{item.textData.title}</h2>
          <h3 className="text-xl font-semibold mb-2">
            {item.textData.subTitle}
          </h3>
        </div>
        <div className="text-right">
          <FeedCardAuthor item={item} />
        </div>
      </div>
      <p
        className={`text-gray-400 text-justify ${
          !showFullContent && "line-clamp-3"
        }`}
      >
        {item.textData.body}
      </p>
      <a
        href={`#${getPostAnchor(item.id)}`}
        className="mt-2 inline-block text-blue-500 hover:text-blue-600 self-end"
        onClick={toggleFullContent}
      >
        Read {showFullContent ? "Less" : "More"}
      </a>
    </div>
  );
}
