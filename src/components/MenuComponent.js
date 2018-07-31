import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItem({ dish, onClick }) {
    return (
        <Card onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
const menu = this.props.dishes.map((dish) => {
    return (
        <div key={dish.id} className="col-12 col-md-5 m-1">

        </div>
    );
});
return (
    <div className="container">
        <div className="row">
            {menu}
        </div>
    </div>
);

export default Menu;