import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComicDetailComponent } from "./comic-detail.component";

const routes: Routes = [{ path: "", component: ComicDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicDetailRoutingModule {}
