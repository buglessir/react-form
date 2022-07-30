import { useCallback, useState, SyntheticEvent } from 'react';
import { FormProps, FormValues, FormErrors, ActionSetField, FieldValue } from './Types';
import FormContex from './Context/FormContext';

const Form = ({ initialValues, children, className, validationSchema, onSubmit }: FormProps) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>();

  const setField = useCallback(({ name, value }: ActionSetField) => {
    
    let modifiedValues: FormValues = {
      ...values,
      [name]: value
    }
    setValues(modifiedValues);
  }, [values]);

  const validation = (): boolean => {
    let errorsCount: number = 0;
    let modifiedErrors: FormErrors = {};
    for (let i in values) {
      if (validationSchema) {
        let { required, fieldName } = validationSchema[i];
        let value: FieldValue = values[i];
        if (required && value === '') {
          if (validationSchema[i].required && value === '') {
            errorsCount++;
            modifiedErrors = {
              ...modifiedErrors,
              [i]: `${fieldName} is required`
            }
          }
        }
      }
    }
    if (errorsCount > 0) {
      setErrors(modifiedErrors);
      return false;
    } else {
      setErrors({});
      return true;
    }
  }

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValied: boolean = validation();
    if (isValied) {
      onSubmit(values);
    }
  }

  const resetForm = () => {
    setValues(initialValues);
  }

  return (
    <FormContex.Provider value={{
      values,
      errors,
      actions: { setField, resetForm }
    }}>
      <form className={className ? className : 'form'} onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContex.Provider>
  )
}

export default Form;