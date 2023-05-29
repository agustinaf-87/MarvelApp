import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { IComicQueryParams } from "src/app/core/models/interfaces/api-params/comics-api-params.interface";
import { IComic } from "src/app/core/models/interfaces/comics/comic.interface";
import { IPagination } from "src/app/core/models/interfaces/common/data-pagination.interface";
import { IDataWrapper } from "src/app/core/models/interfaces/common/data-wrapper.interface";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ComicServiceService {
  constructor(private http: HttpClient) {}

  getFilteredComics(
    filter?: IComicQueryParams
  ): Observable<IPagination<IComic>> {
    return this.http
      .get<IDataWrapper<IComic>>(`${environment.URL_API}/comics`, {
        params: { ...(filter as any) },
      })
      .pipe(map((data: IDataWrapper<IComic>) => data.data));
  }

  // getAllFilteredComics(filter?: IComicQueryParams) {
  //   return this.filterOutBrokenComic(
  //     this.http.get<IDataWrapper<IComic>>(`${environment.URL_API}/comics`, {
  //       params: { ...(filter as any) },
  //     })
  //   ).pipe(map((pagination: IPagination<IComic>) => pagination.results));
  // }

  // getFilteredComicsByLastWeek(filter?: IComicQueryParams) {
  //   return this.filterOutBrokenComic(
  //     this.http.get<IDataWrapper<IComic>>(`${environment.URL_API}/comics`, {
  //       params: { ...(filter as any), limit: "50", dateDescriptor: "lastWeek" },
  //     })
  //   ).pipe(map((pagination: IPagination<IComic>) => pagination.results));
  // }

  // private filterOutBrokenComic(
  //   observable: Observable<IDataWrapper<IComic>>
  // ): Observable<IPagination<IComic>> {
  //   return observable.pipe(
  //     map((data: IDataWrapper<IComic>) => {
  //       const validFilteredComics: IComic[] = [];

  //       data.data.results.forEach((comic) => {
  //         if (this.validComic(comic)) validFilteredComics.push(comic);
  //       });
  //       data.data.count = validFilteredComics.length;
  //       data.data.results = validFilteredComics;

  //       return data.data;
  //     })
  //   );
  // }

  // private validComic(comic: IComic) {
  //   return !comic.thumbnail.path.includes("image_not_available");
  // }

  // get12ComicsByLastWeek(filter?: IComicQueryParams) {
  //   return this.getFilteredComics(filter).pipe(
  //     map((comics: IComic[]) => comics.slice(0, 12))
  //   );
  // }

  // get7MoreComicsByLastWeek(
  //   startIndex: number,
  //   filter?: IComicQueryParams
  // ): Observable<IComic[]> {
  //   return this.getFilteredComicsByLastWeek(filter).pipe(
  //     map((comics: IComic[]) => comics.slice(startIndex, startIndex + 7))
  //   );
  // }
}
