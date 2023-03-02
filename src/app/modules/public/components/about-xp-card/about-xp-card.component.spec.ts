import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutXpCardComponent } from './about-xp-card.component';

describe('AboutXpCardComponent', () => {
  let component: AboutXpCardComponent;
  let fixture: ComponentFixture<AboutXpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutXpCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutXpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
