"use client";

import CourseCategories from "@/components/course-categories";
import HeroSection from "@/components/landing-intro";
import NumberOverview from "@/components/number-overview";
import ValueSection from "@/components/value-section";
import VideoSection from "@/components/video-section";
import LayoutContainer from "@/layouts/container";
import Layout from "@/layouts/layout";

export default function Home() {
  return (
    <Layout>
      <LayoutContainer className="flex justify-center ">
        <HeroSection />
      </LayoutContainer>

      <LayoutContainer>
        <NumberOverview />
      </LayoutContainer>

      <LayoutContainer className="bg-gradient-to-r from-red-200 via-purple-200 to-blue-200 p-4 md:p-10">
        <ValueSection />
      </LayoutContainer>

      <LayoutContainer>
        <CourseCategories />
      </LayoutContainer>

      <LayoutContainer className="bg-gradient-to-r from-red-200 via-purple-200 to-blue-200 p-4 md:p-10">
        <VideoSection />
      </LayoutContainer>
    </Layout>
  );
}
