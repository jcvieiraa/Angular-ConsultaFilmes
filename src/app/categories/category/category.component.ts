import { Component } from '@angular/core';

@Component({
  selector: 'cin-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {
  categories: string[] = ['Acao', 'Comedia', 'Terror/Suspense', 'Adulto', 'Anime'];
  selectedCategory: string | undefined;
}
