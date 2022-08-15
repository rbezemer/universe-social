import {Model} from "./model";

export class Post extends Model{
    /**
     * Instantiates a post model
     * @param jsonData - the json user data returned from jsonplaceholder.typicode.com
     */
    constructor(jsonData) {
        super();
        this.id = jsonData.id;
        this.userId = jsonData.userId;
        this.title = jsonData.title;
        this.body = jsonData.body;
    }
}