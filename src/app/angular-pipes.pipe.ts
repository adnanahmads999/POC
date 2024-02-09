import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'angularPipes'
})
export class AngularPipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
