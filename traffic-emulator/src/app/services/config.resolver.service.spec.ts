import { TestBed, inject } from '@angular/core/testing';

import { Config.ResolverService } from './config.resolver.service';

describe('Config.ResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Config.ResolverService]
    });
  });

  it('should be created', inject([Config.ResolverService], (service: Config.ResolverService) => {
    expect(service).toBeTruthy();
  }));
});
