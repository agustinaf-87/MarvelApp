import { IComicsItemAgridged } from "./comic-abridged.interface";

export interface IComicsAbridged {
  available: string;
  returned: string;
  collectionURI: string;
  items: IComicsItemAgridged[];
}
