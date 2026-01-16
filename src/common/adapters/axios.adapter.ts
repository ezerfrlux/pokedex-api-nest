import axios, { AxiosInstance } from "axios";
import { HttpsAdapter } from "../interfaces/http-adapter.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AxiosAdapter implements HttpsAdapter {
  private axios: AxiosInstance = axios;
  
  async get<T>(url: string): Promise<T> {
    try {
      const {data} = await this.axios.get<T>(url);
      return data;
      } catch (error) {
      throw new Error("Error to request data")
    }
  }

}