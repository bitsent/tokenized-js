
import BaseType from "./../Base";


/**
 * ### undefined ###
 * Code/Text combinations returned in rejection messages when a request is not accepted.
 */
class Rejections extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [  ];
  }

  public validate() {
    super.validateAllFields();
  }

  
}

export default Rejections;