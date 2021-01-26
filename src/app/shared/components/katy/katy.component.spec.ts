import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatyComponent } from './katy.component';

describe('KatyComponent', () => {
  let component: KatyComponent;
  let fixture: ComponentFixture<KatyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
