import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Oferta } from "./shared/ofertas.model";
import { URL_API } from './app.api';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'
@Injectable()

export class ofertaService {

    constructor ( private http:Http ){}    
    
    public getOfertas(): Promise<Oferta[]>{
       
       return this.http.get(`${URL_API}/ofertas?destaque=true`)  
            .toPromise()
            .then( (resposta: Response) => resposta.json())
    }
    public getOfertasCategoria(categoria:string): Promise<Oferta[]>{
     
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)  
             .toPromise()
             .then( (resposta: Response) => resposta.json())
     }

    public getOfertaPorId(id:number): Promise<Oferta>{

        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then( (resposta:Response) =>  {
    
              return  resposta.json()[0]
            })
    }

    public getComoUsarPorId(id:number): Promise<string>{

        return this.http.get(`${URL_API}/como-usar?id=${id}`)

            .toPromise()
            .then( ( resposta:Response) => {

                return resposta.json()[0].descricao
            })
    }
    public getOndeFicaPorId(id:number): Promise<string>{

        return this.http.get(`${URL_API}/onde-fica?id=${id}`)

            .toPromise()
            .then( ( resposta:Response) => {

                return resposta.json()[0].descricao
            })
    }
    public pesquisarOfertas(termo:string): Observable<Oferta[]> {

        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .retry(10)
            .map( ( resposta:Response ) => resposta.json() )
    }
}