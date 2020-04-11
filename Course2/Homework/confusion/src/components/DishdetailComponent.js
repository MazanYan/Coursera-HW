import React, {Component} from 'react';
import {Row, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import {COMMENTS} from '../shared/Dishes'

export class DishdetailComponent extends Component {

    constructor(props) {
        super(props);
    }

    renderComments() {
        if (this.props.dish !== null) {
            const dishId = this.props.dish.id;
            const dishComments = COMMENTS.filter((el) => el.forDish === dishId);
            //console.log(dishComments);
            if (dishComments.length) {
                const commentsRendered = dishComments[0].comments.map((comment) => {
                    console.log(comment);
                    return (
                    <div>
                        <p>{comment.text}</p>
                        <p>--{comment.author}, {comment.date}</p>
                    </div>
                )});
                return (
                    <div className="col-12 col-md-4">
                        <h2 className="text-left">Comments</h2>
                        <p className="text-left">
                            {commentsRendered}
                        </p>
                    </div>
                )
            }
            else {
                return (
                    <div className="col-12 col-md-4">
                        <h2 className="text-left">Comments</h2>
                        <p className="text-left">Be the first to submit your comment!</p>
                    </div>
                )
            }
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.dish;
        const comments = this.renderComments();
        if (dish !== null)
            return (
                <Row>
                    <div className="col col-md-2"></div>
                    <div className="col-12 col-md-4">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {comments}
                    <div className="col col-md-2"></div>
                </Row>
            );
        else
            return (
                <Row></Row>
            );
    }
}
