import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ICharacter } from "src/app/core/models/interfaces/characters/character.interface";
import { IThumbnail } from "src/app/core/models/interfaces/common/thumbnail.interface";

@Component({
  selector: "app-card-detail",
  templateUrl: "./card-detail.component.html",
  styleUrls: ["./card-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  cleanName!: string[];

  @Input() character!: ICharacter;

  ngOnInit(): void {
    this.formatName();
  }

  public parseUrl(url: IThumbnail) {
    const cleanUrl = this.sanitizer.bypassSecurityTrustUrl(
      `${url.path}.${url.extension}`
    );
    return cleanUrl;
  }

  private formatName() {
    if (this.character) {
      const charName = this.character.name.split("(");

      if (charName.length > 1)
        this.cleanName = [charName[0], charName[1].slice(0, -1)];
      else this.cleanName = [this.character.name.trim()];
    }
  }
}
