import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { ListUserItemComponent } from './components/list-user-item/list-user-item.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FooterComponent,
    DirectoryComponent,
    ListUserItemComponent,
    LoadingComponent,
    SearchFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
