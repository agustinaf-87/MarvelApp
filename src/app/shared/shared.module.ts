import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastModule } from "primeng/toast";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { DropdownModule } from "primeng/dropdown";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory } from "../app.module";
import { HttpClient } from "@angular/common/http";
import { MenubarModule } from "primeng/menubar";
import { ButtonModule } from "primeng/button";
import { FloatingMenuComponent } from "./components/floating-menu-layout/floating-menu/floating-menu.component";
import { AutoCompleteModule } from "primeng/autocomplete";
import { PaginatorModule } from "primeng/paginator";
import { SelectButtonModule } from "primeng/selectbutton";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormLayoutComponent } from "./components/form-layout/form-layout/form-layout.component";
const PRIMENG_MODULES = [
  BreadcrumbModule,
  DropdownModule,
  ToastModule,
  MenubarModule,
  ButtonModule,
  AutoCompleteModule,
  PaginatorModule,
  SelectButtonModule,
];

const MATERIAL_MODULES = [MatFormFieldModule, MatInputModule];

@NgModule({
  declarations: [FloatingMenuComponent, FormLayoutComponent],
  imports: [
    CommonModule,
    PRIMENG_MODULES,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    PRIMENG_MODULES,
    MATERIAL_MODULES,
    TranslateModule,
    FloatingMenuComponent,
  ],
})
export class SharedModule {}
