import { Component, OnInit } from '@angular/core';

import { ofertaService } from '../ofertas.service';

import  { Oferta } from '../shared/ofertas.model';
import { resolve } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ofertaService ]
})
export class HomeComponent implements OnInit {

  public ofertas:Oferta[]

  constructor( private ofertasServiso:ofertaService ) { 


  }

  ngOnInit() {
    
    this.ofertasServiso.getOfertas()
      
      .then( (oferta:Oferta[]) => { 
        
        this.ofertas = oferta 
      },
        //resolve
      )
      .catch(
       //reject
       (param:any) => { console.log(param) }
      )
  }

}
