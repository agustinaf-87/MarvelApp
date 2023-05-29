import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-floating-menu",
  templateUrl: "./floating-menu.component.html",
  styleUrls: ["./floating-menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingMenuComponent {}
