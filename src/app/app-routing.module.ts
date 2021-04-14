import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { MenuComponent } from'./menu/menu.component'
import { CategoryComponent } from './category/category.component'
import { PlayComponent } from './play/play.component'
import { ResultComponent } from './result/result.component'
import { EditComponent } from './edit/edit.component'

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'category', component: CategoryComponent},
  { path: 'play/:id', component: PlayComponent },
  { path: 'result/:id/:score', component: ResultComponent},
  { path: 'edit', component: EditComponent},
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
