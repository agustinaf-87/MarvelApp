import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./core/pages/landing-page/landing-page.component";
import { LoginComponent } from "./core/components/login/login.component";
import { authGuard } from "./core/guards/auth-guard.guard";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
    data: {
      breadcrumb: "LandingPage",
    },
  },
  {
    path: "comics",
    canMatch: [authGuard],
    loadChildren: () =>
      import("./features/comics/comics.module").then((m) => m.ComicsModule),
  },
  {
    path: "characters",
    canMatch: [authGuard],
    loadChildren: () =>
      import("./features/characters/characters.module").then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
