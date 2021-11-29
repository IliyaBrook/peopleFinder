import { Field } from "redux-form";
import { FilterInput } from "../../UserList/style";


const renderInput = (props) => {
  return (
    <FilterInput
      {...props.input}
      placeholder="Search users..."
    />
  )
}
export const SearchUsersInputComponent = () => {
  return (
    <Field component={renderInput} name='filterInput'/>
  )
}