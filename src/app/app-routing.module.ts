import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RecipeResultsComponent } from './recipe-results/recipe-results.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';

const routes: Routes = [
  {path: "", redirectTo: "/search", pathMatch: "full"},
  {path: "search", component: SearchCriteriaComponent},
  {path: "recipe-results", component: RecipeResultsComponent},
  {path: "favorites", component: FavoritesPageComponent},
  {path: "recipe/:name", component: RecipeInfoComponent},
  {path: "**", redirectTo: "/search"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
