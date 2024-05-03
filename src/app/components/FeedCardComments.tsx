"use client";

import Image from "next/image";
import { useState } from "react";
import { ContentCard } from "../interfaces/feed";

function formatNumberShortScale(number: number) {
  const abbreviations = ["", "k", "M", "B", "T"];
  const tier = Math.floor(Math.log10(Math.abs(number)) / 3);

  if (tier === 0) return number;

  const suffix = abbreviations[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = number / scale;
  const fixed = scaled.toFixed(1);
  const numberToDisplay = fixed.endsWith(".0") ? scaled.toFixed(0) : fixed;

  return numberToDisplay + suffix;
}

export function FeedCardComments({ item }: { item: ContentCard }) {
  const [showComments, setShowComments] = useState(false);

  const commentsCount = item.comments.length;
  return (
    <div className="border-t border-gray-600 px-4 py-2 mt-auto">
      <p
        className="text-gray-500 text-sm hover:underline cursor-pointer"
        onClick={() => setShowComments(!showComments)}
      >
        {showComments ? "➖" : "💬"} {commentsCount} Comment
        {commentsCount != 1 && "s"}
      </p>

      {showComments && (
        <ul>
          {item.comments.map((comment) => {
            const likeCount = formatNumberShortScale(comment.likes);
            return (
              <li key={comment.text} className="py-2 flex">
                <Image
                  className="my-2 mr-2 rounded-full"
                  src={comment.profilePic}
                  width={50}
                  height={50}
                  alt={`${comment.author}'s profile picture`}
                />
                <div className="shrink-0">
                  <div className="text-blue-500 text-sm font-bold">
                    {comment.author}
                  </div>
                  <div className="text-gray-500">{comment.text}</div>
                  <div className="text-gray-500 text-xs">
                    <span className="" title={`${likeCount} likes`}>
                      👍 {likeCount}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
