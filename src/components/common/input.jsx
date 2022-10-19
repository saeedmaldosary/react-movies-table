import React, { Component } from "react";

const Input = (props) => {
  const classes = "form-group " + props.class;
  return (
    <div className={classes}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        autoFocus
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        id={props.name}
        type={props.type}
        className="form-control"
      />
    </div>
  );
};

export default Input;
