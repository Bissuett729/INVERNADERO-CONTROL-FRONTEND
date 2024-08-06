import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  public base_url = `http://192.168.56.11:2550`;

  constructor(private http: HttpClient) { }

  public request_post = async (url: string, data: any): Promise<any> => {
    return this.http.post(`${this.base_url}${url}`, data)
  }
}
