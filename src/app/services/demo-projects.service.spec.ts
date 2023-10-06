import { TestBed } from '@angular/core/testing';

import { DemoProjectsService } from './demo-projects.service';

describe('DemoProjectsService', () => {
  let service: DemoProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
