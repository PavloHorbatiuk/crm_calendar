import { useState } from 'react';
import TrashCan from '@/assets/Trash-can.svg';
import UploadArrow from '@/assets/UploadArrow.svg';
import Avatar from '@/assets/Avatar.svg';
import { useYupValidationResolver } from '@/common/hooks/useYupValidationResolver';
import { validationLoginSchema } from '../AuthForm/validationSchema';
import { USER_LOCAL_STORAGE_USER } from '@/common/const/localStorage';

export interface ProfileSettings {
  email: string;
  name: string;
}

function ProfileSettings() {
  // const {email, name} = useAuthStore((store) => store.authData);
  const { email, name } = JSON.parse(
    localStorage.getItem(USER_LOCAL_STORAGE_USER)
  );

  const [inputData, setInputData] = useState<ProfileSettings>({
    email,
    name,
  });
  // const [inputError, setInputError] = useState('');
  const resolver = useYupValidationResolver<ProfileSettings>(
    validationLoginSchema
  );

  const onSubmit = () => {
    console.log(inputData);
    // setInputData({ name: '', email: '' });
  };

  return (
    <div className="bg-whitePrimary w-[53.75rem] p-4 rounded-2xl shadow-md">
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
            <button className="w-8 p-2 rounded-full bg-[#D5393C] ml-2">
              <img src={TrashCan} alt="upload" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4 border-y border-[#EBEBEB] mt-4">
        <div className="flex flex-col">
          <span className="font-medium">General information</span>
          <span className="text-lightGray500 ">Description</span>
        </div>
        <div className="w-[24.75rem]">
          <label className="text-lightGray500 text-sm"> Email</label>
          <input
            type="text"
            value={inputData.email}
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
          />
          <label className="text-lightGray500 text-sm">Full name</label>
          <input
            type="text"
            value={inputData.name}
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
          />
        </div>
      </div>
      <div className="h-24"></div>
      <div className="flex justify-end p-4">
        <div className="flex">
          <button className="text-black py-[0.375rem] px-3 bg-[#F2F2F2] rounded-[2.5rem]">
            Cancel
          </button>
          <button
            className="flex items-center rounded-[2.5rem] bg-black text-mm font-normal text-whitePrimary py-[0.375rem] px-3 ml-2"
            onClick={onSubmit}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
