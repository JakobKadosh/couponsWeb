import { User } from './User.model';

export class Customer {
    public constructor(
        
        public user?:User,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public password?: string,
        public customerId?:number
        )
        {};
}
