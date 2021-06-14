import React from 'react';

//input = props.input object
export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div className="form__group">
            <input {...input} className="form__input" placeholder={label} id={label} />
            <label className="form__label" for={label}>
                {touched && error}
            </label>
        </div>
    )
};