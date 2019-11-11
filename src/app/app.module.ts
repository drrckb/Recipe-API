import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { RecipeResultsComponent } from './recipe-results/recipe-results.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { SearchService } from './search.service';
import { FavoritesService } from './favorites.service';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesPageComponent,
    RecipeResultsComponent,
    RecipeInfoComponent,
    RecipeItemComponent,
    SearchCriteriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSliderModule,
    MatButtonModule,
	MatSelectModule,
	MatCardModule,
	MatRippleModule,
	MatDialogModule,
	MatToolbarModule,
	MatListModule,
	MatRadioModule
  ],
  providers: [ ApiService, SearchService, FavoritesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
