import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TeantativasComponent } from './teantativas/teantativas.component';
import { ProgressoComponent } from './progresso/progresso.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    RodapeComponent,
    TeantativasComponent,
    ProgressoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
