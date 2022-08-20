import { TestBed } from '@angular/core/testing';

import { LinkFourUserService } from './link-four--user.service';

describe('LinkFourUserService', () => {
  let service: LinkFourUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkFourUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
