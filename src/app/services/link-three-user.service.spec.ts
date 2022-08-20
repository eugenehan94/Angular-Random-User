import { TestBed } from '@angular/core/testing';

import { LinkThreeUserService } from './link-three-user.service';

describe('LinkThreeUserService', () => {
  let service: LinkThreeUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkThreeUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
