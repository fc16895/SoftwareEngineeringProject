import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSearchComponent } from './link-search.component';

describe('LinkSearchComponent', () => {
  let component: LinkSearchComponent;
  let fixture: ComponentFixture<LinkSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
