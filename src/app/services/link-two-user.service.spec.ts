import { TestBed } from '@angular/core/testing';

import { LinkTwoUserService } from './link-two-user.service';

describe('LinkTwoUserService', () => {
  let service: LinkTwoUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkTwoUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
