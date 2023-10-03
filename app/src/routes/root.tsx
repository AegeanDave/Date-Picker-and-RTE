import { Outlet } from "react-router-dom";
import Layout from "./layout";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditNoteIcon from "@mui/icons-material/EditNote";

const menu = [
  {
    label: "DatePicker",
    link: "/date-picker",
    icon: <CalendarMonthIcon />,
  },
  {
    label: "RT-Editor",
    link: "/rt-editor",
    icon: <EditNoteIcon />,
  },
];

export default function Root() {
  return (
    <Layout menu={menu}>
      <Outlet />
    </Layout>
  );
}
