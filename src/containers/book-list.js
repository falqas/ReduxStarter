import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        })
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );

    }

}

// this func is the glue betw react and redux
// if our state ever changes, this container will instantly rerender with the new list of books
// whenever the app state changes, the object in the state func will be assigned as props to the component
function mapStateToProps(state) {
    // whatever is returned from her will show up as props inside of BookList
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList)