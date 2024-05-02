import { FeedResponse } from "../interfaces/feed";

const BASE_URL = `${process.env.APP_URL}/api/feed`;

export async function getFeedData(): Promise<FeedResponse> {
  const response = await fetch(BASE_URL);
  return response.json();
}

export function getPostAnchor(post_id: string) {
  return `post_${post_id}`;
}
