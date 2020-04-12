import React, {Component} from 'react';
import {Row, Card, CardImg, CardBody, CardTitle, CardText, CardHeader} from 'reactstrap';

export class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments() {
        if (this.props.dish !== undefined) {
            const dish = this.props.dish;
            let commentsRendered;
            if (dish.comments.length) {
                commentsRendered = dish.comments.map((comment) => (
                    <ul className="list-unstyled">
                        <li>{comment.text}</li>
                        <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))
                                }
                             }</li>
                    </ul>
                ));
                
            }
            else {
                commentsRendered = (
                    <ul className="list-unstyled">
                        <li>Be the first to submit your comment!</li>
                    </ul>
                );
            }
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4 className="text-left">Comments</h4>
                    <p className="text-left">
                        {commentsRendered}
                    </p>
                </div>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderDish() {
        if (this.props.dish !== undefined) {
            const dish = this.props.dish;
            return (
                <Card>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><strong>{dish.name}</strong></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
    }

    render() {
        if (this.props.dish !== null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish()}
                    </div>
                    {this.renderComments()}
                </div>
            );
        else
            return (
                <div></div>
            );
    }
}
