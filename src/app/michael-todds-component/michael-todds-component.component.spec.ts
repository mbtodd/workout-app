import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MichaelToddsComponentComponent } from './michael-todds-component.component';

describe('MichaelToddsComponentComponent', () => {
  let component: MichaelToddsComponentComponent;
  let fixture: ComponentFixture<MichaelToddsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MichaelToddsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MichaelToddsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
