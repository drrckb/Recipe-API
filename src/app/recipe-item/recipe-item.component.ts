import { Component, OnInit, Input } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: any;

  constructor(private favorites: FavoritesService, private router: Router) { }

  ngOnInit() {
  }

  goToRecipeInfo() {
    this.router.navigate(["recipe", this.recipe.label]);
  }

  toggleFavorite() {
    if (this.favorites.contains(this.recipe)) {
      this.favorites.removeFavorite(this.recipe);
    } else {
      this.favorites.addFavorites(this.recipe);
    }
  }

}
