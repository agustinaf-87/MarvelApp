import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersComponent } from "./characters.component";
import { CharactersService } from "./services/character-service/characters.service";
import { CardDetailComponent } from "./components/card-detail/card-detail.component";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CharacterDetailComponent } from "./pages/character-detail/character-detail.component";

@NgModule({
  declarations: [
    CharactersComponent,
    CardDetailComponent,
    CharacterDetailComponent,
  ],
  providers: [CharactersService],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CharactersModule {}
