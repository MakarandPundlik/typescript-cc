//invoice class
var Invoice = /** @class */ (function () {
    // readonly client:string; //other methods and classes can only read the contents of this attribute
    // private details:string;
    // public amount:number; //default is public
    function Invoice(client, //shortcut method to declare and assign values in constructor
    details, //applicable only if access specifier is used
    amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
export default Invoice;
