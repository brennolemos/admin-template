import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notifications() {
  const { changeTheme } = useAppData();

  return (
    <div>
      <Layout title="Notifications" subtitle="Manage all your notifications">
        <button onClick={changeTheme}>Change Theme</button>
      </Layout>
    </div>
  );
}
