import { Component, OnInit } from '@angular/core';
import { ofertaService } from '../ofertas.service';
import { oferta } from '../shared/ofertas.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ofertaService ]
})
export class HomeComponent implements OnInit {

  public Oferta: oferta[]

  constructor(private ofertaService:ofertaService) { }

  ngOnInit() {
    console.log(this.ofertaService.getOfertas())
  }

}
