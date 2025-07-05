import CaseStudies from "@/Components/CaseStudies/CaseStudies";
import Hero from "@/Components/Hero/Hero";
import Parteners from "@/Components/Parteners/Parteners";
import Review from "@/Components/Review/Review";
import Services from "@/Components/Services/Services";

export default function Home() {


  return (
    <main>
      <Hero/>
      <Parteners/>
      <Services/>
      <CaseStudies/>
      <Review/>
    </main>
  )
}
