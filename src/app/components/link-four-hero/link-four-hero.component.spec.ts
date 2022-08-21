import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFourHeroComponent } from './link-four-hero.component';

describe('LinkFourHeroComponent', () => {
  let component: LinkFourHeroComponent;
  let fixture: ComponentFixture<LinkFourHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkFourHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkFourHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
