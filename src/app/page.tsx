import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
/* import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle"; */
import MediaCard from "@/components/MediaCard";
import ExamOrdersTable from "@/components/ExamOrdersDataGrid";
import ExamOrdersDataGrid from "@/components/ExamOrdersDataGrid";
import Tabsljn from "@/components/Tabsljn";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";
import Searchljn from "@/components/Searchljn";

export default function HomePage() {
  return (
    <Box
      sx={
        {
          // display: "flex",
        }
      }
    >
      {/* <AppBar position="static" component="header"> */}
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography component="h2" variant="h3" sx={{ mb: 4 }}>
          Bestillinger
        </Typography>
        <Searchljn />
      </Toolbar>
      {/* </AppBar> */}
      <Tabsljn />
      <ExamOrdersDataGrid />
    </Box>
    /*  <Box
        sx={{
          display: "flex",
        }}
      >
        <Box>
          <Grid container rowSpacing={3} columnSpacing={3} className="lcj">
            <Grid xs={6}>
              <MediaCard
                heading="CMYK"
                text="The CMYK color model (also known as process color, or four color) is a subtractive color model, based on the CMY color model, used in color printing, and is also used to describe the printing process itself."
              />
            </Grid>
            <Grid xs={6}>
              <MediaCard
                heading="HSL and HSV"
                text="HSL (for hue, saturation, lightness) and HSV (for hue, saturation, value; also known as HSB, for hue, saturation, brightness) are alternative representations of the RGB color model, designed in the 1970s by computer graphics researchers."
              />
            </Grid>
            <Grid xs={6}>
              <MediaCard
                heading="RGB"
                text="An RGB color space is any additive color space based on the RGB color model. RGB color spaces are commonly found describing the input signal to display devices such as television screens and computer monitors."
              />
            </Grid>
            <Grid xs={6}>
              <MediaCard
                heading="CIELAB"
                text="The CIELAB color space, also referred to as L*a*b*, was intended as a perceptually uniform space, where a given numerical change corresponds to a similar perceived change in color."
              />
            </Grid>
          </Grid>
        </Box>
      </Box> */
  );
}
