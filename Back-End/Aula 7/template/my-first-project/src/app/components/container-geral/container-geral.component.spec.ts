import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerGeralComponent } from './container-geral.component';

describe('ContainerGeralComponent', () => {
  let component: ContainerGeralComponent;
  let fixture: ComponentFixture<ContainerGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerGeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
