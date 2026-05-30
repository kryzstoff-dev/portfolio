"use client";

import {
  Box,
  Container,
  Grid,
} from "@mui/material";
import ConnectSection from "./components/ConnectSection";
import MainSection from "./components/MainSection";
import ProfileImageSection from "./components/ProfileImageSection";

function Home() {
  return (
    <Box className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 px-4">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }} className="text-center md:text-left">
            <MainSection />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} className="flex justify-center">
            <ProfileImageSection />
          </Grid>
        </Grid>

        <ConnectSection />
      </Container>
    </Box>
  );
}

export default Home;
