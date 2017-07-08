import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submitText} from '../../actions/signForm';

import UI from '../../components/ui';

class SignForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    /**
     * This is a controlled form component.
     * It will dispatch inputValue to actions, on form submit
     * @param {e} e eventhandler
     */
    _handleSubmit(e) {
        e.preventDefault();
        this.props.submitText(this.state.inputValue);
        this.setState({inputValue: ''});
    }

    /**
     * Updates the state on input value
     * @param {e} e eventhandler
     */
    _handleChange(e) {
        this.setState({inputValue: e.target.value});
    }

    /**
     * Gets the new state of the newText array from reducer
     * and displays new Text
     * @return {DOM} appends new Dom with newText
     */
    displayText() {
        if (this.props.newText) {
            return this.props.newText.map((element, index) =>
                 <div className="display" key={index}>{element}</div>
            );
        }

    }

    render() {
        return (
            <div className='dashboard'>
                <form onSubmit={this._handleSubmit.bind(this)} >
                    <textarea
                    id='message'
                    placeholder='Enter msg here'
                    className='form-control'
                    rows='3'
                    value={this.state.inputValue}
                    onChange={this._handleChange.bind(this)}>
                    </textarea><br/>
                    <UI.Button className="button">Submit</UI.Button>
                </form>
                {this.displayText()}
            </div>
        );
    }
}


/**
 * This will retrieve the state which will be available as props
 * as this.props.newText in the component
 * @param  {array} state array retrieved from reducer
 * @return {Object}      Object retrived from new state
 */
const matchStateToProps = state => ({newText: state.newtext});


/**
 * This will dispatch new value to actions from the
 * component as this.props.submitText
 * @param  {Dispatch} dispatch redux dispatcher
 * @return {Function}          submitText is the function located in Actions
 */
const matchDispatchToProps = dispatch =>
    bindActionCreators({submitText}, dispatch);


// Bind actions, states and component to the store
export default connect(matchStateToProps, matchDispatchToProps)(SignForm);
