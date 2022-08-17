import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTwoHeroComponent } from './link-two-hero.component';

describe('LinkTwoHeroComponent', () => {
  let component: LinkTwoHeroComponent;
  let fixture: ComponentFixture<LinkTwoHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkTwoHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkTwoHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
