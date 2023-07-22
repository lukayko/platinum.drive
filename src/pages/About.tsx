import EmployeeCard from "../components/EmployeeCard";
import teamphoto from "../assets/others/team.jpg";
import { employees } from "../data/employeeData";

const About = () => {
  return (
    <div className="mt-24 w-[90%] h-auto mx-auto text-gray-500">
      <div>
        <h1 className="font-bold text-2xl text-tertiary">About Us</h1>
        <div className="max-w-[2048px] mt-4 w-full h-[325px] md:h-[550px] lg:h-[650px] mx-auto shadow-xl ">
          <img
            src={teamphoto}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h1 className="font-bold text-xl text-tertiary mt-4">
          Company History
        </h1>
        <p className="mt-4">
          Step into the world of opulence and elegance with our luxury car
          rental business in Bratislava. What started as a humble family-owned
          enterprise has evolved into a testament to unwavering dedication and a
          commitment to excellence over the course of a remarkable journey
          spanning a decade.
        </p>
        <p className="mt-4">
          From its modest beginnings, our company embraced a vision of providing
          unparalleled luxury car rental services to discerning clients. With an
          unwavering focus on delivering exceptional customer experiences, we
          quickly gained recognition for our impeccable standards and attention
          to detail. Every interaction, from the moment our clients step through
          our doors, is infused with warmth, professionalism, and a personalized
          touch that sets us apart.
        </p>
        <p className="mt-4">
          Over the years, our dedication to excellence propelled us to new
          heights. Today, we are proud to be a team of twelve passionate
          individuals, each sharing a deep love for automobiles and an
          unwavering commitment to customer satisfaction. Our carefully curated
          fleet showcases a collection of the most coveted luxury vehicles,
          meticulously maintained to ensure the utmost comfort, style, and
          performance for our esteemed clients.
        </p>
        <p className="mt-4">
          Recognizing the evolving needs and desires of our discerning
          clientele, we expanded our range of services to encompass more than
          just self-drive rentals. In 2021, we introduced our exclusive
          chauffeur services, where our experienced and professional drivers
          provide a seamless and luxurious journey for those who prefer to sit
          back and enjoy the ride. Whether it's a special occasion, a corporate
          event, or simply indulging in a touch of luxury, our chauffeur
          services guarantee an experience that is nothing short of
          extraordinary.
        </p>
        <p className="mt-4">
          Not content with resting on our laurels, we constantly strive to
          exceed expectations. That is why, in response to the growing demand
          for reliable vehicle transport services, we introduced our specialized
          vehicle transport division. Our team of experts ensures that your
          prized possession is handled with the utmost care, providing safe and
          secure transportation for your vehicles to any destination, near or
          far.
        </p>
        <p className="mt-4">
          As we reflect on our journey, we are humbled by the trust and loyalty
          our clients have bestowed upon us. Each milestone reached is a
          testament to the unwavering dedication and passion that drives our
          team. We remain committed to continually refining and expanding our
          services, seeking new ways to elevate the luxury car rental experience
          for our esteemed clientele.
        </p>
        <p className="mt-4">
          Discover the epitome of sophistication and unrivaled luxury with our
          distinguished luxury car rental business in Bratislava. From our
          humble roots to our current stature, we invite you to experience the
          pinnacle of automotive excellence and indulge in a world of luxury
          like no other.
        </p>
        <h1 className="font-bold text-xl text-tertiary mt-4">
          Meet Our Executives
        </h1>
        <div className="flex flex-col mb-4 md:flex-row w-full h-auto lg:h-[60vh] gap-6 justify-around">
          <EmployeeCard
            img={employees[0].img}
            name={employees[0].name}
            position={employees[0].position}
          />
          <EmployeeCard
            img={employees[1].img}
            name={employees[1].name}
            position={employees[1].position}
          />
          <EmployeeCard
            img={employees[2].img}
            name={employees[2].name}
            position={employees[2].position}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
