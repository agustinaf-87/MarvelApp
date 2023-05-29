import { Component, OnInit } from "@angular/core";
import { ComicServiceService } from "./services/comic-service.service";
import { IComic } from "src/app/core/models/interfaces/comics/comic.interface";
import { ComicFormatEnum } from "src/app/core/enums/comic-format.enum";
import { IPagination } from "src/app/core/models/interfaces/common/data-pagination.interface";
import { ComicDateDescriptorEnum } from "src/app/core/enums/comic-dateDescriptor.enum";

@Component({
  selector: "app-comics",
  templateUrl: "./comics.component.html",
  styleUrls: ["./comics.component.scss"],
})
export class ComicsComponent implements OnInit {
  constructor(private comicService: ComicServiceService) {}

  // comics!: Observable<IPagination<IComic>>; acabo de comentar esto q es original
  comics: IComic[] = [];
  digitalComics: IComic[] = [];
  showLoadMoreButton = true;

  ngOnInit() {
    this.load12LastComics();
    this.loadADigitalComics();
  }

  load12LastComics(): void {
    this.comicService
      .getFilteredComics({
        dateDescriptor: ComicDateDescriptorEnum.LAST_WEEK,
        limit: 12,
        offset: 12,
      })
      .subscribe((pagination: IPagination<IComic>) => {
        this.comics = pagination.results;
      });
  }

  loadNext7DigitalComics(): void {
    const currentOffset = 12 + this.comics.length; // Calcula el offset actual para la próxima página
    this.comicService
      .getFilteredComics({
        dateDescriptor: ComicDateDescriptorEnum.LAST_WEEK,
        limit: 7,
        offset: currentOffset,
      })
      .subscribe((pagination: IPagination<IComic>) => {
        this.comics = [...this.comics, ...pagination.results];
        if (this.comics.length >= 19) {
          this.showLoadMoreButton = false;
        }
      });
  }

  loadADigitalComics(): void {
    this.comicService
      .getFilteredComics({
        format: ComicFormatEnum.DIGITAL_COMIC,
        orderBy: "modified",
        limit: 20,
        offset: 5,
      })
      .subscribe((pagination: IPagination<IComic>) => {
        this.digitalComics = pagination.results;
        console.log(this.digitalComics[0]);
      });
  }
}

//FUNCIONES ANTERIORES
// loadFirst12Comics(): void {
//   this.comicService.get12ComicsByLastWeek().subscribe((comics) => {
//     this.comics = comics;
//   });
// }

//load12DigitalComics(): void {
// this.comics$ = this.comicService.getFilteredComics({
//   format: ComicFormatEnum.DIGITAL_COMIC,
// });

// loadAllDigitalComics(): void {
//   this.comicService
//     .getFilteredComics({ format: ComicFormatEnum.DIGITAL_COMIC })
//     .subscribe((comics) => {
//       this.comics = comics;
//     });
// }

// loadMoreComics(): void {
//   const nextIndex = this.comics.length;
//   this.comicService
//     .get7MoreComicsByLastWeek(nextIndex)
//     .subscribe((comics) => {
//       this.comics = [...this.comics, ...comics];
//       const totalComics = 19;
//       this.showLoadMoreButton = this.comics.length < totalComics;
//     });
// }
