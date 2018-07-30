import React, { Component } from 'react';

class DishDetail extends Component {

    render() {
        if (this.props.dish != null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        dish
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        comments
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );

    }
}

export default DishDetail;