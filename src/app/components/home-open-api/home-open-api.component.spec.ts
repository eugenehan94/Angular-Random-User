import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOpenApiComponent } from './home-open-api.component';

describe('HomeOpenApiComponent', () => {
  let component: HomeOpenApiComponent;
  let fixture: ComponentFixture<HomeOpenApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOpenApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOpenApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
