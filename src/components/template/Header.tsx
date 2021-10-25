import Title from "./Title";
import SwitchThemeButton from "./SwitchThemeButton";
import useAppData from "../../data/hook/useAppData";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header(props: HeaderProps) {
  const { theme, changeTheme } = useAppData();

  return (
    <header className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end`}>
        <SwitchThemeButton theme={theme} changeTheme={changeTheme} />
      </div>
    </header>
  );
}
