import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ofertaService } from '../../ofertas.service';


@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ ofertaService ]
})
export class OndeFicaComponent implements OnInit {

  public descricao:string = ''

  constructor( 
    private router: ActivatedRoute,
    
    private Ofertaservice:ofertaService
  ) { }

  ngOnInit() {

    this.Ofertaservice.getOndeFicaPorId(this.router.parent.snapshot.params['id'])
      .then( (descricao:string) => {

        this.descricao = descricao
      })

  }

}
