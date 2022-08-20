import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkThreeHeroComponent } from './link-three-hero.component';

describe('LinkThreeHeroComponent', () => {
  let component: LinkThreeHeroComponent;
  let fixture: ComponentFixture<LinkThreeHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkThreeHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkThreeHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
