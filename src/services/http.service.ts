import axios, { AxiosInstance, AxiosResponse } from "axios";

import qs from "qs";
import Cookies from "js-cookie";

class Http {
  protected readonly instance: AxiosInstance;

  public constructor() {
    this.instance = axios.create({
      baseURL: "https://shoply-api.nanoit.dev/api",
      timeout: 30000,
    });

    this.instance.interceptors.request.use((config) => {
      config.headers.Authorization = this.authorizationHeader;
      return config;
    });

    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          Cookies.remove("currentUser");
          error.response.cookies.remove('currentUser')
          window.location.href = '/'
        }
        return error;
      }
    );
  }

  getAxiosInstance() {
    return this.instance;
  }

  public async get(url: string, params: object = {}): Promise<AxiosResponse> {
    try {
      const response = await this.instance.get(url, {
        params,
        paramsSerializer: {
          serialize: (params) => {
            return qs.stringify(params);
          },
        },
      });
      return response.data;
    } catch (e: any) {
      throw e.data;
    }
  }

  public async post(url: string, data: object = {}): Promise<AxiosResponse> {
    try {
      const response = await this.instance.post(url, data);
      return response.data;
    } catch (e: any) {
      throw e.data;
    }
  }

  public async put(url: string, data: object = {}): Promise<AxiosResponse> {
    try {
      const response = await this.instance.put(url, data);
      return response.data;
    } catch (e: any) {
      throw e.data;
    }
  }

  public async patch(url: string, data: object = {}): Promise<AxiosResponse> {
    try {
      const response = await this.instance.patch(url, data);
      return response.data;
    } catch (e: any) {
      throw e.data;
    }
  }

  public async delete(url: string, data: object = {}): Promise<AxiosResponse> {
    try {
      const response = await this.instance.delete(url, data);
      return response.data;
    } catch (e: any) {
      throw e.data;
    }
  }

  private get authorizationHeader() {
    const currentUser = Cookies.get("currentUser");
    if (!currentUser) {
      return "";
    }

    const { accessToken } = JSON.parse(currentUser || "");

    if (accessToken) {
      return `Bearer ${accessToken}`;
    }

    return "";
  }
}

export default Http;
