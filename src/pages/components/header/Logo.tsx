import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-[102px] pc:w-[158px] h-[20px] pc:h-[32px]">
      <Image src={"/logo/logo.svg"} alt="logo" fill />
    </div>
  );
};

export default Logo;
