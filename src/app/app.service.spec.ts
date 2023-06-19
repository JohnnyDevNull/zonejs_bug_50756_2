import * as utils from 'my-lib';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    service = new AppService();
  });

  it('should add default', () => {
    expect(service.add(4, 5)).toBe(9);
  })

  it('should add mock', () => {
    jest.spyOn(utils, 'add').mockImplementation(() => 42);
    expect(service.add(4, 5)).toBe(42);
  })
});
