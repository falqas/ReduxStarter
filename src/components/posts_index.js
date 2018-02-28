import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom'; // like the react version of <a> anchor tags. will allow users to navigate around application by clicking, without the browser doing its default behavior (ie http request to fetch html from the server)
class PostsIndex extends Component {
    componentDidMount() { // a react built-in lifecycle method -similar to ngOnInit?
        // life cycle method: a func on a react component class that is automatically called by react.

        //  life cycle methods: useful for the instant we know that this component is about to render on the screen, we want to call a function.
        this.props.fetchPosts();

    }

    renderPosts() {
        return _.map(this.props.posts, post => <li className="list-group-item" key={post.id}>{post.title}</li>);
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                <Link className="btn btn-primary" to="/posts/new">
                Add a Post
                </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

// whenever we want to consume anything from application level state, we need to define our mapStateToProps function:

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);// wiring up an action creator with this syntax instead of using that mapDispatchToProps func is identical. we willstill have access to this.props.fetchPosts inside of the component

