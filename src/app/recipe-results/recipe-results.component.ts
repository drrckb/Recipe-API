import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'recipe-results',
  templateUrl: './recipe-results.component.html',
  styleUrls: ['./recipe-results.component.css']
})
export class RecipeResultsComponent implements OnInit {

  recipeResults: any[] = [];

  constructor(private search: SearchService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeResults = this.search.getSearchResults();
  }

}
