import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFourRandomUserComponent } from './link-four-random-user.component';

describe('LinkFourRandomUserComponent', () => {
  let component: LinkFourRandomUserComponent;
  let fixture: ComponentFixture<LinkFourRandomUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkFourRandomUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkFourRandomUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
