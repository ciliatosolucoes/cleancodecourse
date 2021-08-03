export default class Coupon{
    code: string;
    percentage: number;
    validDate: Date;
    
    constructor(code: string, percentage: number, validDate: Date){
        this.validDate = validDate;
        this.code = code;
        this.percentage = percentage;
    }

    isValid(){
        const today = new Date();
        console.log(today);
        console.log(this.validDate);
        return this.validDate >= today;
    }
}