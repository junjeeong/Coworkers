import Image from "next/image";

const SidebarMenu = () => {
  return (
    <button className="pc:hidden tb:hidden">
      <Image
        src={"/icon/ic_list-md.svg"}
        width={24}
        height={24}
        alt="sidebar toggle button"
      />
    </button>
  );
};

export default SidebarMenu;
