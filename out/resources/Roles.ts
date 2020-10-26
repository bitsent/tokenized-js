
import BaseType from "./../Base";


/**
 * # undefined
 * Roles that entities play in relation to their interactions with other entities. These roles have widely-accepted tasks, rights and duties.

 */
class Roles extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [  ];
  }

  public validate() {
    super.validateAllFields();
  }

  
}

export default Roles;