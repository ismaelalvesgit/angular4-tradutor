import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FRASES } from './frases-mock'
import { Frase } from '../shared/frases.model'
 
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public titulo:string = "Traduza a Frase:"

  public Frases:Frase[] = FRASES

  public RodadaFrase:Frase

  public indice:number = 0

  public resposta:string = ""

  public progresso:number = 0

  public tentativas:number = 3

  @Output() public encerraJogo:EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizarFrase()
    console.log(this.Frases)
  }

  ngOnInit() {
  }
  public getResposta(resposta:Event):void{

    this.resposta = (<HTMLInputElement>resposta.target).value

    console.log(this.resposta)
  }
  public verificarResposta():void{

    if(this.RodadaFrase.frasePt == this.resposta){

      this.indice ++

      this.progresso = this.progresso + ( 100 / this.Frases.length )

      if( this.indice == this.Frases.length){

        this.encerraJogo.emit('vitoria')
      }

      this.atualizarFrase()

    }else{

      this.tentativas --

      if(this.tentativas == -1){

        this.encerraJogo.emit('derrota')
      }

    }

  }
  public atualizarFrase():void{
    
    this.RodadaFrase = this.Frases[this.indice]
  
    this.resposta = ''
  }
}
