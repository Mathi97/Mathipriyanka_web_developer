import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'removeUnderscore' })

export class RemoveUnderscorePipe implements PipeTransform {
   transform(value?: any, args?: any): any {
      if (!!value && value !== '-') {
         if (typeof value === 'string' && value.indexOf('_') > -1) {
            const val = value.replace(/_/g, '');
            return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
         } else {
            return value;
         }
      } else {
         return '-';
      }
   }
}
