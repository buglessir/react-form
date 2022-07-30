import { ReactNode } from 'react';

export type FieldValue = string | number | undefined;

export type FormValues = {
  [key: string]: FieldValue
}

export type FormErrors = {
  [key: string]: string
}

export type ActionSetField = {
  name: string,
  value: FieldValue
}

export type Validation = {
  [key: string]: {
    fieldName: string
    required: boolean
  }
}

export type FormContextValue = {
  values?: FormValues | undefined,
  errors?: FormErrors | undefined,
  actions?: {
    setField: ({ name, value }: ActionSetField) => void,
    resetForm: () => void
  }
}

export type FormProps = {
  initialValues: FormValues,
  children: ReactNode,
  className?: string,
  onSubmit: (values: FormValues) => void,
  validationSchema?: Validation 
}

export type SubmitProps = {
  children?: ReactNode,
  className?: string
}

export type FieldProps = {
  name: string,
  placeholder?: string,
  className?: string,
  errorClassName?: string,
  type?: 'text' | 'email' | 'password'
}