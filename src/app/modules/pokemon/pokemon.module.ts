import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import {MatTabsModule} from '@angular/material/tabs';
import {} from '@angular/material/tabs';

import { PokemonRoutingModule } from './pokemon-routing.module';
@NgModule({
  declarations: [
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatTabsModule,
    PokemonRoutingModule,
  ],
})
export class PokemonModule {}
