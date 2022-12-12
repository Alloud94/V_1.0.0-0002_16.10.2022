// Standard Importe
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Erweiterte Importe
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

// Routing und App Component Import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Sub Komponenten Import
import { AHeaderComponent } from './_subKomponente/a-header/a-header.component';
import { BSidebarComponent } from './_subKomponente/b-sidebar/b-sidebar.component';
import { CFooterComponent } from './_subKomponente/c-footer/c-footer.component';

// Haupt Komponenten Import
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
import { NProjekteComponent } from './_hauptKomponente/n-projekte/n-projekte.component';

// Popup Komponenten Import
import { GenerateProjektComponent } from './_popupKomponente/generate-projekt/generate-projekt.component';
import { GenerateKundeComponent } from './_popupKomponente/generate-kunde/generate-kunde.component';
import { GenerateArtikelComponent } from './_popupKomponente/generate-artikel/generate-artikel.component';
import { GenerateMitarbeiterComponent } from './_popupKomponente/generate-mitarbeiter/generate-mitarbeiter.component';
import { MeilensteinComponent } from './_popupKomponente/meilenstein/meilenstein.component';
import { BudgetComponent } from './_popupKomponente/budget/budget.component';
import { StundenComponent } from './_popupKomponente/stunden/stunden.component';
import { PositionComponent } from './_popupKomponente/position/position.component';
import { TextpositionComponent } from './_popupKomponente/textposition/textposition.component';
import { AnsprechpartnerComponent } from './_popupKomponente/ansprechpartner/ansprechpartner.component';
import { KundendatenComponent } from './_popupKomponente/kundendaten/kundendaten.component';
import { RechnungsadresseComponent } from './_popupKomponente/rechnungsadresse/rechnungsadresse.component';
import { NotizenComponent } from './_popupKomponente/notizen/notizen.component';
import { KonditionenComponent } from './_popupKomponente/konditionen/konditionen.component';
import { BelegeComponent } from './_popupKomponente/belege/belege.component';
import { MetainformationenComponent } from './_popupKomponente/metainformationen/metainformationen.component';
import { JahresabschlussComponent } from './_popupKomponente/jahresabschluss/jahresabschluss.component';
import { StatistikenComponent } from './_popupKomponente/statistiken/statistiken.component';
import { LogoComponent } from './_popupKomponente/logo/logo.component';
import { EinstellungenComponent } from './_popupKomponente/einstellungen/einstellungen.component';
import { LoeschenComponent } from './_popupKomponente/loeschen/loeschen.component';
import { AdminComponent } from './_popupKomponente/admin/admin.component';
import { ZahlungskonditionenComponent } from './_popupKomponente/zahlungskonditionen/zahlungskonditionen.component';
import { UmwandelnComponent } from './_popupKomponente/umwandeln/umwandeln.component';
import { ProjektKundendatenComponent } from './_popupKomponente/projekt-kundendaten/projekt-kundendaten.component';
import { GruppenComponent } from './_popupKomponente/gruppen/gruppen.component';
import { PositionArtikelComponent } from './_popupKomponente/position-artikel/position-artikel.component';
import { KalkulationComponent } from './_popupKomponente/kalkulation/kalkulation.component';
import { AuftragAbschliessenComponent } from './_popupKomponente/auftrag-abschliessen/auftrag-abschliessen.component';
import { AuthenticationGuard } from './_guard/authentication.guard';
import { LoadingSpinnerComponent } from './_others/loading-spinner/loading-spinner.component';

const routes: Routes = [
  {
    path: '', 
    component: CDashboardComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'projekte', 
    component: NProjekteComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'projekte/auftrag/:id', 
    component: EAuftragComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'projekte/angebot/:id', 
    component: FAngebotComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'kunden', 
    component: GKundenComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'kunden/kunde/:id', 
    component: HKundeComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'artikel', 
    component: IArtikelComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'artikel/der-artikel/:id', 
    component: JDerArtikelComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'unternehmen', 
    component: KUnternehmenComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'profil', 
    component: MProfilComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'einstellungen', 
    component: LEinstellungenComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'login', component: ALoginComponent
  },
  {
    path: 'passwort', component: BPasswortComponent
  }

];

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
    MProfilComponent,
    NProjekteComponent,
    GenerateProjektComponent,
    GenerateKundeComponent,
    GenerateArtikelComponent,
    GenerateMitarbeiterComponent,
    MeilensteinComponent,
    BudgetComponent,
    StundenComponent,
    PositionComponent,
    TextpositionComponent,
    AnsprechpartnerComponent,
    KundendatenComponent,
    RechnungsadresseComponent,
    NotizenComponent,
    KonditionenComponent,
    BelegeComponent,
    MetainformationenComponent,
    JahresabschlussComponent,
    StatistikenComponent,
    LogoComponent,
    EinstellungenComponent,
    LoeschenComponent,
    AdminComponent,
    ZahlungskonditionenComponent,
    UmwandelnComponent,
    ProjektKundendatenComponent,
    GruppenComponent,
    PositionArtikelComponent,
    KalkulationComponent,
    AuftragAbschliessenComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  entryComponents: [GenerateProjektComponent]
})
export class AppModule { }
