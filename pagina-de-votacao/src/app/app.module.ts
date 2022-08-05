import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VotacaoComponent } from './component/votacao/votacao.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarVotacaoComponent } from './component/registrar-votacao/registrar-votacao.component';
import { NavbarComponent } from './component/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    VotacaoComponent,
    RegistrarVotacaoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
