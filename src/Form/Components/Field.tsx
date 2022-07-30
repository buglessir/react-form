import FormContex from '../Context/FormContext';
import { FieldProps } from '../Types';

const Field = ({ name, placeholder, className, errorClassName, type }: FieldProps) => {
  return (
    <FormContex.Consumer>
      {
        ({ values, errors, actions }) => (
          <div className={className ? className : 'form__field'}>
            <input
              name={name}
              type={type ? type : 'text'}
              placeholder={placeholder}
              onChange={(e) => {
                actions?.setField({ name, value: e.target.value })
              }}
              value={values ? values[name] : ''}
            />
            {
              errors ?
                errors[name] && <div className={errorClassName ? errorClassName : 'form__error'}>{errors[name]}</div>
                : null
            }
          </div>
        )
      }
    </FormContex.Consumer>
  )
}

export default Field;