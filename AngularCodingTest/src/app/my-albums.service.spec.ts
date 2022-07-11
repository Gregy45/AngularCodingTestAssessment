import { TestBed } from '@angular/core/testing';

import { MyAlbumsService } from './my-albums.service';

describe('MyAlbumsService', () => {
  let service: MyAlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
