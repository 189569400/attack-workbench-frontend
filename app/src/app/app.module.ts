import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppRoutingStixModule } from "./app-routing-stix.module"
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResourcesDrawerComponent } from './components/resources-drawer/resources-drawer.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatPaginatorModule } from '@angular/material/paginator';

import { BreadcrumbModule } from "angular-crumbs";
import { MaterialFileInputModule } from 'ngx-material-file-input';

import { StixListComponent } from './components/stix/stix-list/stix-list.component';
import { StixListCardsComponent } from './components/stix/stix-list/stix-list-cards/stix-list-cards.component';
import { StixCardComponent } from './components/stix/stix-list/stix-list-cards/cards/stix-card/stix-card.component';
import { RelationshipCardComponent } from './components/stix/stix-list/stix-list-cards/cards/relationship-card/relationship-card.component';

import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { HelpPageComponent } from './views/help-page/help-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ResourcesTramComponent } from './components/resources-drawer/drawers/resources-tram/resources-tram.component';
import { ResourcesSearchComponent } from './components/resources-drawer/drawers/resources-search/resources-search.component';

import { CollectionListComponent } from './views/stix/collection/collection-list/collection-list.component';
import { CollectionViewComponent } from './views/stix/collection/collection-view/collection-view.component';
import { CollectionImportComponent } from './views/stix/collection/collection-import/collection-import.component';
import { CollectionExportComponent } from './views/stix/collection/collection-export/collection-export.component';

import { GroupViewComponent } from './views/stix/group/group-view/group-view.component';
import { GroupListComponent } from './views/stix/group/group-list/group-list.component';
import { GroupEditComponent } from './views/stix/group/group-edit/group-edit.component';

import { MatrixViewComponent } from './views/stix/matrix/matrix-view/matrix-view.component';
import { MatrixEditComponent } from './views/stix/matrix/matrix-edit/matrix-edit.component';
import { MatrixListComponent } from './views/stix/matrix/matrix-list/matrix-list.component';

import { MitigationListComponent } from './views/stix/mitigation/mitigation-list/mitigation-list.component';
import { MitigationViewComponent } from './views/stix/mitigation/mitigation-view/mitigation-view.component';
import { MitigationEditComponent } from './views/stix/mitigation/mitigation-edit/mitigation-edit.component';

import { SoftwareViewComponent } from './views/stix/software/software-view/software-view.component';
import { SoftwareListComponent } from './views/stix/software/software-list/software-list.component';
import { SoftwareEditComponent } from './views/stix/software/software-edit/software-edit.component';

import { TacticViewComponent } from './views/stix/tactic/tactic-view/tactic-view.component';
import { TacticListComponent } from './views/stix/tactic/tactic-list/tactic-list.component';
import { TacticEditComponent } from './views/stix/tactic/tactic-edit/tactic-edit.component';

import { TechniqueViewComponent } from './views/stix/technique/technique-view/technique-view.component';
import { TechniqueListComponent } from './views/stix/technique/technique-list/technique-list.component';
import { TechniqueEditComponent } from './views/stix/technique/technique-edit/technique-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
    LoadingOverlayComponent,
    
    LandingPageComponent,
    HelpPageComponent,
    
    StixListComponent,
    StixListCardsComponent,
    StixCardComponent,
    RelationshipCardComponent,
    
    ToolbarComponent,
    
    ResourcesDrawerComponent,
    ResourcesTramComponent,
    ResourcesSearchComponent,

    CollectionListComponent,
    CollectionViewComponent,
    CollectionImportComponent,
    CollectionExportComponent,

    GroupViewComponent,
    GroupListComponent,
    GroupEditComponent,

    MatrixViewComponent,
    MatrixEditComponent,
    MatrixListComponent,

    MitigationListComponent,
    MitigationViewComponent,
    MitigationEditComponent,

    SoftwareViewComponent,
    SoftwareListComponent,
    SoftwareEditComponent,

    TacticViewComponent,
    TacticListComponent,
    TacticEditComponent,

    TechniqueViewComponent,
    TechniqueListComponent,
    TechniqueEditComponent,
  ],
  imports: [
    BreadcrumbModule,
    MaterialFileInputModule,
    
    BrowserModule,

    AppRoutingModule,
    AppRoutingStixModule,
    HttpClientModule,
    
    BrowserAnimationsModule,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatTreeModule,
    MatPaginatorModule,
    
    OverlayModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatTreeModule,
    MatPaginatorModule,

    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }