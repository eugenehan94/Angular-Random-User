import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTwoOpenApiComponent } from './link-two-open-api.component';

describe('LinkTwoOpenApiComponent', () => {
  let component: LinkTwoOpenApiComponent;
  let fixture: ComponentFixture<LinkTwoOpenApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkTwoOpenApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkTwoOpenApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
