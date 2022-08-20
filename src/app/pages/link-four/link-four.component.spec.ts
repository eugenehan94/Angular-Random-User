import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFourComponent } from './link-four.component';

describe('LinkFourComponent', () => {
  let component: LinkFourComponent;
  let fixture: ComponentFixture<LinkFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
