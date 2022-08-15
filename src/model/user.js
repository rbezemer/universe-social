import {Model} from "./model";

export class User extends Model{
    /**
     * while the User from jsonplaceholder contains more fields, these are
     * all we need in the application for now.
     * @param jsonData - the json user data returned from jsonplaceholder.typicode.com
     */
    constructor(jsonData) {
        super();
        this.id = jsonData.id;
        this.name = jsonData.name;
        this.username = jsonData.username;
        this.email = jsonData.email;
    }
}