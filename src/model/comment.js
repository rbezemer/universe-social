import {Model} from "./model";

export class Comment extends Model{
    /**
     * Initializes a Comment model object
     * todo: behave more ORM like and create a relationship between postId and the post model
     * @param jsonData - the json user data returned from jsonplaceholder.typicode.com
     */
    constructor(jsonData) {
        super();
        this.id = jsonData.id;
        this.postId = jsonData.postId;
        this.name = jsonData.name;
        this.email = jsonData.email;
        this.body = jsonData.body;
    }

}