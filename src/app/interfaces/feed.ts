export interface FeedResponse {
  contentCards: ContentCard[];
  in55: number;
}

export interface ContentCard {
  id: string;
  imageUri: string;
  metadata: Metadata;
  comments: Comment[];
  textData: TextData;
}

export interface Comment {
  likes: number;
  author: string;
  profilePic: string;
  text: string;
}

export interface Metadata {
  priority: number;
  publishDate: Date;
}

export interface TextData {
  subTitle: string;
  body: string;
  title: string;
  author: Author;
}

export interface Author {
  last: string;
  first: string;
}
