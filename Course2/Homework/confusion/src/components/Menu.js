import React, {Component} from 'react';
import { Card, Row, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import {DishdetailComponent} from './DishdetailComponent';

class MenuComponent extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        selectedDish: null
        };
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <DishdetailComponent dish={dish}/>
            );
        else
            return (
                <div></div>
            );
    }

    handleSelect(selectedIndex, e) {
        this.setState({activeIndex: selectedIndex});
      };

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div  className="col-12 col-md-3 mt-5">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
    });

    return (
        <div className="container">
            <Row>
                {menu}
            </Row>
            <div className="row mt-2">
                {this.renderDish(this.state.selectedDish)}
            </div>
        </div>
    );
    }
}

export default MenuComponent;
