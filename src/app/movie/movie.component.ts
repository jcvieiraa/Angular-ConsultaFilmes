import { Component } from '@angular/core';
import { Filme } from 'src/models/movie.model';

@Component({
  selector: 'cin-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

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

  selectedCategoryMovies: Filme[] = [];

  selectCategory(categoryId: string) {
    this.selectedCategoryMovies = this.movies.filter(movie => movie.categoryId === categoryId);
  }

}
