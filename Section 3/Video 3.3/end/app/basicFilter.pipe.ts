import { Pipe } from '@angular/core';

@Pipe({
  name: 'basicFilterPipe'
})
export class BasicFilterPipe {
  transform (value, searchTerm) {
    if (searchTerm) {
      return value.filter(item => item.toLowerCase().includes(searchTerm));
    } else {
      return value;
    }
  }
}
