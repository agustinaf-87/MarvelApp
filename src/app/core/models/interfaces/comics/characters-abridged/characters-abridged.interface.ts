import { ICharactersItemAbridged } from "./characters-item-abridged.interface";

export interface ICharactersAbridged {
  available: string;
  returned: string;
  collectionURI: string;
  items: ICharactersItemAbridged[];
}
