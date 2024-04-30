import { useForm } from 'react-hook-form';
import { validationLoginSchema } from './validationSchema';
import { useYupValidationResolver } from '@/common/hooks/useYupValidationResolver';
import { useNavigate } from '@tanstack/react-router';
import { useAuthStore } from '@/store/authStore';
import { LoginType } from './types';
import FormField from '../ui/FormField/FormField';
import { InputType } from '@/common/const';

function LoginForm() {
  const { setIsRegister } = useAuthStore();
  const resolver = useYupValidationResolver<LoginType>(validationLoginSchema);
  const login = useAuthStore((store) => store.login);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginType>({
    mode: 'onBlur',
    resolver,
  });

  const onSubmit = async (data: LoginType) => {
    await login(data);
    const { success } = useAuthStore.getState();

    if (success) {
      navigate({ to: '/dashboard' });
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
      <div className="text-center w-full mt-10">
        <button className="w-40 btn-primary">Sign In</button>
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
