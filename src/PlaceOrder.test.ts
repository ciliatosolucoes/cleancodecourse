import PlaceOrder from "./PlaceOrder";

test("Deve fazer um pedido", function(){
    const input = {
        cpf: "778.278.412-36",
        items: [
            {description: "Guitarra", price: 1000, quantity: 2},
            {description: "Amplificador", price: 5000, quantity: 1},
            {description: "Guitarra", price: 30, quantity: 3}
        ],
        coupon: "VALE20"
    }
    const placeOrder = new PlaceOrder();
    const output= placeOrder.execute(input);
    expect(output.total).toBe(5672);
});

test("Não deve aplicar cupom de desconto expirado", function(){
    const input = {
        cpf: "778.278.412-36",
        items: [
            {description: "Guitarra", price: 1000, quantity: 2},
            {description: "Amplificador", price: 5000, quantity: 1},
            {description: "Guitarra", price: 30, quantity: 3}
        ],
        coupon: "VALE10"
    }
    const placeOrder = new PlaceOrder();
    const output= placeOrder.execute(input);
    expect(output.total).toBe(7090);
});
