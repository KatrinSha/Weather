import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';


  
@Pipe({
  name: 'wind',
})
export class WindPipe implements PipeTransform {
  result: any;
  transform(direction: number): any {
      let message:string=''
    switch (true) {
        case (direction === 0):
            message = "North"
          break;
        case (direction < 90 && direction > 0):
            message = "North-East"
          break;
        case (direction === 90):
            message= "East"
          break;
        case (direction < 180 && direction > 90):
            message= "South-East"
          break;
        case (direction === 180):
            message = "South"
          break;
        case (direction < 270 && direction > 180):
            message = "South-West"
          break;
        case (direction === 270):
            message = "West"
          break;
        case (direction < 360 && direction > 270):
            message = "North-West"
          break;
      }
      return message
    }
}