import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComicsRoutingModule } from "./comics-routing.module";
import { ComicsComponent } from "./comics.component";
import { ComicCardComponent } from "./components/comic-card/comic-card.component";

@NgModule({
  declarations: [ComicsComponent, ComicCardComponent],
  imports: [CommonModule, ComicsRoutingModule],
})
export class ComicsModule {}
