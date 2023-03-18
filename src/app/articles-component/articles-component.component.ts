import { Component } from '@angular/core';
import {  Article }   from '../Models/article';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent {
    titre="Les articles du jour";
    ListArticle:Article[]=[
   {titre:'Le championnat du monde',contenu:'Le champion du monde de cette année est ',auteur:'Med Taher', date:'12/12/2005' ,categorie:7},
   {titre:'Les nouveaux parents',contenu:'Les nouveaux parents ',auteur:'Ahmed Said', date:'11/11/2018', categorie:1},
   {titre:'Comment écrire votre CV',contenu:'Pour réussir 4 décraucher un emploi..',auteur:'Marie Elsa',date:'02/04/2017' ,categorie:7}]

   nombreArticles: number;
  limit: number;


 

  constructor() {
    this.nombreArticles = this.ListArticle.length;
    this.limit=this.nombreArticles+1;
  }

  updateLimit() {
  this.limit=this.limit;
  }
}
