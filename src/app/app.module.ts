import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./core/core.module";
import { NavigationService } from "./core/services/navigation-service/navigation.service";
import { LoadingInterceptor } from "./core/interceptor/loading-interceptor/loading.interceptor";
import { ApiHashAuthInterceptor } from "./core/interceptor/api-hash-auth/api-hash-auth.interceptor";
import { ErrorInterceptor } from "./core/interceptor/error-interceptor/server-error.interceptor";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      newestOnTop: true,
      progressBar: true,
    }),
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHashAuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(public navigation: NavigationService) {
    this.navigation.startSaveHistory();
  }
}
