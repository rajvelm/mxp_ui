import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesuploadComponent } from './feesupload.component';

describe('FeesuploadComponent', () => {
  let component: FeesuploadComponent;
  let fixture: ComponentFixture<FeesuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
