import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Auth, createAuth } from '../models/auth';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('$user should be init with an empty "Auth" structure value', () => {
    expect(service.user$).toBeTruthy();
    expect(createAuth({})).toEqual({} as Auth);
    expect(service.user$.value).toEqual(createAuth({}));
  });
});
