import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { Data, Router } from "@angular/router";

describe("AuthService", () => {
  let service: AuthService;
  let router: Router;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, Router],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should save data in session and local storage, and navigate to home", () => {
    const publicKey = "f1296a5ad495a23c74117a087c56ff5c";
    const privateKey = "7e616377057716e202ec371c6a3e9093c2de838a";
    spyOn(router, "navigateByUrl");

    service.login(publicKey, privateKey);

    expect(service.getDataSession()).toBe(publicKey);
    expect(service.getDataLocal().ts).toBeTruthy();
    expect(service.getDataLocal().hash).toBeTruthy();
    expect(router.navigateByUrl).toHaveBeenCalledWith("/");
  });

  it("can test for network error", (done) => {
    const mockError = new ProgressEvent("error");

    httpClient.get<Data[]>("/login").subscribe({
      next: () => fail("should have failed with the network error"),
      error: (error: HttpErrorResponse) => {
        expect(error.error).toBe(mockError);
        done();
      },
    });

    const req = httpMock.expectOne("/login");

    req.error(mockError);
  });
});
