import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AHeaderComponent } from './_subKomponente/a-header/a-header.component';
import { BSidebarComponent } from './_subKomponente/b-sidebar/b-sidebar.component';
import { CFooterComponent } from './_subKomponente/c-footer/c-footer.component';
import { ALoginComponent } from './_hauptKomponente/a-login/a-login.component';
import { BPasswortComponent } from './_hauptKomponente/b-passwort/b-passwort.component';
import { CDashboardComponent } from './_hauptKomponente/c-dashboard/c-dashboard.component';
import { EAuftragComponent } from './_hauptKomponente/e-auftrag/e-auftrag.component';
import { FAngebotComponent } from './_hauptKomponente/f-angebot/f-angebot.component';
import { GKundenComponent } from './_hauptKomponente/g-kunden/g-kunden.component';
import { HKundeComponent } from './_hauptKomponente/h-kunde/h-kunde.component';
import { IArtikelComponent } from './_hauptKomponente/i-artikel/i-artikel.component';
import { JDerArtikelComponent } from './_hauptKomponente/j-der-artikel/j-der-artikel.component';
import { KUnternehmenComponent } from './_hauptKomponente/k-unternehmen/k-unternehmen.component';
import { LEinstellungenComponent } from './_hauptKomponente/l-einstellungen/l-einstellungen.component';
import { MProfilComponent } from './_hauptKomponente/m-profil/m-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    AHeaderComponent,
    BSidebarComponent,
    CFooterComponent,
    ALoginComponent,
    BPasswortComponent,
    CDashboardComponent,
    EAuftragComponent,
    FAngebotComponent,
    GKundenComponent,
    HKundeComponent,
    IArtikelComponent,
    JDerArtikelComponent,
    KUnternehmenComponent,
    LEinstellungenComponent,
    MProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
