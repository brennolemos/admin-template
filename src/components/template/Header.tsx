import Title from "./Title";
import SwitchThemeButton from "./SwitchThemeButton";
import useAppData from "../../data/hook/useAppData";
import UserAvatar from "./UserAvatar";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header(props: HeaderProps) {
  const { theme, changeTheme } = useAppData();

  return (
    <header className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <SwitchThemeButton theme={theme} changeTheme={changeTheme} />
        <UserAvatar className="ml-3" />
      </div>
    </header>
  );
}
