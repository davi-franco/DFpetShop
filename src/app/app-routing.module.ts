import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RacaoDogComponent} from './racao-dog/racao-dog.component';
import {RacaoCatComponent} from './racao-cat/racao-cat.component';
import {RacaoPeixeComponent} from './racao-peixe/racao-peixe.component';
import { RacaoPassarinhoComponent } from './racao-passarinho/racao-passarinho.component';
import { AperitivosPetComponent } from './aperitivos-pet/aperitivos-pet.component';
import { CasinhaPetComponent } from './casinha-pet/casinha-pet.component';
import { ColeirasPetComponent } from './coleiras-pet/coleiras-pet.component';
import { DiversosOutrosComponent } from './diversos-outros/diversos-outros.component';
import { RoupinhasPetComponent } from './roupinhas-pet/roupinhas-pet.component';
import { ShampooPetComponent } from './shampoo-pet/shampoo-pet.component';

const routes: Routes = [
  {path:'racaoDog', component: RacaoDogComponent},{path:'racaoCat', component: RacaoDogComponent},{path: 'racaoPeixe', component: RacaoDogComponent},
{path: 'racaoPassarinho', component: RacaoDogComponent},{path: 'aperitivosPet', component: AperitivosPetComponent}, {path:'casinhaPet', component: CasinhaPetComponent},
{path: 'coleirasPet', component: ColeirasPetComponent},{path: 'diversosOutros', component: DiversosOutrosComponent},
{path:'roupinhasPet', component: RoupinhasPetComponent},{ path: 'shampooPet', component: ShampooPetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
