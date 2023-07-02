import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderComponent } from './components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ServicesComponent } from './pages/services/services.component';
import { MatButtonModule } from '@angular/material/button';
import { BookforconsultationComponent } from './pages/bookforconsultation/bookforconsultation.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    ServicesComponent,
    BookforconsultationComponent,
    FooterComponent,
  ],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
        },
        {
          path: 'about',
          component: AboutComponent,
        },
        {
          path: 'services',
          component: ServicesComponent,
        },
        {
          path: 'blog',
          component: BlogComponent,
        },
        {
          path: 'contact',
          component: ContactComponent,
        },
        {
          path: 'book-for-consultation',
          component: BookforconsultationComponent,
        },
      ],
      { onSameUrlNavigation: 'reload' }
    ),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
