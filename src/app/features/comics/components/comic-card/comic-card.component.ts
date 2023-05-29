import { Component, Input } from "@angular/core";
import { IComic } from "src/app/core/models/interfaces/comics/comic.interface";

@Component({
  selector: "app-comic-card",
  templateUrl: "./comic-card.component.html",
  styleUrls: ["./comic-card.component.scss"],
})
export class ComicCardComponent {
  @Input() comics!: IComic;
  @Input() digitalComics!: IComic;
}
