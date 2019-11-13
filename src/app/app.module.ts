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
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    FavoritesPageComponent,
    RecipeResultsComponent,
    RecipeInfoComponent,
    RecipeItemComponent,
    SearchCriteriaComponent,
    LoaderComponent
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
	MatRadioModule,
	MatIconModule,
	MatProgressSpinnerModule
  ],
  providers: [ ApiService, SearchService, FavoritesService, LoaderService,
			 { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
			 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
