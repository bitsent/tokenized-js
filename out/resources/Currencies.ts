
import BaseType from "./../Base";


/**
 * # undefined
 * International Organization for Standardization code for Currency. 3 character code.
 */
class Currencies extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [  ];
  }

  public validate() {
    super.validateAllFields();
  }

  
}

export default Currencies;