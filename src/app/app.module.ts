import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './categories/category/category.component';
import { PageActionComponent } from './page-action/page-action.component';
import { PageHorrorComponent } from './page-horror/page-horror.component';
import { PageComedyComponent } from './page-comedy/page-comedy.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CategoriesComponent,
    AboutComponent,
    CategoryComponent,
    PageActionComponent,
    PageHorrorComponent,
    PageComedyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
