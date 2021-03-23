import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { CoursModule } from './cours/cours.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoursModule,
    CoreModule,
    RouterModule.forRoot([
      
      {
        path: '', redirectTo: 'cours', pathMatch: 'full'
      }    
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
