export class Purchase {
    public constructor(
        public customer_id:  number,
        public coupon_id: number,
        public amount: number,
        public purchase_id ? : number
    ) { };
}