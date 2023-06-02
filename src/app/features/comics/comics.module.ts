import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { ComicsRoutingModule } from "./comics-routing.module";
import { ComicsComponent } from "./comics.component";
import { ComicCardComponent } from "./components/comic-card/comic-card.component";
import { CarouselComponent } from "./components/carousel/carousel.component";

@NgModule({
  declarations: [ComicsComponent, ComicCardComponent, CarouselComponent],
  imports: [CommonModule, ComicsRoutingModule, SharedModule],
})
export class ComicsModule {}
