import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleItem } from '../actions';

class SingleItem extends Component {
    componentDidMount(){
        
        this.props.getSingleItem(this.props.match.params.id);
    }
    render(){
        console.log('Single Props:', this.props);

        const { title, details } = this.props.item;

        return (
            <div>
                <h1 className="center">To Do Item</h1>
                <div className="row right-align">
                    <Link to="/" className="btn blue-grey">View Full List</Link>
                </div>
                <h4>{title}</h4>
                <p>{details}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.list.single
    }
}

export default connect(mapStateToProps, { getSingleItem: getSingleItem })(SingleItem);
