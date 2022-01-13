import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
  name: 'list',
})
export class ListPipe implements PipeTransform {
  result: any;
  transform(array: any): any {
    this.result = array.join(' ');
    return this.result;
  }
}