import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "../../core/guards/auth-guard.guard";
import { CharactersComponent } from "./characters.component";
import { CharacterDetailComponent } from "./pages/character-detail/character-detail.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [authGuard],
    component: CharactersComponent,
  },
  {
    path: "detail/:id",
    canActivate: [authGuard],
    component: CharacterDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
