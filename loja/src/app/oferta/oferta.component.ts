import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ofertaService } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ ofertaService ]
})
export class OfertaComponent implements OnInit {

  public oferta:Oferta

  constructor( 
    private route:ActivatedRoute,
    
    private OfertaService:ofertaService  

  ) { }

  ngOnInit() {
    this.OfertaService.getOfertaPorId(this.route.snapshot.params['id'])
      .then( (oferta:Oferta) => {

        this.oferta = oferta
      })
  }

}
