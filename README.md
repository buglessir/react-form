### 1) Install

Please run the command below to install this project:

```
cd react-form
npm install or yarn install
```

### 2) Start

Please run the command below to start and open this project on your browser:

```
cd react-form
npm start or yarn start
```

### 3) `<Form />`

You can create forms with the `<Form />` component. For example, pay attention to the following codes:

```
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
      <Field name="password" placeholder="Email" type="password" />
      <Submit>Login</Submit>
    </Form>
  )
}
```
