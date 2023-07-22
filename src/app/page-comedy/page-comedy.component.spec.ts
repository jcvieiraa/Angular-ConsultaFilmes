import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComedyComponent } from './page-comedy.component';

describe('PageComedyComponent', () => {
  let component: PageComedyComponent;
  let fixture: ComponentFixture<PageComedyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageComedyComponent]
    });
    fixture = TestBed.createComponent(PageComedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
