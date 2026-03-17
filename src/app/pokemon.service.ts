import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
private http = inject(HttpClient);
private apiURL = 'https://localhost:3000/api/pokemon';
//Reactive state
pokemonList = signal<any[]>([]);

savePokemon(data: any) {
  return this.http.post(this.apiURL, data);
}
//method used for fetching data
fetchPokemon(){
  this.http.get<any[]>(this.apiURL).subscribe(data => this.pokemonList.set(data));
}

}
