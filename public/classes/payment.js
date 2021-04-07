//invoice class
var Payment = /** @class */ (function () {
    // readonly client:string; //other methods and classes can only read the contents of this attribute
    // private details:string;
    // public amount:number; //default is public
    function Payment(recepient, //shortcut method to declare and assign values in constructor
    details, //applicable only if access specifier is used
    amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return this.recepient + " owes $" + this.amount + " for " + this.details;
    };
    return Payment;
}());
export default Payment;
