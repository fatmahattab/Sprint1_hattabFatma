import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { AddFruitComponent } from './add-fruit/add-fruit.component';
import { UpdateFruitComponent } from './update-fruit/update-fruit.component';
import { RchercheParSaisonComponent } from './rcherche-par-saison/rcherche-par-saison.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { ListeSaisonsComponent } from './liste-saisons/liste-saisons.component';

const routes: Routes = [
{path :"fruits" ,component :FruitsComponent},
{path :"add-fruit" ,component :AddFruitComponent},
{ path: "", redirectTo: "fruits", pathMatch: "full" },
{path:"rchercheParSaison",component:RchercheParSaisonComponent},
{path:"rechercherParNom",component:RechercherParNomComponent},
{path: "listeSaisons", component : ListeSaisonsComponent},
{path: "updateFruit/:id", component: UpdateFruitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
