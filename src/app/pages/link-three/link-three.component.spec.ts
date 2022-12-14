import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkThreeComponent } from './link-three.component';

describe('LinkThreeComponent', () => {
  let component: LinkThreeComponent;
  let fixture: ComponentFixture<LinkThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
