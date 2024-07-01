import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from '@tanstack/react-router';
import { useAuthStore } from '@/store/authStore';
import { notify } from '@/utils/notify';

import { type LoginType } from './types';
import { InputType } from '@/common/const';
import { validationLoginSchema } from './validationSchema';
import { useYupValidationResolver } from '@/common/hooks/useYupValidationResolver';

import { Alert } from '../ui/Alert/Alert';
import FormField from '../ui/FormField/FormField';

const notifyText = 'Login success';

function LoginForm() {
  const { setIsRegister, setStatus, loading } = useAuthStore();
  const resolver = useYupValidationResolver<LoginType>(validationLoginSchema);
  const login = useAuthStore((store) => store.login);
  const navigate = useNavigate();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginType>({
    mode: 'onBlur',
    resolver,
  });

  const onSubmit = async (data: LoginType) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    await login(data);
    const { success } = useAuthStore.getState();

    if (success) {
      notify('succeeded', notifyText);
      timeoutRef.current = setTimeout(() => {
        navigate({ to: '/dashboard' });
      }, 1500);
    }
  };

  return (
    <form
      className="max-w-[25.188rem] w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-black">Sign In to Woorkroom</h3>
      <FormField<LoginType>
        name={'email'}
        register={register}
        required
        label={'Email'}
        error={errors.email?.message}
      />
      <FormField<LoginType>
        type={InputType.PASSWORD}
        name={'password'}
        register={register}
        required
        label={'Password'}
        error={errors.password?.message}
      />
      <div className="flex items-center pt-8 justify-between">
        <FormField<LoginType>
          name={'isRememberMe'}
          type={InputType.CHECKBOX}
          register={register}
          required
          label={'Remember me'}
          error={errors.isRememberMe?.message}
        />
        <a href="#">
          <p className="text-md max-sm:text-mm">Forgot Password?</p>
        </a>
      </div>
      {setStatus === 'succeeded' && (
        <Alert status={'succeeded'} text={'Login success'} />
      )}
      <div className="text-center w-full mt-10">
        <button className="w-40 btn-primary">
          {loading ? (
            <div
              className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          ) : (
            'Sign In'
          )}
        </button>
      </div>
      <div className="mt-10 text-center">
        <a href="#">
          <span
            className="text-primary text-md"
            onClick={() => setIsRegister(true)}
          >
            Don’t have an account?
          </span>
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
