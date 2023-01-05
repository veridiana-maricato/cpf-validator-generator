export default class ValidateCpf {
    constructor(sentCpf) {
      Object.defineProperty(this, 'cleanCpf', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: sentCpf.replace(/\D+/g, '')
      });
    }
  
    isSequency() {
      return this.cleanCpf.charAt(0).repeat(11) === this.cleanCpf;
    }
  
    generatesNewCpf() {
      const CpfWithNoDigits = this.cleanCpf.slice(0, -2);
      const firstDigit = ValidateCpf.generatesDigit(CpfWithNoDigits);
      const secondDigit = ValidateCpf.generatesDigit(CpfWithNoDigits + firstDigit);
      this.newCpf = CpfWithNoDigits + firstDigit + secondDigit;
    }
  
    static generatesDigit(CpfWithNoDigits) {
      let total = 0;
      let reverse = CpfWithNoDigits.length + 1;
  
      for(let stringCpf of CpfWithNoDigits) {
        total += reverse * Number(stringCpf);
        reverse--;
      }
  
      const digit = 11 - (total % 11);
      return digit <= 9 ? String(digit) : '0';
    }
  
    validate() {
      if(!this.cleanCpf) return false;
      if(typeof this.cleanCpf !== 'string') return false;
      if(this.cleanCpf.length !== 11) return false;
      if(this.isSequency()) return false;
      this.generatesNewCpf();
  
      return this.newCpf === this.cleanCpf 
    
  }
}


  
  