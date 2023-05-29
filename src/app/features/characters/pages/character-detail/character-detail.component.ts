import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ICharacter } from "../../../../core/models/interfaces/characters/character.interface";
import { CharactersService } from "../../services/character-service/characters.service";

@Component({
  templateUrl: "./character-detail.component.html",
  styleUrls: ["./character-detail.component.scss"],
})
export class CharacterDetailComponent implements OnInit {
  characterData!: ICharacter;

  disabled = true;

  charForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharactersService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.characterService.getCharacterById(Number(id)).subscribe((data) => {
      this.characterData = data;

      this.charForm = new FormGroup({
        name: new FormControl(this.characterData.name),
        description: new FormControl(this.characterData.description),
      });
    });
  }
}
