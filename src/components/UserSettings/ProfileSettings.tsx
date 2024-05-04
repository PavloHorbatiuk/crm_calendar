import TrashCan from '@/assets/Trash-can.svg';
import UploadArrow from '@/assets/UploadArrow.svg';
import Avatar from '@/assets/Avatar.svg';
import { CardWrapper } from '../ui/CardWrapper/CardWrapper';
import { CardTitle } from '../ui/CardTitle/CardTitle';
import { useAuthStore } from '@/store/authStore';
import { validationUserDataSchema } from '../AuthForm/validationSchema';
import { useYupValidationResolver } from '@/common/hooks/useYupValidationResolver';
import { PencilIcon } from '@heroicons/react/20/solid';
// CheckIcon
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Alert } from '../ui/Alert/Alert';
import { useLocalStorage } from '@/common/hooks/useLocalStorage';

export interface ProfileSettingsType {
  email: string;
  name: string;
}

function ProfileSettings() {
  const { email, token, name } = useLocalStorage();
  const [isOpenedChanges, setIsOpenedChanges] = useState(true);
  const { updateUser, error: responseError, setStatus } = useAuthStore();
  const resolver = useYupValidationResolver<ProfileSettingsType>(
    validationUserDataSchema
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ProfileSettingsType>({
    defaultValues: { name, email },
    mode: 'onBlur',
    resolver,
  });

  const onSubmit = (formData: ProfileSettingsType) => {
    updateUser({
      token,
      ...formData,
    });
  };

  return (
    <>
      <CardTitle>
        <h4>Settings</h4>
      </CardTitle>
      <CardWrapper>
        <div className="flex justify-between ">
          <div className="flex flex-col">
            <span className="font-medium">Profile photo</span>
            <span className="text-lightGray500 ">Description</span>
          </div>
          <div className="flex flex-col items-center bg-lightGray200 w-[24.75rem] rounded-lg py-6">
            <img
              className="w-[8.75rem] border-4 border-white rounded-full"
              src={Avatar}
              alt="avatar"
            />
            <div className="flex mt-6">
              <button className="flex items-center rounded-[2.5rem] bg-black text-mm font-normal text-whitePrimary py-[0.375rem] px-4 ">
                Upload New
                <img className="ml-2" src={UploadArrow} alt="upload" />
              </button>
              <button className="w-8 p-2 rounded-full bg-redSaturated ml-2">
                <img src={TrashCan} alt="upload" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-4 border-y border-lightGray mt-4">
          <div className="flex flex-col w-44">
            <div className="flex justify-between">
              <span className="font-medium">General information</span>
              <button onClick={() => setIsOpenedChanges((state) => !state)}>
                <PencilIcon className="h-4 w-4" />
              </button>
            </div>
            <span className="text-lightGray500 ">Description</span>
          </div>
          {isOpenedChanges ? (
            <div className="w-[24.75rem] bg-green">
              <label className="text-lightGray500 text-[0.75rem] ml-1">
                Email
              </label>
              <p className="text-ml p-1">{email}</p>
              <label className="text-lightGray500 text-[0.75rem] ml-1">
                Full name
              </label>
              <p className="text-ml p-1">{name}</p>
            </div>
          ) : (
            <form className="w-[24.75rem] bg-green">
              <label className="text-lightGray500 text-[0.75rem] ml-1">
                Email
              </label>
              <input
                className={`${errors.email?.message ? 'border-x-0 border-b-1 border-b-rose rounded-none focus:border-none p-1' : 'border-none p-1 text-black'}`}
                {...register('email')}
              />
              <p className="text-rose mt-1">{errors.email?.message}</p>
              <label className="text-lightGray500 text-[0.75rem] ml-1">
                Full name
              </label>
              <input
                className={`${errors.name?.message ? 'border-x-0 border-b-1 border-b-rose rounded-none focus:border-none p-1' : 'border-none p-1 text-black'}`}
                {...register('name')}
              />
              <p className="text-rose mt-1">{errors.name?.message}</p>
            </form>
          )}
        </div>
        <div className="flex justify-end p-4 mt-4">
          <div className="flex">
            {setStatus === 'succeeded' && (
              <Alert status={'succeeded'} text={'Your data have changed'} />
            )}
            {responseError && <p className="text-rose mr-3">{responseError}</p>}
            <button className="text-black py-[0.375rem] px-3 bg-lightGray300 rounded-[2.5rem]">
              Cancel
            </button>
            <button
              type="submit"
              disabled={isOpenedChanges}
              className="flex items-center rounded-[2.5rem] bg-black text-mm font-normal text-whitePrimary py-[0.375rem] px-3 ml-2 "
              onClick={handleSubmit(onSubmit)}
            >
              Save changes
            </button>
          </div>
        </div>
      </CardWrapper>
    </>
  );
}

export default ProfileSettings;
