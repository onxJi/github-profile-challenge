import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardFollowComponent } from './shared/card-follow/card-follow.component';
import { ApiServiceImplementation } from './services/ApiServiceImplementation.service';
import { IApiService } from './services/IApiService.service';
import { Profile } from './models/Profile';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardFollowComponent],
  providers: [{ provide: ApiServiceImplementation, useClass: ApiServiceImplementation }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'github-profile-challenge';
  image_avatar: string = "../assets/hero-image-github-profile.png";
  profile: Profile;
  constructor(private apiService: ApiServiceImplementation) {

  }
  async ngOnInit(): Promise<void> {
    this.profile = await this.apiService.getProfileContent();
    console.log(this.profile)
  }

}
