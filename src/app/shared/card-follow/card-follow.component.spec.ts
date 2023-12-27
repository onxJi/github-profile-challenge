import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFollowComponent } from './card-follow.component';

describe('CardFollowComponent', () => {
  let component: CardFollowComponent;
  let fixture: ComponentFixture<CardFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFollowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
