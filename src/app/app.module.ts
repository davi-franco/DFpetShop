import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RacaoDogComponent } from './racao-dog/racao-dog.component';
import { RacaoCatComponent } from './racao-cat/racao-cat.component';
import { RacaoPassarinhoComponent } from './racao-passarinho/racao-passarinho.component';
import { RacaoPeixeComponent } from './racao-peixe/racao-peixe.component';
import { AperitivosPetComponent } from './aperitivos-pet/aperitivos-pet.component';
import { ColeirasPetComponent } from './coleiras-pet/coleiras-pet.component';
import { CasinhaPetComponent } from './casinha-pet/casinha-pet.component';
import { ShampooPetComponent } from './shampoo-pet/shampoo-pet.component';
import { RoupinhasPetComponent } from './roupinhas-pet/roupinhas-pet.component';
import { DiversosOutrosComponent } from './diversos-outros/diversos-outros.component';

@NgModule({
  declarations: [
    AppComponent,
    RacaoDogComponent,
    RacaoCatComponent,
    RacaoPassarinhoComponent,
    RacaoPeixeComponent,
    AperitivosPetComponent,
    ColeirasPetComponent,
    CasinhaPetComponent,
    ShampooPetComponent,
    RoupinhasPetComponent,
    DiversosOutrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
