import { FeedResponse } from "@app/app/interfaces/feed";
import { NextResponse } from "next/server";

export async function GET() {
  const feedResponse = await fetch(
    "https://stoplight.io/mocks/engine/fullstack-spec/52502230/content",
    {
      headers: {
        Prefer: "code=200, dynamic=true",
      },
    }
  );
  const feed: FeedResponse = await feedResponse.json();
  return NextResponse.json(feed);
}
