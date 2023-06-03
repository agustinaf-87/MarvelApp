import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComicsComponent } from "./comics.component";
import { ComicDetailComponent } from "./pages/comic-detail/comic-detail.component";
import { authGuard } from "src/app/core/guards/auth-guard.guard";

const routes: Routes = [
  {
    path: "",
    canActivate: [authGuard],
    component: ComicsComponent,
  },
  {
    path: "comic-detail/:id",
    canActivate: [authGuard],
    component: ComicDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsRoutingModule {}
