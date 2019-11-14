import React from 'react';
import styles from './FormsControl.module.css';
import { Field } from 'redux-form';

const FormControl = ({ input, meta: {touched, error}, ...props }) => {
    let hasError = error && touched;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')} >
            <div>
                {props.children}

            </div>
            {hasError && <span>{error}</span>}
        </div>

    )
};
export const Textarea = (props) => {
    const { input, meta, child, element, ...restprops } = props;
    return <FormControl {...props}><textarea {...input} {...restprops} /></FormControl>
};

export const Input = (props) => {
    const { input, meta, child, element, ...restprops } = props;
    return <FormControl {...props}><input {...input} {...restprops} /></FormControl>
};

export const createFild = (placeholder, validate, name, component, props = {}, text="") => (
    <dav>
        <Field placeholder={placeholder} validate={validate}
               name={name} component={component} {...props} />
        {text}
    </dav>
);