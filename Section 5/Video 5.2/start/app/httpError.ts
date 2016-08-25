declare var humane;

import { Observable } from 'rxjs/Observable';

export function jsendHandler(response) {
  let json = response.json();

  if (json.status) {
    if (json.status === 'fail') {
      humane.log('Failure');

      return json.data;
    } else if (json.status === 'error') {
      humane.log(`Error: ${ json.message }`);

      return json.data;
    } else if (json.status === 'success') {
      return json.data;
    }
  }

  return json;
}

export function catchHandler(error) {
  if (error.status === 401) {
    // The user is unauthorized. We can trigger authentication.
    alert('Now would be a good time to authenticate the user!');
  } else {
    humane.log(error, { timeout: 0, clickToClose: true });
  }

  return Observable.empty();
}
