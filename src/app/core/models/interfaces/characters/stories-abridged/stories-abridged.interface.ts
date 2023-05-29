import { IStoriesItemAbridged } from "./stories-abridged-item.interface";

export interface IStoriesAbridged {
  available: string;
  returned: string;
  collectionURI: string;
  items: IStoriesItemAbridged[];
}
