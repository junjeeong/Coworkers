import Image from "next/image";

const HeaderUserMenu = () => {
  return (
    <div className="flex justify-between items-center w-[61px] h-[17px]">
      <Image
        src={"/icon/ic_user-lg.svg"}
        width={16}
        height={16}
        alt="user profile"
      />
      <span className="mb:hidden">사용자</span>
    </div>
  );
};

export default HeaderUserMenu;
