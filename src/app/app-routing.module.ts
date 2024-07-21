import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { StudentComponent } from './student/student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  {path:'',
    component:HomeComponent
  },
  {
    path:'seller-auth',
    component:SellerAuthComponent
  },
  {
    path:"seller-home",
    component:SellerHomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"student",
    component:StudentComponent
  },
  {
    path:"edit-student/:id",
    component:EditStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
