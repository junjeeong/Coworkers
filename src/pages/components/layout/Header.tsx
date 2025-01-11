import Logo from "../header/Logo";
import HeaderNavigation from "../header/HeaderNavigation";
import HeaderUserMenu from "../header/HeaderUserMenu";
import SidebarMenu from "../header/SidebarMenu";

const Header = () => {
  return (
    <header className="flex items-center bg-background-secondary mb:px-[24px] pc:px-[360px] tb:px-[180px] w-screen h-[60px] text-white">
      <div className="flex justify-between items-center w-full mb:max-w-[748px]">
        <SidebarMenu />
        <Logo />
        <div className="flex-1 ml-6">
          <HeaderNavigation />
        </div>
        <HeaderUserMenu />
      </div>
    </header>
  );
};

export default Header;
