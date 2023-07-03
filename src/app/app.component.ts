import { Component } from "@angular/core";
import { environment } from "src/environments/environment.development";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "MarvelExam";
  code = environment.code;
}
