import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites: any[] = []; 

  constructor() { }

  addFavorites(recipe: any): any[] {
    this.favorites.push(recipe);
    return this.favorites;
  }

  removeFavorite(recipe: any): any[] {
    let index = this.favorites.findIndex(favorite =>
      favorite.label.toLowerCase() === recipe.label.toLowerCase());
    this.favorites.splice(index, 1);
    return this.favorites;
  }

  getFavorites(): any[] {
    return this.favorites;
  }

  contains(recipe: any): boolean {
    return this.favorites.includes(recipe);
  }
}