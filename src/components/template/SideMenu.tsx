import { IconHome, IconSettings, IconBell } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function SideMenu() {
  return (
    <aside>
      <div
        className={`
          flex flex-col items-center justify-center
          h-20 w-20 
          bg-gradient-to-r from-indigo-500 to-purple-800
        `}
      >
        <Logo />
      </div>
      <ul>
        <MenuItem url="/" text="Home" icon={IconHome} />
        <MenuItem url="/settings" text="Settings" icon={IconSettings} />
        <MenuItem url="/notifications" text="Notifications" icon={IconBell} />
      </ul>
    </aside>
  );
}
