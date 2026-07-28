import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";

import ServiceHero from "../components/ServicePage/ServiceHero";
import ProblemSolution from "../components/ServicePage/ProblemSolution";
import Features from "../components/ServicePage/Features";
import Industries from "../components/ServicePage/Industries";
import TechStack from "../components/ServicePage/TechStack";
import CTA from "../components/ServicePage/CTA";

import { services } from "../components/ServicePage/serviceData";

function Services() {
  const service = services.web;

  return (
    <>
     <SEO
        title="Riyadvi | Software Development Company"
        description="Riyadvi provides web development, UI/UX design, AI solutions and digital marketing services."
        keywords="software company, web development, react, nodejs, ui ux"
        url="https://riyadvi.com/"/>

    <MainLayout>
      <ServiceHero service={service} />
      <ProblemSolution service={service} />
      <Features service={service} />
      <Industries service={service} />
      <TechStack service={service} />
      <CTA service={service} />
    </MainLayout>
    </>
  );
}

export default Services;