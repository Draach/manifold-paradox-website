import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { VideoPlayerComponent } from './features/components/video-player/video-player.component';
import { NavigationButtonComponent } from './shared/components/header/navigation-button/navigation-button.component';
import { DiscordComponent } from './pages/discord/discord.component';
import { LandingComponent } from './pages/landing/landing.component';
import { InfoComponent } from './pages/info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoPlayerComponent,
    NavigationButtonComponent,
    DiscordComponent,
    LandingComponent,
    InfoComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
