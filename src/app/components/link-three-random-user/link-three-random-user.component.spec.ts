import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkThreeRandomUserComponent } from './link-three-random-user.component';

describe('LinkThreeRandomUserComponent', () => {
  let component: LinkThreeRandomUserComponent;
  let fixture: ComponentFixture<LinkThreeRandomUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkThreeRandomUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkThreeRandomUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
