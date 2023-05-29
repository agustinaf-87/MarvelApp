import { ComicDateDescriptorEnum } from "src/app/core/enums/comic-dateDescriptor.enum";
import { ComicFormatTypeEnum } from "src/app/core/enums/comic-format-type.enum";
import { ComicFormatEnum } from "src/app/core/enums/comic-format.enum";

export interface IComicQueryParams {
  format?: ComicFormatEnum; //	Filter by the issue format (e.g. comic, digital comic, hardcover).
  formatType?: ComicFormatTypeEnum; //	Filter by the issue format type (comic or collection).
  noVariants?: boolean; //	Exclude variants (alternate covers, secondary printings, director's cuts, etc.) from the result set.
  dateDescriptor?: ComicDateDescriptorEnum; //Return comics within a predefined date range.
  dateRange?: Date[]; //Return comics within a predefined date range. Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02). Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format.
  title?: string; //Return only issues in series whose title matches the input.
  titleStartsWith?: string; //Return only issues in series whose title starts with the input.
  startYear?: number; //Return only issues in series whose start year matches the input.
  issueNumber?: number; //Return only issues in series whose issue number matches the input.
  diamondCode?: number; //	Filter by diamond code.
  digitalId?: number; // Filter by digital comic id.
  upc?: string; // Filter by UPC.
  isbn?: string; //Filter by ISBN.
  ean?: string; // Filter by EAN.
  issn?: string; // Filter by ISSN.
  hasDigitalIssue?: boolean; //Include only results which are available digitally.
  modifiedSince?: Date; //	Return only comics which have been modified since the specified date.
  creators?: number[]; //Return only comics which feature work by the specified creators (accepts a comma-separated list of ids).
  characters?: number[]; //Return only comics which feature the specified characters (accepts a comma-separated list of ids).
  series?: number[]; //Return only comics which are part of the specified series (accepts a comma-separated list of ids).
  events?: number[]; //Return only comics which take place in the specified events (accepts a comma-separated list of ids).
  stories?: number[]; //Return only comics which contain the specified stories (accepts a comma-separated list of ids).
  sharedAppearances?: number[]; //Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear). Accepts a comma-separated list of ids.
  collaborators?: number[]; //Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). Accepts a comma-separated list of ids.
  orderBy?: string; // Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.
  limit?: number; // 	Limit the result set to the specified number of resources.
  offset?: number; //Skip the specified number of resources in the result set.
}
