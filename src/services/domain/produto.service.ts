import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProdutoDTO } from "../../models/produto.dto";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs";
import { IMAGES_CONFIG } from "../../config/images.config";

@Injectable()
export class ProdutoService {

    constructor(public http: HttpClient){}

    findById(produtoId: string) {
        return this.http.get<ProdutoDTO>(`${API_CONFIG.baseUrl}/produtos/${produtoId}`);
    }

    findByCategoria(categoriaId: string, page: number = 0, linesPerPage: number = 24) {
        return this.http.get<ProdutoDTO[]>(`${API_CONFIG.baseUrl}/produtos/?categorias=${categoriaId}&page=${page}&linesPerPage=${linesPerPage}`);
    }

    getSmallImageFromBucket(id: string): Observable<any> {
        let url = `${IMAGES_CONFIG.images}/prod${id}-small.jpg`;
        return this.http.get(url, {responseType: 'blob'});
    }

    getImageFromBucket(id: string): Observable<any> {
        let url = `${IMAGES_CONFIG.images}/prod${id}.jpg`;
        return this.http.get(url, {responseType: 'blob'});
    }
}