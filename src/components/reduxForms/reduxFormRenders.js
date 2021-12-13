import { reduxForm, autofill} from "redux-form";
import { CheckBoxFilterComponent } from "./reduxFromComponents/checkBoxFilterComponent";
import {SearchUsersInputComponent} from './reduxFromComponents/searchUsersInputComponent'

export const CheckboxReduxForm = reduxForm({
  form: "checkboxCountrys",
  autofill
})(CheckBoxFilterComponent);


export let SearchUsersInput = reduxForm({
  form: "searchUsersInput"
})(SearchUsersInputComponent);

