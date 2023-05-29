import { Component, OnInit } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { ICharacterQueryParams } from "../../core/models/interfaces/api-params/character-api-params.interface";
import { ICharacter } from "../../core/models/interfaces/characters/character.interface";
import { IPagination } from "../../core/models/interfaces/common/data-pagination.interface";
import { CharactersService } from "./services/character-service/characters.service";

type QueryPaginationResults = {
  offset: number;
  limit: number;
  total: number;
  count: number;
};

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
})
export class CharactersComponent implements OnInit {
  selectedItem: any;

  offset = 0;
  limit = 36;

  options = [
    { label: "A-z", value: "ascending" },
    { label: "Z-a", value: "descending" },
  ];

  suggestions$!: Observable<ICharacter[]>;

  currentFilter: ICharacterQueryParams = {
    limit: this.limit,
    offset: this.offset,
  };

  currentQueryResult: QueryPaginationResults = {
    offset: this.offset,
    limit: this.limit,
    total: 0,
    count: 0,
  };

  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.updateData();
  }

  async search(event: any) {
    //data: event.query

    if (
      !this.currentFilter ||
      this.currentFilter.nameStartsWith !== event.query
    ) {
      this.currentFilter = {
        nameStartsWith: event.query,
        offset: 0,
        limit: this.limit,
      };
    }

    this.updateData();
  }

  selectedValue(event: ICharacter) {
    const selectedChar = event;
    console.log(selectedChar);
  }

  onPageChange(event: any) {
    //  event.first: Index of first record
    //  event.rows: Number of rows to display in new page
    //  event.page: Index of the new page
    //  event.pageCount: Total number of pages

    this.currentFilter.offset = event.page * this.limit;
    this.updateData();
  }

  updateData() {
    this.suggestions$ = this.characterService
      .getFilteredCharactersDirty(this.currentFilter)
      .pipe(
        tap((data: IPagination<ICharacter>) => {
          this.currentQueryResult.total = data.total;
          this.currentQueryResult.count = data.count;
          this.currentQueryResult.offset = data.offset;
          this.currentQueryResult.limit = data.limit;
        }),
        map((data: IPagination<ICharacter>) => data.results)
      );
  }

  orderChange(event: any) {
    // event.originalEvent: browser event
    // event.value: single value or an array of values that are selected

    switch (event.value) {
      case "ascending":
        this.currentFilter.orderBy = "name";
        this.updateData();
        break;

      case "descending":
        this.currentFilter.orderBy = "-name";
        this.updateData();
        break;
    }
  }
}
