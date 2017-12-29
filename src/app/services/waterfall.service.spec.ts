import { TestBed, inject } from '@angular/core/testing';

import { WaterfallService } from './waterfall.service';

describe('WaterfallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaterfallService]
    });
  });

  it('should be created', inject([WaterfallService], (service: WaterfallService) => {
    expect(service).toBeTruthy();
  }));
});
