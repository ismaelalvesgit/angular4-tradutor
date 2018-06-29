import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/ofertas.model';
import { ofertaService } from '../ofertas.service';


@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ ofertaService ]
})
export class RestaurantesComponent implements OnInit {

  public oferta:Oferta[]

  constructor( private OfertaService:ofertaService ) { }

  ngOnInit() {

    this.OfertaService.getOfertasCategoria('restaurante')
      .then( (ofertas:Oferta[] ) => { 
       this.oferta = ofertas
      })
  }

}
