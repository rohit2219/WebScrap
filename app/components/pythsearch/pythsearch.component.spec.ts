import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythsearchComponent } from './pythsearch.component';

describe('PythsearchComponent', () => {
  let component: PythsearchComponent;
  let fixture: ComponentFixture<PythsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
