import useForm from './Form/Hooks/useForm';

const OtherComponent = () => {
  const { values, errors, actions } = useForm();

  return (
    <>
      <hr />
      <h1>useForm:</h1>
      <button type="button" onClick={actions?.resetForm}>Reset Form</button>
      <br /><br />
      <div>
        Values:
        <ul>
          {
            values ?
              Object.keys(values).map((item, index) => <li key={`value-${index}`}>{item}: {values[item]}</li>)
              : null
          }
        </ul>
      </div>
      <div>
        Errors:
        <ul>
          {
            errors ?
              Object.keys(errors).map((item, index) => <li key={`error-${index}`}>{errors[item]}</li>)
              : null
          }
        </ul>
      </div>
    </>
  )
}

export default OtherComponent;