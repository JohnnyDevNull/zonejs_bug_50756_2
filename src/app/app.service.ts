import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
  add(x: number, y: number): number {
    return x + y;
  }
}
