import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMeComponent } from './side-me.component';

describe('SideMeComponent', () => {
  let component: SideMeComponent;
  let fixture: ComponentFixture<SideMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
