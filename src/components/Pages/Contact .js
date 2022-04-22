import React, {Component} from 'react';
import Field from '../Common/Field.js';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = {
    sections: [
    [
        {name: "name", elementName: "input", type: "text", placeholder: "Your name"},
        {name: "email", elementName: "input", type: "email", placeholder: "Your email"},
        {name: "phone", elementName: "input", type: "text", placeholder: "Your phone number"}
    ],

    [
        {name: "message", elementName: "textarea", type: "text", placeholder: "Type your message"}
    ]
    ]
}

class Contact extends Component{

    render(){
        return(
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            
                <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit = {this.props.handleSubmit}>
                    <div className="row align-items-stretch mb-5">
                        {fields.sections.map((section, sectionIndex) => {
                            console.log("Rendering Section Index", sectionIndex, "with", section );
                            return(
                                <div className = "col-md-6" key={sectionIndex}>
                                    {section.map((field,i ) => {
                                        return <Field 
                                                    {...field} 
                                                    key = {i}
                                                    value = {this.props.values[field.name]}
                                                    name = {field.name}
                                                    onChange = {this.props.handleChange}
                                                    onBlur = {this.props.handleBLur}
                                                    touched = {(this.props.touched[field.name])}
                                                    errors = {this.props.errors[field.name]}
                                        / >
                                    })}     
                                </div>

                            )
                        })}
                    </div>
                   
                
                
                    <div className="text-center">
                    <button 
                        className="btn btn-primary btn-xl text-uppercase" 
                        id="submitButton" 
                        type="submit">
                        Submit!
                        </button></div>
                </form>
            </div>
        </section>
        )
    }
}
export default withFormik({
    mapPropsToValeus: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    //yup is a validation schema provider that formik can integrate with

    validationSchema: Yup.object().shape({
        //this section validates props, sets required requirements and handles errors in a single line. wtf? 
        //all of these functions are pre-made ready to be implemented!
        name: Yup
            .string()
            .min(3, "C'mon fam, your name is longer then that...")
            .required('You must give us your name!'),
        email: Yup
            .string()
            .email("You need to enter a valid email!")
            .required("We need you to enter an email address"),
        phone: Yup
            .string()
            .min(10, "Please provide a valid 10 digit phone number!")
            .max(15, "Your phone number is too long!")
            .required("We need a phone number to reach ya!"),
        message: Yup.string().min(5, "You need to provide a more detailed essay about yourself!").required("You need to enter a few words about your problem!")
    }),
    
    //called when the form submits
    handleSubmit: (values, {setSubmitting}) => {
        alert("you have submitted the form! ayas");
    }
})(Contact);

