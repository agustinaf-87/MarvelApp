import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { ComicsRoutingModule } from "./comics-routing.module";
import { ComicsComponent } from "./comics.component";
import { ComicCardComponent } from "./components/comic-card/comic-card.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { ComicDetailComponent } from "./pages/comic-detail/comic-detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ComicServiceService } from "./services/comic-service.service";

@NgModule({
  declarations: [
    ComicsComponent,
    ComicCardComponent,
    CarouselComponent,
    ComicDetailComponent,
  ],
  providers: [ComicServiceService],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
  ],
})
export class ComicsModule {}
