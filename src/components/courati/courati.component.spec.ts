import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouratiComponent } from './courati.component';

describe('CouratiComponent', () => {
  let component: CouratiComponent;
  let fixture: ComponentFixture<CouratiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouratiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouratiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
