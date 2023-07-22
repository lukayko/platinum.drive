type CarCategory = {
  children: JSX.Element;
  heading: string;
  paragraph: string;
};

const CarCategory = ({
  children,
  heading,
  paragraph,
}: CarCategory): JSX.Element => {
  return (
    <div className="my-4 md:my-6 lg:my-8">
      <h1 className="font-bold text-tertiary text-lg md:text-2xl lg:text-3xl">
        {heading}
      </h1>
      <p className="hidden md:mt-1 lg:mt-2 text-gray-500 md:text-base md:block">
        {paragraph}
      </p>
      <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-6 lg:mt-8 bg-gray-100 w-full md:py-4 lg:py-6 rounded-xl">
        {children}
      </div>
    </div>
  );
};

export default CarCategory;
