import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiveruploadComponent } from './waiverupload.component';

describe('WaiveruploadComponent', () => {
  let component: WaiveruploadComponent;
  let fixture: ComponentFixture<WaiveruploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiveruploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiveruploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
