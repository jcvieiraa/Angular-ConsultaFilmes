import { Component } from '@angular/core';
import { Categoria } from 'src/models/category.models';
import { CategoriasService } from './categories.service';

@Component({
  selector: 'cin-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categorias!: Categoria[];

  constructor(private service: CategoriasService){}

  ngOnInit(){
    this.service.listarCategorias().subscribe(categorias => this.categorias = categorias);
  }

}