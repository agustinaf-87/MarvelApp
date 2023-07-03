import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth-service/auth.service";
import { NotificationService } from "../../services/error-notification/notification.service";
import { LoginCorrect } from "../../utils/validators/login-form-correct.validator";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private loginCorrect: LoginCorrect
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        public_key: new FormControl("", [Validators.required]),
        private_key: new FormControl("", [Validators.required]),
      },
      {
        updateOn: "submit",
        asyncValidators: [this.loginCorrect.validate.bind(this.loginCorrect)],
        validators: [Validators.required],
      }
    );
  }

  login(): void {
    if (this.loginForm.valid) {
      const publicKey = this.loginForm.get("public_key")?.value;
      const privateKey = this.loginForm.get("private_key")?.value;
      this.authService.login(publicKey, privateKey);
      this.notificationService.showSuccess("Login successful!");
    } else {
      this.notificationService.showError("Please enter valid credentials");
    }
  }
}
