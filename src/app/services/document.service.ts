import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


export type TDocument = {
    name: string;
    pages: TPage[]
}

export type TPage = {
    number: number;
    imageUrl: string;
}

@Injectable({
    providedIn: 'root'
})

export class DocumentService {
    constructor(private http: HttpClient) {}

    getDocument(): Observable<TDocument> {
        return this.http.get<TDocument>("assets/1.json");
    }
}
