import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { MenuComponent } from'./menu/menu.component'
import { CategoryComponent } from './category/category.component'
import { PlayComponent } from './play/play.component'
import { ResultComponent } from './result/result.component'
import { EditComponent } from './edit/edit.component'
import { DetailCategoryComponent } from './detailCategory/detailCategory.component'
import { DetailQuestionComponent } from './detailQuestion/detailQuestion.component'
import { RenameComponent } from'./rename/rename.component'
import { ReAnswerComponent} from './reanswer/reanswer.component'
import { HistoryComponent } from './history/history.component'

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'category', component: CategoryComponent},
  { path: 'play/:id', component: PlayComponent },
  { path: 'result/:id/:score', component: ResultComponent},
  { path: 'edit', component: EditComponent},
  { path: 'detail/:id', component : DetailCategoryComponent},
  { path: 'detail/:id/:questionId', component : DetailQuestionComponent},
  { path: 'rename/:id/:questionId/:choiceId', component : RenameComponent},
  { path: 'reAnswer/:id/:questionId', component: ReAnswerComponent},
  { path: 'log' , component:HistoryComponent}
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
