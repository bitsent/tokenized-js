export default abstract class BaseType {
    protected requiredFieldNames: string[];
    protected fieldNames: string[];
    public validateAllFields(): void {
        for (let i = 0; i < this.requiredFieldNames.length; i++) {
            const name = this.requiredFieldNames[i];
            const val = this[name] as BaseType;
            if(val === undefined || val === null) throw new Error(`Field '${name}' is required`);
        }
        for (let i = 0; i < this.fieldNames.length; i++) {
            const name = this.requiredFieldNames[i];
            const val = this[name] as BaseType;
            if(val !== undefined && val !== null) {
                val.validateAllFields();
            }
        }
    }
    public abstract validate(): void;
}

export class BooleanType extends BaseType {
    public value: Boolean;
    constructor(value: Boolean) {
        super();
        this.value = value;
    }
    public validate(): void {
      return;
    }
}

export class UInt extends BaseType {
    public bitsize = 32
    public value: number;
    constructor(value: number) {
        super();
        this.value = Math.floor(value);
    }
    public validate(): void {
      var max = Math.pow(2, this.bitsize) -1;
      if (this.value < 0) throw new Error("UInt cannot be smaller than 0");
      if (this.value > max) throw new Error(`UInt${this.bitsize} cannot be bigger than ${max}`);
    }
}

export class UInt8 extends UInt { public bitsize = 8; }
export class UInt16 extends UInt { public bitsize = 16; }
export class UInt32 extends UInt { public bitsize = 32; }
export class uint extends UInt {}
export class UInt64 extends UInt { public bitsize = 64; }

export class FixedChar extends BaseType {
    public charsize = 1
    public value: string;
    constructor(value: string) {
        super();
        this.value = value;
    }
    public validate(): void {
      if(this.value.length !== this.charsize) throw new Error(`FixedChar${this.charsize} must be exactly ${this.charsize} characters long`)
    }
}

export class FixedChar1 extends FixedChar { public charsize = 1; }
export class FixedChar3 extends FixedChar { public charsize = 3; }
export class FixedChar5 extends FixedChar { public charsize = 5; }
export class FixedChar12 extends FixedChar { public charsize = 12; }
export class FixedChar20 extends FixedChar { public charsize = 20; }

export class VarChar extends BaseType {
    public charsize = 1
    public value: string;
    constructor(value: string) {
        super();
        this.value = value;
    }
    public validate(): void {
      if(this.value.length > this.charsize) throw new Error(`VarChar${this.charsize} cannot be longer than ${this.charsize} characters`)
    }
}

export class VarChar_tiny extends VarChar { public charsize = 255; }
export class VarChar_small extends VarChar { public charsize = 535; }
export class VarChar_medium extends VarChar { public charsize = 9999999999999999999999; } // TODO: Find the real number

export class VarBin extends BaseType {
    public bytesize = 9999999999999999999999; // TODO: Find the real number
    public value: Uint8Array;
    constructor(value: Uint8Array) {
        super();
        this.value = value;
    }
    public validate(): void {
      if(this.value.length > this.bytesize) throw new Error(`VarBin${this.bytesize} cannot be longer than ${this.bytesize} bytes`)
    }
}

export class VarBin_small extends VarBin { public bytesize = 9999999999999999999999; } // TODO: Find the real number
export class VarBin_medium extends VarBin { public bytesize = 9999999999999999999999; } // TODO: Find the real number

export class Bin extends BaseType {
    public bytesize = 1
    public value: Uint8Array;
    constructor(value: Uint8Array) {
        super();
        this.value = value;
    }
    public validate(): void {
      if(this.value.length > this.bytesize) throw new Error(`Bin${this.bytesize} must be exactly ${this.bytesize} bytes long`)
    }
}

export class Bin32 extends Bin { public bytesize = 32; }
