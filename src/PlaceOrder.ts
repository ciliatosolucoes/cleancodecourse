import Coupon from "./Coupon";
import Order from "./Order"


export default class PlaceOrder{
    coupons: Coupon[];
    orders: Order[];

    constructor(){
        this.coupons = [
            new Coupon("VALE20",20, new Date("08/03/2021")),
            new Coupon("VALE10",10, new Date("08/02/2021"))
        ]
        this.orders = [];
    }

    execute(input: any){
        const order = new Order(input.cpf);
        for(const item of input.items){
            order.addItem(item.description, item.price, item.quantity);
        }
        if (input.coupon){
            const coupon = this.coupons.find(coupon => coupon.code === input.coupon);
            if (coupon && coupon.isValid()) order.addCoupon(coupon);
        }
        const total = order.getTotal();
        this.orders.push(order);
        return{
            total
        };
    }



}