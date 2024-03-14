import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmMailComponent } from './components/authentication/confirm-mail/confirm-mail.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { LockScreenComponent } from './components/authentication/lock-screen/lock-screen.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { SigninSignupComponent } from './components/authentication/signin-signup/signin-signup.component';
import { InternalErrorComponent } from './components/common/internal-error/internal-error.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { BlankPageComponent } from './components/pages/blank-page/blank-page.component';
import { MenusComponent } from './components/ui-kit/menus/menus.component';
import { ProgressBarComponent } from './components/ui-kit/progress-bar/progress-bar.component';
import { SidenavComponent } from './components/ui-kit/sidenav/sidenav.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';

const routes: Routes = [
    {path: '', component: BlankPageComponent},
    {path: 'ui-kit/menus', component: MenusComponent},
    {path: 'ui-kit/progress-bar', component: ProgressBarComponent},
    {path: 'ui-kit/sidenav', component: SidenavComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'blank-page', component: BlankPageComponent},
    {path: 'error-500', component: InternalErrorComponent},
    {path: 'authentication/forgot-password', component: ForgotPasswordComponent},
    {path: 'authentication/reset-password', component: ResetPasswordComponent},
    {path: 'authentication/login', component: LoginComponent},
    {path: 'authentication/register', component: RegisterComponent},
    {path: 'authentication/signin-signup', component: SigninSignupComponent},
    {path: 'authentication/logout', component: LogoutComponent},
    {path: 'authentication/confirm-mail', component: ConfirmMailComponent},
    {path: 'authentication/lock-screen', component: LockScreenComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }