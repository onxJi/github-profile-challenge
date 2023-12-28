import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-repo',
  standalone: true,
  imports: [],
  templateUrl: './card-repo.component.html',
  styleUrl: './card-repo.component.css'
})
export class CardRepoComponent {
  @Input() name: string;
  @Input() description: string;
  @Input() updated_at: string;
  @Input() stargazers_count: number;
  @Input() forks_count: number;
  @Input() spdx_id: string;
}
