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
      <Field name="password" placeholder="Password" type="password" />
      <Submit>Login</Submit>
    </Form>
  )
}
```

### 3-1) Form Props

| Name | Description | Required* |
| --- | ----------- | ---------- |
| initialValues | Default values for each feild | Yes |
| className | Set cutsom CSS class name -> default: form | No |
| onSubmit | Submit function after submit form | Yes |
| validationSchema | Validation schema for each field | Yes |

#### initialValues

Pass an object to specify the fields values and data model:

```
initialValues={{
  username: '',
  password: ''
  .
  .
  .
}}
```

#### onSubmit

Pass a function to this prop and component will exec it after submit form:

```
onSubmit={(values) => console.log(values)}
```

#### validationSchema

Define validation rules for all required fields:

```
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
```

### 4) useForm()

You can use this custom hook: `.\src\Form\Hooks\useForm.tsx` to access Form parameters outside the main component:

```
import useForm from './Form/Hooks/useForm';

const { values, errors, actions } = useForm();
```
#### 4-1) Hook Parameters

| Name | Description | Example |
| --- | ----------- | ---------- |
| values | Form values: Object | Object.keys(values).map(...) |
| errors | All errors after validation | Object.keys(errors).map(...) |
| resetForm | Reset form values to initialValues | actions.resetForm() |
| setField | Set value to any specific field | actions.setField({ name: 'name', value: 'value' }) |

### 5) Field

You can create text fields with this component: `.\src\Form\Components\Field.tsx`

```
import Field from './Form/Components/Field';

<Field name="name" placeholder="placeholder" />
```

#### 5-1) Field Props

| Name | Description | Rquired |
| --- | ----------- | ---------- |
| name | Field name | Yes |
| placeholder | Text for input's placeholder | No |
| className | Custom CSS class name for input -> default: form__field | No |
| errorClassName | Custom CSS class name for error message -> default: form__error | No |
| type | Input's type -> default: text | No |

### 6) Submit

You can use this component to add submit button in form: `.\src\Form\Components\Submit.tsx`

```
import Submit from './Form/Components/Submit';

<Submit />
```

#### 6-1) Submit Props

| Name | Description | Rquired |
| --- | ----------- | ---------- |
| children | Button's text -> default: Submit | No |
| className | Custom CSS class name for button -> default: form__submit | No |
