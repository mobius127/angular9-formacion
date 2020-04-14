import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule, Injector, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LOCATION_INITIALIZED } from '@angular/common';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { DataViewModule } from 'primeng/dataview';
import { ToastModule } from 'primeng/toast';

import { MyMenuComponent } from './components/shared/my-menu/my-menu.component';
import { PersonnelComponent } from './components/personnel/personnel.component';
import { MessageService } from 'primeng/api';
import { HomeComponent } from './components/home/home.component';
import { StarShptsComponent } from './components/star-shpts/star-shpts.component';

export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

export function AppInitializerFactory(
  injector: Injector,
  translate: TranslateService
): any {
  return () =>
    new Promise<any>((resolve: any) => {
      const locationInitialized = injector.get(
        LOCATION_INITIALIZED,
        Promise.resolve(null)
      );

      locationInitialized.then(() => {
        const browserLang = translate.getBrowserLang();

        translate.addLangs(['es', 'en']);
        translate.setDefaultLang('es');
        translate
          .use(browserLang.match(/es|en/) ? browserLang : 'es')
          .subscribe(
            () => {
              // Send some logs?
            },
            err => {
              // Send some logs?
            },
            () => {
              resolve(null);
            }
          );
      });
    });
}

@NgModule({
  declarations: [
    AppComponent,
    MyMenuComponent,
    PersonnelComponent,
    HomeComponent,
    StarShptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MenuModule,
    DataViewModule,
    ToastModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  providers: [
    MessageService,
    {
      provide: APP_INITIALIZER,
      useFactory: AppInitializerFactory,
      deps: [Injector, TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
