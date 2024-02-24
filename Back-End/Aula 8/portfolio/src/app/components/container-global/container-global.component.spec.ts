import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerGlobalComponent } from './container-global.component';

describe('ContainerGlobalComponent', () => {
  let component: ContainerGlobalComponent;
  let fixture: ComponentFixture<ContainerGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
