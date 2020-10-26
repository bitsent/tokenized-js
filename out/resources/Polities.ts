
import BaseType from "./../Base";


/**
 * # undefined
 * Polities (eg. Countries/Nation-States (ISO-3166 Alpha-3), Political Unions, International Organizations, etc.). Based on a 3 character code.
 */
class Polities extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [  ];
  }

  public validate() {
    super.validateAllFields();
  }

  

  
}

export default Polities;