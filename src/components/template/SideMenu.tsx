import { IconHome, IconSettings, IconBell } from "../icons";
import MenuItem from "./MenuItem";

export default function SideMenu() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" text="Home" icon={IconHome} />
        <MenuItem url="/settings" text="Settings" icon={IconSettings} />
        <MenuItem url="/notifications" text="Notifications" icon={IconBell} />
      </ul>
    </aside>
  );
}
