import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { capitalize } from 'src/app/shared/helpers/capitalize';

import { TypesEnum} from '../../../../shared/enums/color.enum';
import { Pokemon } from '../../../../shared/models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { fade } from '../../../../shared/animations/fade';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  animations: [fade],
})
export class PokemonDetailComponent implements OnInit {
  pokemonId!: number;
  pokemon$!: Observable<Pokemon>;
  pokemonDetails: Pokemon;
  typeEnum = TypesEnum;
  data: any[] = [];
  options: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonId = this.activatedRoute.snapshot.params.id;
    if (this.pokemonId) {
      this.pokemon$ = this.pokemonService
        .getPokemonWithId(this.pokemonId)
        
      this.pokemonDetails = this.pokemonService.getCurrentPokemon(
        Number(this.pokemonId)
      );
    }
    
  }
  public getTypeColour(type: string) {
    if (type) {
      return TypesEnum[type];
    }
  }
}
