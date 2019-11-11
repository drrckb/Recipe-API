import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  favorites: any[];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.favorites = this.favoritesService.getFavorites();
  }

}
