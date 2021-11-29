import { FormControlLabel } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

import React from "react";
import { FieldArray, formValues, change, Field } from "redux-form";
import { CheckboxReduxForm } from "../reduxFormRenders";

const renderCheckbox = ({ input, label}) => {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={!!input.value}
            onChange={input.onChange}
            color="primary"
          />
        }
        label={label}
      />
    </div>
  );
};

export const CheckBoxFilterComponent = (props) => {
  return (
    <>
      <Field
        name="Australia"
        type="checkbox" label="Australia"
        component={renderCheckbox}
      />
      <Field
        name="Brazil"
        type="checkbox" label="Brazil"
        component={renderCheckbox}
      />
      <Field
        name="Germany"
        type="checkbox" label="Germany"
        component={renderCheckbox}
      />
      <Field
        name="Canada"
        type="checkbox" label="Canada"
        component={renderCheckbox}
      />
    </>
  );
};