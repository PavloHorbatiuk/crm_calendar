import React from 'react';
import { InputHTMLAttributes } from 'react';
import { Ref } from 'react-hook-form';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  name?: string;
  label?: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  ref?: Ref;
}

export const Input = React.memo(
  React.forwardRef(function Input(props: InputProps, ref) {
    const { error, name, label, value, onChange, ...restProps } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <>
        {label && <label className="pl-1.5">{label}</label>}
        <div className="pt-4">
          <input
            name={name}
            value={value}
            onChange={onChangeHandler}
            {...restProps}
            // ref={ref}
          />
          {error && <p className="text-red-400">{error}</p>}
        </div>
      </>
    );
  })
);
