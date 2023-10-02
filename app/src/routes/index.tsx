import { Outlet } from "react-router-dom";
import Layout from "./Layout";

const menu = [
  {
    label: "DatePicker",
    link: "/date-picker",
  },
  {
    label: "RT-Editor",
    link: "/rt-editor",
  },
];

export default function Root() {
  return (
    <Layout menu={menu}>
      <Outlet />
    </Layout>
  );
}
