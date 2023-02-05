import Http from "@/services/http.service";

export class AuthService {
  protected readonly http: Http;
  public constructor() {
    this.http = new Http();
  }

  async login(email: string, password: string) {
    return this.http.post("/auth/login", {
      email,
      password,
    });
  }

  async useInfo() {
    return this.http.get(`/auth/user-info`);
  }
}
