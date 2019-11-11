import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchInterface } from './search-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apikey: string = "30748527d5cb18fb40c29a614c16c1d1";
  appid: string = "f525747a";
  apiUrl: string = "https://api.edamam.com/search";

  constructor(private http: HttpClient) { }

  getData(options: SearchInterface) {
    
    let searchUrl = this.apiUrl + `?q=${options.searchWord}&app_id=${this.appid}&app_key=${this.apikey}&to=25`;

    
    if (options.dietaryRestriction) {
      searchUrl += `&health=${options.dietaryRestriction}`;
    }

   
	  if (options.minCalories) {
       searchUrl += `&calories=${options.minCalories}`;
	  }
//    if (options.minCalories || options.maxCalories) {
//      let caloriesUrl = "&calories=";
//
//      if (options.minCalories) { 
//        caloriesUrl += options.minCalories.toString();
//
//        if (!options.maxCalories) {
//          caloriesUrl += "+";
//        } else {
//          caloriesUrl += "-"; 
//        }
//      }
//
//      if (options.maxCalories) {
//        caloriesUrl += options.maxCalories.toString();
//      }
//
//      searchUrl += caloriesUrl;
//    }


    return this.http.get(searchUrl);
  }
}