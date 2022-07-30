import { createContext } from 'react';
import { FormContextValue } from '../Types';

const FormContex = createContext<FormContextValue>({});

export default FormContex;