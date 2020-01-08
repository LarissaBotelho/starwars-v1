import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routes';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonSubmitComponent } from './components/button-submit/button-submit.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataService } from './services/data.service';
import { LoadingComponent } from './components/loading/loading.component';
import { PlanetsComponent } from './planets/planets.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { NameComponent } from './components/name/name.component';
import { ShellComponent } from './shell/shell.component';
import { ConsultaComponent } from './consulta/consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonSubmitComponent,
    CategoriesComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    PlanetsComponent,
    CharacteristicsComponent,
    NameComponent,
    ShellComponent,
    ConsultaComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
