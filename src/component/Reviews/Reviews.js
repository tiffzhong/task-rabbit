import React, { Component } from 'react';
import "./Reviews.css";
import { connect } from "react-redux";
import { updateClientReview, updateReviewData } from "../../ducks/clientReducer";
import { createConfirmation } from "../../ducks/taskerReducer";
import axios from 'axios';

class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            review: ""


        }
    }

    componentDidMount() {
        this.postReview()
    }

    clientReview = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    postReview = () => {
        // console.log("clientReview", this.props.clientReview)
        // console.log("clientData", this.props.clientData)
        // console.log("reviewData", this.props.reviewData)
        const { review } = this.state
        // submitReview = {
        //     review
        // }

        // const { clientReview, clientData, reviewData } = this.props
        // const submitReview = {
        //     // created_date,
        //     // client_id,
        //     // tasker_id,
        //     reviewData
        // }
        axios.post('/api/review').then(response => {
            this.setState({
                review: response.data
            })

        })
    }


    render() {
        console.log("state review", this.state.review)
        return (<div className="reviewContainer">
            <div>Write A Review</div>
            <div>How was your experience with Tasker </div>
            {/* <textarea className="textareaforReview" value={this.state.review} onChange={e => this.props.updateClientReview(e.target.value)} /> */}
            <textarea className="textareaforReview" value={this.state.review} onChange={e => this.clientReview(e)} />
            <button onClick={this.props.clientReview}>Post Review</button>
        </div>);
    }
}

const mapStateToProps = (state) => {
    const { clientReview, clientData, reviewData } = state
    return {
        clientReview,
        clientData,
        reviewData
    }
}
const mapDispatchToProps = {
    updateClientReview: updateClientReview,
    createConfirmation: createConfirmation,
    updateReviewData: updateReviewData
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);