import React, {Component} from 'react'
import './CommentCard.scss'

const CardTitle = (props) => {
    const { titleData, userEmailData } = props
    return (
        <div className="card-title">
            <h5 data-testid="comment-title">{titleData}</h5>
            <div  className="username">
                <i className="material-icons left ">account_circle</i>
                <span data-testid="comment-username">{userEmailData}</span>
            </div>
        </div>
    );
}
const CardContent = (props) => {
    const {contentData} = props
    return (
        <p data-testid="comment-content">{contentData}</p>
    );
}

/**
 * the basic view of a comment, in Card form
 */
class CommentCard extends Component {
    render() {
       const {contentData} = this.props
       return (
            <div className="CommentCard row">
                <div className="col s12 m8">
                    <div className="card">
                        <div className="card-content ">
                            <CardTitle titleData={contentData.name}  userEmailData={contentData.email}/>
                            <CardContent contentData={contentData.body}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentCard;