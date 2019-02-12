import React, { Component } from 'react';
import { connect } from 'react-redux';

class PersonalMessages extends Component {
    render() {
        return (
            <div className='PersonalMessages-component'>
            
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalMessages);