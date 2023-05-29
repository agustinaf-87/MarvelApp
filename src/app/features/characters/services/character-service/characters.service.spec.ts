import { TestBed } from "@angular/core/testing";
import { CharactersService } from "./characters.service";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApiHashAuthInterceptor } from "../../../../core/interceptor/api-hash-auth/api-hash-auth.interceptor";

describe("CharactersService", () => {
  let service: CharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CharactersService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiHashAuthInterceptor,
          multi: true,
        },
      ],
      imports: [MatSnackBarModule, HttpClientModule],
    });

    service = TestBed.inject(CharactersService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return Characters with name starting with Spider", (done: DoneFn) => {
    const filter = {
      nameStartsWith: "Spider",
      offset: 0,
      limit: 20,
    };

    service.getFilteredCharacters(filter).subscribe({
      next: (data) => {
        expect(data.results.length).toBeGreaterThan(0);
        expect(data.results[0].name).toContain("Spider");
        done();
      },
      error: done.fail,
    });
  });
});
