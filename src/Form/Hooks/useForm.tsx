import { useContext } from 'react';
import FormContex from '../Context/FormContext';
import { FormContextValue } from '../Types';

const useForm = (): FormContextValue => {
  const { values, errors, actions } = useContext(FormContex);

  return {
    values,
    errors,
    actions
  }
}

export default useForm;