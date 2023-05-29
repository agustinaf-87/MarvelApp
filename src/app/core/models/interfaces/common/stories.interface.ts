import { IStoriesItem } from "./stories-item.interface";

export interface IStories {
  available: string;
  returned: string;
  collectionURI: string;
  items: IStoriesItem[];
}
