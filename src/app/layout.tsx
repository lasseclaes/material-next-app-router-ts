import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UpcomingIcon from "@mui/icons-material/Upcoming";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import DeleteIcon from "@mui/icons-material/Delete";
import SchoolIcon from "@mui/icons-material/School";
import InsightsIcon from "@mui/icons-material/Insights";
import MoneyIcon from "@mui/icons-material/Money";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ViewListIcon from "@mui/icons-material/ViewList";
// import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";
// import SettingsIcon from "@mui/icons-material/Settings";
// import SupportIcon from "@mui/icons-material/Support";
// import LogoutIcon from "@mui/icons-material/Logout";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
// import { NodeNextRequest } from "next/dist/server/base-http/node";

export const metadata = {
  title: "Exam ordering system",
  description: "TBD",
};
//console.log("metadata", metadata);

const DRAWER_WIDTH = 240;

const LINKS = [
  {
    text: "Bestillinger",
    href: "/bestillinger",
    icon: UpcomingIcon,
    submenu: [
      { text: "Arkiv", href: "/bestillinger/arkiv", icon: InventoryIcon },
      { text: "Slettede", href: "/bestillinger/slettede", icon: DeleteIcon },
    ],
  },
  { text: "Eksamner", href: "/eksamner", icon: SchoolIcon },
  { text: "Statistik", href: "/statistik", icon: InsightsIcon },
  { text: "Fakturering", href: "/fakturering", icon: MoneyIcon },
  { text: "Rush Hour", href: "/rush_hour", icon: NotificationsActiveIcon },
  { text: "Dubletter", href: "/dubletter", icon: ContentCopyIcon },
  { text: "Udtræk", href: "/udtraek", icon: ViewListIcon },
];

/* const PLACEHOLDER_LINKS = [
  { text: "Settings", icon: SettingsIcon },
  { text: "Support", icon: SupportIcon },
  { text: "Logout", icon: LogoutIcon },
]; */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body>
        <ThemeRegistry>
          {/*   <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: "background.paper" }}>
              <DashboardIcon
                sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
              />
              <Typography
                variant="h6"
                noWrap
                // component="div"
                color="black"
                component={Link}
                href="/"
              >
                Eksamensbestillinger
              </Typography>
            </Toolbar>
          </AppBar> */}
          <Box
            className="wrapper"
            sx={{
              maxWidth: "1600px",
            }}
          >
            <Drawer
              sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: DRAWER_WIDTH,
                  boxSizing: "border-box",
                  // top: ["48px", "56px", "64px"],
                  height: "auto",
                  bottom: 0,
                },
              }}
              variant="permanent"
              anchor="left"
            >
              <Typography
                variant="h6"
                noWrap
                // component="div"
                color="black"
                component={Link}
                href="/"
                sx={{
                  textDecoration: "none",
                  p: 2,
                  "&:hover": {
                    // textDecoration: "underline",
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    // backgroundColor: "blue",
                  },
                }}
              >
                <Typography component="h1">Eksamensbestillinger</Typography>
              </Typography>
              {/* <Divider /> */}
              <List>
                {LINKS.map(({ text, href, icon: Icon, submenu }) => (
                  <ListItem
                    key={href}
                    disablePadding
                    sx={{
                      // overflow: "hidden",
                      flexWrap: "wrap",
                    }}
                  >
                    <ListItemButton component={Link} href={href}>
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                    {!submenu ? null : (
                      <List
                        sx={{
                          my: 0,
                          py: 0,
                          width: "100%",
                          overflowX: "hidden",
                        }}
                      >
                        {submenu?.map((el) => (
                          <ListItem
                            key={el.href}
                            sx={{
                              ml: 2,
                              my: 0,
                              py: 0,
                            }}
                          >
                            <ListItemButton component={Link} href={el.href}>
                              <ListItemIcon>
                                <Icon component={el.icon} />
                              </ListItemIcon>
                              <ListItemText primary={el.text} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </ListItem>
                ))}
              </List>
              {/*  <Divider sx={{ mt: "auto" }} /> */}
              {/*           <List>
              {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List> */}
            </Drawer>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                bgcolor: "background.default",
                ml: `${DRAWER_WIDTH}px`,
                // mt: ["48px", "56px", "64px"],
                p: 3,
              }}
            >
              {children}
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
