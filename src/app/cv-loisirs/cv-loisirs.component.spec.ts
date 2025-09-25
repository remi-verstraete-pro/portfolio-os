import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLoisirsComponent } from './cv-loisirs.component';

describe('CvLoisirsComponent', () => {
  let component: CvLoisirsComponent;
  let fixture: ComponentFixture<CvLoisirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvLoisirsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvLoisirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
