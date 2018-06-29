import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/ofertas.model';
import { ofertaService } from '../ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ ofertaService ]

})
export class DiversaoComponent implements OnInit {

  public oferta:Oferta[]

  constructor( private OfertaService:ofertaService ) { }

  ngOnInit() {
    this.OfertaService.getOfertasCategoria('diversao')
      .then( (ofertas:Oferta[] ) => { 
       this.oferta = ofertas
      })
  }

}
