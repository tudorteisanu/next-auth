import Http from "@/services/http.service";

export class CategoriesService {
  protected readonly instance: Http;

  public constructor() {
    this.instance = new Http();
  }

  async loadData() {
    return this.instance.get(`/categories`);
  }
}
