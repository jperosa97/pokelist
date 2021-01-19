import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { SharedModule } from '../../shared/shared.module';
import { FilterByName } from './pipes/filter-by-name';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PokemonListRoutingModule } from './pokemon-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    MatPaginatorModule,
    PokemonListRoutingModule
  ],
  declarations: [FilterByName, PokemonCardComponent, PokemonListComponent],
})
export class PokemonListModule {}
