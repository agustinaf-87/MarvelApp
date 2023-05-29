import { IThumbnail } from "../common/thumbnail.interface";
import { IURL } from "../common/url.interface";
import { IComicsAbridged } from "./comic-agridged/comic-item-abridged";
import { IStoriesAbridged } from "./stories-abridged/stories-abridged.interface";

export interface ICharacter {
  id: string;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  urls: IURL[];
  thumbnail: IThumbnail;
  comics: IComicsAbridged;
  stories: IStoriesAbridged;
  events: IComicsAbridged;
  series: IComicsAbridged;
}
