import { OurServicesCard } from "../components";
import { servicesData } from "../data/servicesData";

const OurServices = () => {
  return (
    <section className="mt-24 w-[90%] mx-auto">
      <OurServicesCard
        img={servicesData[0].img}
        heading={servicesData[0].heading}
        text={servicesData[0].text}
        btnText={servicesData[0].btnText}
        btnPath={servicesData[0].btnPath}
      />
      <OurServicesCard
        img={servicesData[1].img}
        heading={servicesData[1].heading}
        text={servicesData[1].text}
        btnText={servicesData[1].btnText}
        btnPath={servicesData[1].btnPath}
      />
      <OurServicesCard
        img={servicesData[2].img}
        heading={servicesData[2].heading}
        text={servicesData[2].text}
        btnText={servicesData[2].btnText}
        btnPath={servicesData[2].btnPath}
      />
      <OurServicesCard
        img={servicesData[3].img}
        heading={servicesData[3].heading}
        text={servicesData[3].text}
        btnText={servicesData[3].btnText}
        btnPath={servicesData[3].btnPath}
      />
    </section>
  );
};

export default OurServices;
