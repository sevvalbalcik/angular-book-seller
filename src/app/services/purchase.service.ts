import { Injectable } from '@angular/core';
import {Environment} from "@angular/cli/lib/config/workspace-schema";

import {RequestBaseService} from "./request-base.service";
import {AuthenticationService} from "./authentication.service";
import {HttpClient} from "@angular/common/http";
import {Purchase} from "../models/purchase.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const  API_URL = `${environment.BASE_URL}/api/purchase-history`

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends RequestBaseService{

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService,http);
  }

  savePurchase(purchase: Purchase): Observable<any> {
    return this.http.post(API_URL,purchase,{headers:this.getHeaders});
  }

  getAllPurchaseItem(): Observable<any> {
    return this.http.get(API_URL,{headers:this.getHeaders});
  }
}
