import { Component, OnInit } from "@angular/core";
import { ComicServiceService } from "../../services/comic-service.service";
import { ActivatedRoute } from "@angular/router";
import { IComic } from "src/app/core/models/interfaces/comics/comic.interface";
import { FormControl, FormGroup } from "@angular/forms";
import { DatePipe } from "@angular/common"; // Importar DatePipe

@Component({
  templateUrl: "./comic-detail.component.html",
  styleUrls: ["./comic-detail.component.scss"],
  providers: [DatePipe], // Agregar DatePipe como proveedor
})
export class ComicDetailComponent implements OnInit {
  comic!: IComic;

  detailCardForm!: FormGroup;
  readNot = true;

  constructor(
    private comicService: ComicServiceService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getFilterComicById();
    this.detailCardForm = new FormGroup({
      staticPublishDate: new FormControl(""),
      staticWriterName: new FormControl(""),
      staticDescription: new FormControl(""),
    });
  }
  getFilterComicById() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.comicService.getComicById(id).subscribe((data) => {
      this.detailCardForm
        .get("staticPublishDate")
        ?.setValue(
          this.datePipe.transform(data.results[0].dates[0].date, "dd/MM/yyyy")
        );
      this.detailCardForm
        .get("staticWriterName")
        ?.setValue(data.results[0].creators.items[0].name);
      this.detailCardForm
        .get("staticDescription")
        ?.setValue(data.results[0].description);
      this.comic = data.results[0];
    });
  }
}
