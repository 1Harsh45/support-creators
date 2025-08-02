import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100dvh] px-4 gap-8 text-white text-center">
        {/* Heading */}
        <div className="flex flex-wrap justify-center items-end text-4xl gap-2 md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Support Your Favorite Creators
          </span>
        </div>
        <p className="max-w-xl text-lg md:text-xl font-medium text-gray-300">
          Helping creators build, grow, and get funded by the people who believe in them.
        </p>

       <div className="flex gap-4 flex-wrap">
  <Link href="/login">
    <button
      type="button"
      className="text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 font-medium rounded-lg text-sm px-6 py-2.5 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg focus:outline-none"
    >
      Start Here
    </button>
  </Link>

  <Link href="/about">
    <button
      type="button"
      className="text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 font-medium rounded-lg text-sm px-6 py-2.5 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg focus:outline-none"
    >
      Read More
    </button>
  </Link>
</div>


      </div>
      {/* ************************************************************************************************* */}
      <div className="bg-white h-1 opacity-10"></div>
      {/* ************************************************************************************************* */}

      <div className="text-white container mx-auto py-16 px-6 md:px-0">
  <h2 className="text-3xl text-center font-extrabold mb-20 leading-tight">
    Empowering Creators, One Contribution at a Time
  </h2>
  <div className="flex flex-col md:flex-row gap-10 justify-around items-center">
    {/* Creator Setup */}
    <div className="item space-y-4 flex flex-col items-center text-center max-w-[250px]">
      <img
        src="/man.gif"
        alt="creator setup"
        className="bg-white rounded-full w-[82px] md:w-[90px]"
      />
      <p className="font-semibold text-lg">Set Up Your Profile</p>
      <p className="text-sm text-gray-300">
        Create your personalized creator page in minutes and start accepting support.
      </p>
    </div>

    {/* Receive Support */}
    <div className="item space-y-4 flex flex-col items-center text-center max-w-[250px]">
      <img
        src="/payment.gif"
        alt="receive donations"
        className="bg-white rounded-full w-[82px] md:w-[90px]"
      />
      <p className="font-semibold text-lg">Receive Contributions</p>
      <p className="text-sm text-gray-300">
        Get instant support from your community with secure and transparent payments.
      </p>
    </div>

    {/* Build Community */}
    <div className="item space-y-4 flex flex-col items-center text-center max-w-[250px]">
      <img
        src="/group.gif"
        alt="build community"
        className="bg-white rounded-full w-[82px] md:w-[90px]"
      />
      <p className="font-semibold text-lg">Build Your Tribe</p>
      <p className="text-sm text-gray-300">
        Engage with fans who truly value your work and want to support your journey.
      </p>
    </div>
  </div>
</div>

      {/* ************************************************************************************************* */}
      <div className="bg-white h-1 opacity-10"></div>
      {/* ************************************************************************************************* */}

      <div className="text-white container py-14 mx-auto">
  <h2 className="text-2xl text-center font-bold">
    Learn More About Us
  </h2>
  <div className="px-1 md:px-5 mt-12">
    <p className="p-4 text-gray-200 text-md text-center font-sans">
      At <span className="font-semibold">SupportCreators</span>, we empower creators, developers, artists, and innovators by connecting them directly with the people who believe in their work. Our platform is built to help creators receive support, grow their audience, and stay focused on what they love doing most — creating.
    </p>
    <p className="p-4 text-gray-200 text-md text-center font-sans">
      Whether you’re building a product, sharing educational content, making music, or inspiring change, <span className="font-semibold">SupportCreators</span> provides the tools to turn your passion into a sustainable journey. We’re more than a donation platform — we’re a community-driven movement built around real impact and recognition.
    </p>
    <p className="p-4 text-gray-200 text-md text-center font-sans">
      We believe in the power of direct support and authentic connections. With every contribution, fans become part of the creators journey — helping bring bold ideas to life, one supporter at a time.
    </p>
  </div>
</div>

    </>
  )
}

export default HomePage