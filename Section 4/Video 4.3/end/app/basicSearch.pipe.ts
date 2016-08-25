import {Pipe} from '@angular/core';

@Pipe({
  name: 'basicSearch'
})
export class BasicSearchPipe {
  transform (value, searchTerm) {
    if (searchTerm) {
      return value.filter(item => item.name.toLowerCase().includes(searchTerm));
    } else {
      return value;
    }
  }
}
