import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { API_CONFIG } from "../../config/api.config";
import { ClienteDTO } from "../../models/cliente.dto";
import { StorageService } from "../storage.service";
import { IMAGES_CONFIG } from "../../config/images.config";

@Injectable()
export class ClienteService {

    constructor(public http: HttpClient, 
                public storage: StorageService){}

    findById(id: string){
        return this.http.get(`${API_CONFIG.baseUrl}/clientes/${id}`);
    } 

    findByEmail(email: string){
        return this.http.get(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
    }

    getImageFromBucket(id: string): Observable<any> {
        let url = `${IMAGES_CONFIG.images}/cp${id}.jpg`;
        return this.http.get(url, {responseType: 'blob'});
    }

    insert(obj: ClienteDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/clientes`, 
            obj, 
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}