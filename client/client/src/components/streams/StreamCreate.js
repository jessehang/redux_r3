import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  //semantic ui hides error messages (add error class name to form)

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  //formProps.input is deconstructed to just input.
  //{...input} is in input tag to pass down all props (onChange, value)}
  //meta.error grabs error checks created in validate function
  //meta contains touched to check whether a field has been used
  //must change method to arrow funcion to give context to this
  //add className helper to conditionally render error

  onSubmit(formValues) {
    //redux form takes care of this
    //event.preventDefault();
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
  //this.renderInput is passed into field in order to create a component for the form
  //formProps is default passed down to the component
  //you can create any props i.e. label to pass down into the component
  //this.props.handleSubmit is reduxForm handling the submit instead of you creating a helper method
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

//validate function will validate reduxForm inputs
//declare errors object containing Field titles to create a check

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

//form: (insert any name)
