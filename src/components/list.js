import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getListData } from '../actions';

class List extends Component {
    componentDidMount(){
        setTimeout(
            this.props.getListData,
            500
        );
    }

    render(){
        const { listData } = this.props;

        if(!listData.length){
            return <h1>Loading...</h1>;
        }

        const listItems = listData.map((item, index) => {
            return (
                <li className="collection-item" key={item._id}>
                    <Link to={`/item/${item._id}`}>{item.title}</Link>
                </li>
            );
        });

        return (
            <div>
                <h1 className="center">To Do List</h1>
                <div className="row right-align">
                    <Link className="btn blue-grey" to="/add-item">Add Item</Link>
                </div>
                <ul className="collection">
                    {listItems}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        listData: state.list.all
    }
}

export default connect(mapStateToProps, { getListData: getListData })(List);
