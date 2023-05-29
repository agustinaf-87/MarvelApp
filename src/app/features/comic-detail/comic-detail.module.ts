import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from "@angular/material/form-field";
import { ComicDetailRoutingModule } from "./comic-detail-routing.module";
import { ComicDetailComponent } from "./comic-detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ComicDetailComponent],
  imports: [
    CommonModule,
    ComicDetailRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" },
    },
  ],
})
export class ComicDetailModule {}
