import { IconHome, IconSettings, IconBell, LogoutIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function SideMenu() {
  return (
    <aside
      className={`
      flex flex-col 
      bg-gray-200 text-gray-700
      dark:bg-gray-900 
    `}
    >
      <div
        className={`
          flex flex-col items-center justify-center
          h-20 w-20 
          bg-gradient-to-r from-indigo-500 to-purple-800
        `}
      >
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" text="Home" icon={IconHome} />
        <MenuItem url="/settings" text="Settings" icon={IconSettings} />
        <MenuItem url="/notifications" text="Notifications" icon={IconBell} />
      </ul>
      <ul>
        <MenuItem
          text="Logout"
          icon={LogoutIcon}
          onClick={() => console.log("logout")}
          className={`text-red-600 dark:text-red-400 dark:hover:text-white hover:bg-red-400 hover:text-white`}
        />
      </ul>
    </aside>
  );
}
