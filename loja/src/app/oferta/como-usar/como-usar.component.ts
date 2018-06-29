import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ofertaService } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ ofertaService ]
})
export class ComoUsarComponent implements OnInit {

  public descricao:string = ''

  constructor( 
    
    private router: ActivatedRoute,
    
    private Ofertaservice:ofertaService
  ) { }

  ngOnInit() {
    this.Ofertaservice.getComoUsarPorId(this.router.parent.snapshot.params['id'])
      .then((descricao:string) =>{

        this.descricao = descricao
    })
  }

}
