import Form from './Form';
import Field from './Form/Components/Field';
import Submit from './Form/Components/Submit';
import OtherComponent from './OtherComponent';

const App = () => {
  return (
    <Form
      initialValues={{
        username: '',
        password: ''
      }}
      validationSchema={{
        username: {
          fieldName: 'UserName',
          required: true
        },
        password: {
          fieldName: 'Password',
          required: true
        }
      }}
      onSubmit={console.log}
    >
      <Field name="username" placeholder="Username" />
      <Field name="password" placeholder="Password" type="password" />
      <Submit />
      <OtherComponent />
    </Form>
  )
}

export default App;
