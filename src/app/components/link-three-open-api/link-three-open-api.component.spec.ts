import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkThreeOpenApiComponent } from './link-three-open-api.component';

describe('LinkThreeOpenApiComponent', () => {
  let component: LinkThreeOpenApiComponent;
  let fixture: ComponentFixture<LinkThreeOpenApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkThreeOpenApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkThreeOpenApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
