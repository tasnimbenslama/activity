import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';
import { ToEuroConvertComponent } from './to-euro-convert/to-euro-convert.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorComponent } from './actor/actor.component';

@NgModule({
  declarations: [
    AppComponent,
    OffresEmploiComponentComponent,
    HeaderComponent,
    ArticlesComponentComponent,
    TemplateDrivenFormComponent,
    ConvertisseurComponent,
    ToEuroConvertComponent,
    ActorsComponent,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
