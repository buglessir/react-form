import { memo } from 'react';
import { SubmitProps } from '../Types';

const Submit = ({ children, className }: SubmitProps) => {
  return (
    <button
      type="submit"
      className={className ? className : 'form__submit'}
    >
      {children ? children : 'Submit'}
    </button>
  )
}

export default memo(Submit);