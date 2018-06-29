import { Component, OnInit } from '@angular/core';
import { ofertaService } from '../ofertas.service';
import { Observable } from 'rxjs'
import { Oferta } from '../shared//ofertas.model';
import { Subject } from 'rxjs'

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ ofertaService ]
})
export class TopoComponent implements OnInit {

  public Ofertas:Observable<Oferta[]>

  public lista:Oferta[]

  public subjectOfertas:Subject<string> = new Subject<string>() 

  constructor( private OfertaService:ofertaService ) { }

  ngOnInit() {

    this.Ofertas = this.subjectOfertas

      .debounceTime(1000)

      .distinctUntilChanged()

      .switchMap( (termo:string)=>{

        if(termo.trim()==''){

          return Observable.of<Oferta[]>([])
        }

        return this.OfertaService.pesquisarOfertas(termo)
      } )

      .catch( (err:any) => { 
        console.log(err)
        return Observable.of<Oferta[]>([])
      })

      this.Ofertas.subscribe(

        (oferta:Oferta[])=>{ 
          console.log(oferta) 
          this.lista = oferta
        },
  
        (error:any)=> { console.log("status", error.status)}
      )
  }
  
  public getPesquisa(pesquisa:string):void{

    this.subjectOfertas.next(pesquisa)
  }    
}
