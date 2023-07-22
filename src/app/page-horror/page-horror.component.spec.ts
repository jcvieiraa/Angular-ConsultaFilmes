import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHorrorComponent } from './page-horror.component';

describe('PageHorrorComponent', () => {
  let component: PageHorrorComponent;
  let fixture: ComponentFixture<PageHorrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageHorrorComponent]
    });
    fixture = TestBed.createComponent(PageHorrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
