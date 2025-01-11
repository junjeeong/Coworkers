import Logo from "../header/Logo";
import HeaderNavigation from "../header/HeaderNavigation";
import HeaderUserMenu from "../header/HeaderUserMenu";
import SidebarMenu from "../header/SidebarMenu";

const Header = () => {
  return (
    <header className="flex items-center bg-background-secondary mb:px-[24px] pc:px-[360px] tb:px-[180px] w-full h-[60px] text-white">
      <div className="flex justify-between items-center gap-2 w-[540px] pc:w-[1200px] tb:w-[696px] max-w-[1200px]">
        <SidebarMenu />
        <Logo />
        <div className="flex-1">
          <HeaderNavigation />
        </div>
        <HeaderUserMenu />
      </div>
    </header>
  );
};

export default Header;
