import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComicsComponent } from "./comics.component";

const routes: Routes = [
  { path: "", component: ComicsComponent },
  {
    path: "comic-detail/:id",
    loadChildren: () =>
      import("../comic-detail/comic-detail.module").then(
        (m) => m.ComicDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsRoutingModule {}
