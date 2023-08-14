import { Component, Input } from '@angular/core';
import { Categoria } from 'src/models/category.models';

@Component({
  selector: 'cin-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() category!: Categoria;

}
