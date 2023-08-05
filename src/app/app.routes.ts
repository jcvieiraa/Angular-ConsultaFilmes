import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CategoriesComponent } from "./categories/categories.component";
import { HomeComponent } from "./home/home.component";
import { PageActionComponent } from "./page-action/page-action.component";
import { PageComedyComponent } from "./page-comedy/page-comedy.component";
import { PageHorrorComponent } from "./page-horror/page-horror.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'categorias', component: CategoriesComponent},
    {path: 'sobre', component: AboutComponent},
    {path: 'acao', component: PageActionComponent},
    {path: 'comedia', component: PageComedyComponent},
    {path: 'terror', component: PageHorrorComponent}
];