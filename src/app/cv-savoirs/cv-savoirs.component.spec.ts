import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSavoirsComponent } from './cv-savoirs.component';

describe('CvSavoirsComponent', () => {
  let component: CvSavoirsComponent;
  let fixture: ComponentFixture<CvSavoirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvSavoirsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvSavoirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
