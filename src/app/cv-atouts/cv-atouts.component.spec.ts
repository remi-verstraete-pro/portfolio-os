import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAtoutsComponent } from './cv-atouts.component';

describe('CvAtoutsComponent', () => {
  let component: CvAtoutsComponent;
  let fixture: ComponentFixture<CvAtoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvAtoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvAtoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
