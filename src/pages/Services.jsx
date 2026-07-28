import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";

import ServiceHero from "../components/Services/ServiceHero";
import ProblemSolution from "../components/Services/ProblemSolution";
import Features from "../components/Services/Features";
import Industries from "../components/Services/Industries";
import TechStack from "../components/Services/TechStack";
import CTA from "../components/Services/CTA";

import { services } from "../components/Services/ServiceData";


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
