import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastModule } from "primeng/toast";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { DropdownModule } from "primeng/dropdown";
import { MenubarModule } from "primeng/menubar";
import { ButtonModule } from "primeng/button";
import { AutoCompleteModule } from "primeng/autocomplete";
import { PaginatorModule } from "primeng/paginator";
import { SelectButtonModule } from "primeng/selectbutton";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CarouselModule } from "primeng/carousel";
const PRIMENG_MODULES = [
  BreadcrumbModule,
  DropdownModule,
  ToastModule,
  MenubarModule,
  ButtonModule,
  AutoCompleteModule,
  PaginatorModule,
  SelectButtonModule,
  CarouselModule,
];

const MATERIAL_MODULES = [MatFormFieldModule, MatInputModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, PRIMENG_MODULES],
  exports: [PRIMENG_MODULES, MATERIAL_MODULES],
})
export class SharedModule {}
