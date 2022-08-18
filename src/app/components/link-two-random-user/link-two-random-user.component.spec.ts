import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTwoRandomUserComponent } from './link-two-random-user.component';

describe('LinkTwoRandomUserComponent', () => {
  let component: LinkTwoRandomUserComponent;
  let fixture: ComponentFixture<LinkTwoRandomUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkTwoRandomUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkTwoRandomUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
