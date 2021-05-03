export class User {
    constructor(
        public _id: Number,
        public firstName: string,
        public lastName: string,
        public emailId: string,
        public password: string,
        public dob: Date,
        public phone: string,
        public address: string,
        public city: string,
        public state: string,
        public pincode: string,
        public funds: number,
        public orders: Array<any>,
        public userLocked: Boolean, 
        public userId: string
        ) { }
}