import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { IComic } from "src/app/core/models/interfaces/comics/comic.interface";
import { IPagination } from "src/app/core/models/interfaces/common/data-pagination.interface";
import { IDataWrapper } from "src/app/core/models/interfaces/common/data-wrapper.interface";
import { environment } from "src/environments/environment.testing";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ComicDetailService {
  constructor(private http: HttpClient) {}

  getComicById(id: number): Observable<IPagination<IComic>> {
    return this.http
      .get<IDataWrapper<IComic>>(`${environment.URL_API}/comics/${id}`)
      .pipe(map((data: IDataWrapper<IComic>) => data.data));
  }
}
