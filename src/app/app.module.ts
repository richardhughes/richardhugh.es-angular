import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {GithubComponent} from './github/github.component';
import {HttpClientModule} from '@angular/common/http';
import { NotForkPipe } from './not-fork.pipe';
import { GithubSectionComponent } from './github-section/github-section.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';

@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent,
        PageNotFoundComponent,
        GithubComponent,
        NotForkPipe,
        GithubSectionComponent,
        ProfileSectionComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
