import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRandomUserComponent } from './home-random-user.component';

describe('HomeRandomUserComponent', () => {
  let component: HomeRandomUserComponent;
  let fixture: ComponentFixture<HomeRandomUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRandomUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRandomUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
