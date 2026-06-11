import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component/dashboard.component';
import { StudentListComponent } from './features/students/student-list/student-list.component/student-list.component';
import { StudentDetailComponent } from './features/students/student-detail/student-detail.component/student-detail.component';
import { CoursesComponent } from './features/courses/courses.component/courses.component';
import { SettingsComponent } from './features/settings/settings.component/settings.component';
import { authGuard } from './core/guards/auth-guard';
import { LoginComponent } from './features/login/login.component/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'students', component: StudentListComponent },
    { path: 'students/:id', component: StudentDetailComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'settings', component: SettingsComponent, canActivate: [authGuard] },
];
