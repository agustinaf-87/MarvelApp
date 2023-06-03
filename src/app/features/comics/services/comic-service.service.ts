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

  getComicById(id: number): Observable<IPagination<IComic>> {
    return this.http
      .get<IDataWrapper<IComic>>(`${environment.URL_API}/comics/${id}`)
      .pipe(map((data: IDataWrapper<IComic>) => data.data));
  }
}
