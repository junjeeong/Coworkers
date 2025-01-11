import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="top-0 left-0 fixed flex flex-col bg-background-secondary p-4 w-[204px] h-screen">
      <Image
        src={"/icon/ic_close.svg"}
        width={24}
        height={24}
        alt="close button"
        className="ml-auto"
      />
      <ul className="flex flex-col gap-6 mt-[35px]">
        <li>경영관리팀</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
