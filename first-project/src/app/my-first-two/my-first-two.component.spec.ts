import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstTwoComponent } from './my-first-two.component';

describe('MyFirstTwoComponent', () => {
  let component: MyFirstTwoComponent;
  let fixture: ComponentFixture<MyFirstTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
