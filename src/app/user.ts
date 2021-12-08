// import { Inject, Injectable } from "@angular/core";

// @Injectable({
//     providedIn: 'root'
//   })
export class User {
    public username!: string;
    public password!: string;
    public role!: string

    constructor(username:string, password:string, role:string)
    {
        this.username=username;
        this.password=password;
        this.role=role;
    }

    // public users: User[]=[
    //     new User('admin','admin','admin'),
    //     new User('normalUser','normalUser','normalUser')
    // ];
}


