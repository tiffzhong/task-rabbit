import React, { Component } from 'react';
import { connect } from 'react-redux';


class Mounting_Form extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    

    render() {

        // const formCompiler = (taskType) => {
        //     console.log('taskType ===>', taskType)
        //     if(taskType === null){
        //         return (
        //             <div>
        //                 test 1
        //             </div>
        //         )
        //     } else if (taskType === '') {
        //         return (
        //             <div>
        //                 test 2
        //             </div>
        //         )
        //     }
        // }
        return (
            <div className='form'>
                Mounting Form
                <div className='outer-container'>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { taskType } = state.client;
    return {
        taskType
    }
}

export default connect(mapStateToProps)(Mounting_Form);