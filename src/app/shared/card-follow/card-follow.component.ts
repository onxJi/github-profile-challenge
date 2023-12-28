import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceImplementation } from '../../services/ApiServiceImplementation.service';

@Component({
  selector: 'app-card-follow',
  standalone: true,
  imports: [],
  templateUrl: './card-follow.component.html',
  providers: [{ provide: ApiServiceImplementation, useClass: ApiServiceImplementation }],
  styleUrl: './card-follow.component.css'
})
export class CardFollowComponent implements OnInit {
  @Input() titulo: string = "titulo de card";
  @Input() total: number;
  @Input() url: string;
  @Input() description: string;
  constructor(private apiService: ApiServiceImplementation) {

  }
  ngOnInit(): void {
  }
}
