
import BaseType from "./../Base";


/**
 * # undefined
 * Predefined tags for output metadata. Multiple values can be assigned to an output to describe a tx output.

 */
class Tags extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [  ];
  }

  public validate() {
    super.validateAllFields();
  }

  
}

export default Tags;