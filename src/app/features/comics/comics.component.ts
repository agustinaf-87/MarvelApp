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

  comics: IComic[] = [];
  digitalComics: IComic[] = [];
  showLoadMoreButton = true;
  carouselIndex = 0;
  responsiveOptions!: any[];

  ngOnInit() {
    this.load12LastComics();
    this.loadADigitalComics();

    this.responsiveOptions = [
      {
        breakpoint: "1199px",
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: "991px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "767px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
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

  loadNext7Comics(): void {
    const currentOffset = 12 + this.comics.length;
    this.comicService
      .getFilteredComics({
        dateDescriptor: ComicDateDescriptorEnum.LAST_WEEK,
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
        offset: 50,
      })
      .subscribe((pagination: IPagination<IComic>) => {
        this.digitalComics = pagination.results;
        console.log(this.digitalComics[0]);
      });
  }
}
