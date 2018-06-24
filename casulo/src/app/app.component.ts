import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public emAndamento:boolean = true

  public tipoDeEncerramento:string

  public encerraJogo(tipo:string):void{

    console.log(tipo)

    this.emAndamento = false

    this.tipoDeEncerramento = tipo

  }
  public reinicarJogo():void{

    this.emAndamento = true

    this.tipoDeEncerramento = undefined
  }

}
