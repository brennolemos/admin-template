import { MoonIcon, SunIcon } from "../icons";

interface SwitchThemeButtonProps {
  theme: string;
  changeTheme: () => void;
}

export default function SwitchThemeButton(props: SwitchThemeButtonProps) {
  return props.theme === "dark" ? (
    <div
      onClick={props.changeTheme}
      className={`
        hidden sm:flex items-center cursor-pointer 
        bg-gradient-to-r from-yellow-300 to-yellow-600 
        w-14 lg:w-24 h-8 p-1 rounded-full 
      `}
    >
      <div
        className={`flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full`}
      >
        {SunIcon(5)}
      </div>
      <div className={`hidden lg:flex items-center ml-2 text-white`}>
        <span>Light</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.changeTheme}
      className={`
        hidden sm:flex items-center cursor-pointer 
        bg-gradient-to-r from-gray-500 to-gray-900 
        w-14 lg:w-24 h-8 p-1 rounded-full 
      `}
    >
      <div
        className={`flex items-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full`}
      >
        {MoonIcon(4)}
      </div>
      <div className={`hidden lg:flex items-center ml-2 text-gray-300`}>
        <span>Dark</span>
      </div>
    </div>
  );
}
