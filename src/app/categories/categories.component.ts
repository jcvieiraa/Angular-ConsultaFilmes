import { Component } from '@angular/core';
import { Categoria } from 'src/models/category.models';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'cin-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories!: Categoria[];

  constructor(private service: CategoriasService){}

  ngOnInit(){
    this.service.listarCategorias().subscribe(categories => this.categories = categories);
  }

}