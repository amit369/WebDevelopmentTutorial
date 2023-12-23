import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const [x] = args;
    return value * 70;
  }

}
