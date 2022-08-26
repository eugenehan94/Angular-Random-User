import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFourOpenApiComponent } from './link-four-open-api.component';

describe('LinkFourOpenApiComponent', () => {
  let component: LinkFourOpenApiComponent;
  let fixture: ComponentFixture<LinkFourOpenApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkFourOpenApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkFourOpenApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
