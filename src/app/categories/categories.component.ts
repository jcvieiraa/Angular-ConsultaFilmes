import { Component } from '@angular/core';
import { Categoria } from 'src/models/models';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: Categoria[] = [
    { id: '1', title: 'Ação', img: '/assets/img/action2.png', page: '/acao'},
    { id: '2', title: 'Terror', img: '/assets/img/horror.png', page: '/terror'},
    { id: '3', title: 'Comedia', img: '/assets/img/comedy.png', page: '/comedia'},
    { id: '4', title: 'Anime', img: '/assets/img/anime.png', page: '/anime'}
  ];
}
