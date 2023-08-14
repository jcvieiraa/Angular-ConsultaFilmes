import { Component } from '@angular/core';
import { Categoria } from 'src/models/category.models';
import { Filme } from 'src/models/movie.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: Categoria[] = [
    { id: '1', title: 'Ação', img: '/assets/img/action2.png', page: '/movie' },
    { id: '2', title: 'Terror', img: '/assets/img/horror.png', page: '/movie' },
    { id: '3', title: 'Comedia', img: '/assets/img/comedy.png', page: '/movie' },
    { id: '4', title: 'Anime', img: '/assets/img/anime.png', page: '/movie' }
  ];

    movies: Filme[] = [
      { id: '1', name: 'The Flash', img: '/assets/img/flash2023.jpg', categoryId: '1' },
      { id: '2', name: 'Esquema de Risco: Operação Fortune', img: '/assets/img/esquemaderiscooperacaofortune.jpg', categoryId: '1' },
      { id: '3', name: 'Sisu', img: '/assets/img/sisu2023.jpg', categoryId: '1' },
      { id: '4', name: 'A Morte do Demônio - A Ascensão', img: '/assets/img/amortedodemonioaascensao.jpg', categoryId: '2' },
      { id: '5', name: 'Bird Box Barcelona', img: '/assets/img/birdboxbarcelona.jpg', categoryId: '2' },
      { id: '6', name: 'Vênus', img: '/assets/img/venus2022.jpg', categoryId: '2' },
      { id: '7', name: 'De Repente 70', img: 'derepente70.jpg', categoryId: '3' },
      { id: '8', name: 'Super Mario Bros', img: '/assets/img/supermariobros.jpg', categoryId: '3' },
      { id: '9', name: 'Misterio Em Paris', img: '/assets/img/misterioemparis.jpg', categoryId: '3' }
    ];
  
}
