import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from "../shared/coracao.model"

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas:number

  public coracao:Coracao[] = [

    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() {
    
   }

  ngOnInit() {
    
  }
  ngOnChanges(){

    if(this.tentativas != this.coracao.length){

      let indice = this.coracao.length - this.tentativas

      // 3 - 2 = 1
      // 3 - 1 = 2
      // 3 - 0 = 3

      this.coracao[indice -1 ].cheio=false
    }
  }
}
