import { SafeUrl } from "@angular/platform-browser";

export class Ticket {
    constructor(public _id: number, public userID: number, public name: string, public reason: string, public link: SafeUrl) { }
}