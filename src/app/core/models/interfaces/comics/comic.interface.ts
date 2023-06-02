import { IThumbnail } from "../common/thumbnail.interface";
import { ICharactersAbridged } from "./characters-abridged/characters-abridged.interface";
import { IDateElement } from "./others/date-element.interface";
import { IPrice } from "./others/price.interface";
export interface IComic {
  length: any;
  id: string;
  digitalId: string;
  title: string;
  issueNumber: string;
  description: string;
  dates: IDateElement[];
  prices: IPrice[];
  thumbnail: IThumbnail;
  images: IThumbnail[];
  creators: ICharactersAbridged;
  characters: ICharactersAbridged;
}
