import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { ERROR_TYPES } from '@utils/constants';

@Injectable()
export class MuiErrorMessageService {
  /**
   * returns the first error key
   * @param errors object of the form control
   */
  private getErrorKey = (errors: ValidationErrors) => {
    const keys = Object.keys(errors);

    return keys.length > 0 ? keys[0].toUpperCase() : 'DEFAULT';
  }

  /**
   * returns the path to the error message translation
   * @param errors object of the form control
   */
  getErrorMessage = (errors: ValidationErrors): string => {
    const key = this.getErrorKey(errors);
    const error = ERROR_TYPES[key] ? ERROR_TYPES[key] : ERROR_TYPES.DEFAULT;

    return error;
  }

}
