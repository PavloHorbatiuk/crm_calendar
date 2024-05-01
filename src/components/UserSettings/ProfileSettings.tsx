import TrashCan from '@/assets/Trash-can.svg';
import UploadArrow from '@/assets/UploadArrow.svg';
import Avatar from '@/assets/Avatar.svg';

function ProfileSettings() {
  return (
    <div className="bg-whitePrimary w-[860px] h-[812px] p-4 rounded-2xl">
      <div className="flex justify-between ">
        <div className="flex flex-col">
          <span className="font-medium">Profile photo</span>
          <span className="text-lightGray500 ">Description</span>
        </div>
        <div className="flex flex-col items-center bg-lightGray200 w-[396px] rounded-lg py-6">
          <img
            className="w-[140px] border-4 border-white rounded-full"
            src={Avatar}
            alt="avatar"
          />
          <div className="flex mt-6">
            <button className="flex items-center rounded-[40px] bg-black text-[14px] font-normal text-whitePrimary py-[6px] px-4 ">
              Upload New
              <img className="ml-2" src={UploadArrow} alt="upload" />
            </button>
            <button className="w-[32px] p-2 rounded-full bg-[#D5393C] ml-2">
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
        <div>
          {/* TODO: */}
          {/* <FormField/>
        <FormField/> */}
        </div>
      </div>
      <div className="h-[262px]"></div>
      <div className="flex justify-end p-4">
        <div className="flex">
          <button className="text-black py-[6px] px-3 bg-[#F2F2F2] rounded-[40px]">
            Cancel
          </button>
          <button className="flex items-center rounded-[40px] bg-black text-[14px] font-normal text-whitePrimary py-[6px] px-3 ml-2">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
