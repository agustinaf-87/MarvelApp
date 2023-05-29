import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { ICharacterQueryParams } from "../../../../core/models/interfaces/api-params/character-api-params.interface";
import { ICharacter } from "../../../../core/models/interfaces/characters/character.interface";
import { IPagination } from "../../../../core/models/interfaces/common/data-pagination.interface";
import { IDataWrapper } from "../../../../core/models/interfaces/common/data-wrapper.interface";

@Injectable()
export class CharactersService {
  constructor(private http: HttpClient) {}

  getFilteredCharactersDirty(
    filter?: ICharacterQueryParams
  ): Observable<IPagination<ICharacter>> {
    return this.http
      .get<IDataWrapper<ICharacter>>(`${environment.URL_API}/characters`, {
        params: { ...(filter as any) },
      })
      .pipe(map((data: IDataWrapper<ICharacter>) => data.data));
  }

  getCharacterById(id: number): Observable<ICharacter> {
    return this.http
      .get<IDataWrapper<ICharacter>>(`${environment.URL_API}/characters/${id}`)
      .pipe(map((data: IDataWrapper<ICharacter>) => data.data.results[0]));
  }
}
