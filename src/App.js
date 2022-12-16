import "./App.css";
import Header from "./components/Header";
import backdrop from "./pictures/backdrop.png";
import design from "./pictures/design.jpg";
import business from "./pictures/Business.jpg";
import development from "./pictures/development.jpg";
import it from "./pictures/IT.jpg";
import marketing from "./pictures/marketing.jpg";
import music from "./pictures/Music.jpg";
import personal from "./pictures/Personal_dev.jpg";
import Photography from "./pictures/Photography.jpg";
import Slideshow from "./components/Slideshow";
import {
  CircleStackIcon,
  GlobeAltIcon,
  PlayCircleIcon,
  PlayIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

function App() {
  return (
    <div className="relative bg-white">
      <header className="border-b shadow-md">
        {/* header */}
        <Header />
      </header>

      <br className="shadow-md" />
      {/* backdrop */}
      <div className="relative h-[300px]">
        <div>
          <img src={backdrop} alt="" className="w-screen object-fill" />
        </div>

        <div className="lg:absolute top-6 left-20 ">
          <div className="lg:bg-white lg:p-8 px-6 py-4 border-2 lg:shadow-sm lg:w-[420px]">
            <h1 className="font-bold lg:text-3xl leading-8 text-xl">
              Holiday sales end today
            </h1>
            <p className="text-sm text-gray-500 leading-5 mt-2">
              Courses are now as low as N3200. Get an extra 15% off the sale
              price with code GIFT15
            </p>
          </div>
        </div>

        <body className="px-10">
          <div className="pt-8 pb-4">
            <h1 className="font-bold text-xl lg:text-4xl pb-4 leading-5 tracking-tight">
              A broad selection of Courses
            </h1>
            <p className="text-lg tracking-wide">
              Choose from 213,000 online video courses with new additions
              published every month
            </p>
          </div>

          <div className="flex space-x-5 pb-5">
            <h3 className="font-bold cursor-pointer text-black hover:text-black">
              Python
            </h3>
            <h3 className="font-bold cursor-pointer text-gray-700 hover:text-black">
              Excel
            </h3>
            <h3 className="font-bold cursor-pointer text-gray-700 hover:text-black">
              Web Development
            </h3>
            <h3 className="font-bold cursor-pointer text-gray-700 hover:text-black">
              Javascript
            </h3>
            <h3 className="hidden lg:inline-flex font-bold cursor-pointer text-gray-700 hover:text-black">
              Data science
            </h3>
            <h3 className="hidden lg:inline-flex font-bold cursor-pointer text-gray-700 hover:text-black">
              AWS Certification
            </h3>
            <h3 className="hidden lg:inline-flex font-bold cursor-pointer text-gray-700 hover:text-black">
              Drawing
            </h3>
          </div>

          <div className="border border-gray-200 p-10">
            <div className="max-w-[700px] leading-7">
              <h1 className="font-bold text-2xl pb-4 lg:leading-5 lg:tracking-tight">
                Expand your career opportunities in Python
              </h1>
              <p>
                Take one of Udemy’s range of Python courses and learn how to
                code using this incredibly useful language. Its simple syntax
                and readability makes Python perfect for Flask, Django, data
                science, and machine learning. You’ll learn how to build
                everything from games to sites to apps. Choose from a range of
                courses that will appeal to
              </p>
            </div>

            <div className="py-5">
              <button className="py-2 px-3 border border-gray-800 hover:bg-gray-100 font-bold text-gray-800 capitalize">
                Explore Python
              </button>
            </div>

            <div>
              <Slideshow number={5} />
            </div>
          </div>

          <div className="mt-10 mb-10 py-3 px-4 bg-gray-100 hidden lg:flex lg:items-center lg:justify-between">
            <div className="flex w-[320px] items-center space-x-3">
              <div className="p-1 bg-gray-300 rounded-full">
                <PlayIcon className="w-7" />
              </div>
              <h1>Learn in-demand skills withn other 213,000 video courses</h1>
            </div>

            <div className="flex w-[320px] items-center space-x-3">
              <div className="p-1 bg-gray-300 rounded-full">
                <StarIcon className="w-7" />
              </div>
              <h1>Choose courses taught by real-world experts </h1>
            </div>

            <div className="flex w-[320px] items-center space-x-3">
              <div className="p-1 bg-gray-300 rounded-full">
                <CircleStackIcon className="w-7" />
              </div>
              <h1>
                Learn at your own pace, with lifetime access to desktop amd
                mobile
              </h1>
            </div>
          </div>

          {/* second courasel */}
          <div className="px-5 pb-10">
            <h1 className="font-bold text-2xl py-5">Students are viewing</h1>
            <Slideshow number={5} bestseller={"bestseller"} />
          </div>

          {/* categories */}
          <div className="px-5 pt-5">
            <h1 className="font-bold text-2xl py-5">Top Categories</h1>
            <div className="grid p-2 grid-cols-3 xl:grid-cols-4">
              <div className="md:p-4 p-5">
                <div className="flex flex-col card hover:scale-105 transition-all duration-150 ease-out">
                  <img src={design} alt="" className="cursor-pointer" />
                </div>
                <p className="font-bold pt-1">Design</p>
              </div>

              <div className="md:p-4 p-5">
                <div className="flex flex-col card hover:scale-105 transition-all duration-150 ease-out">
                  <img src={development} alt="" className="cursor-pointer" />
                </div>
                <p className="font-bold pt-1">Development</p>
              </div>

              <div className="md:p-4 p-5">
                <div className="flex flex-col card hover:scale-105 transition-all duration-150 ease-out">
                  <img src={marketing} alt="" className="cursor-pointer" />
                </div>
                <p className="font-bold pt-1">Marketing</p>
              </div>
              <div className="md:p-4 p-5">
                <div className="flex flex-col card hover:scale-105 transition-all duration-150 ease-out">
                  <img src={it} alt="" className="cursor-pointer" />
                </div>
                <p className="font-bold pt-1">IT & Software</p>
              </div>

              <div className="md:p-4 p-5">
                <div className="flex flex-col card hover:scale-105 transition-all duration-150 ease-out">
                  <img src={personal} alt="" className="cursor-pointer" />
                </div>
                <p className="font-bold pt-1">Personal Development</p>
              </div>

              <div className="md:p-4 p-5">
                <div className="flex flex-col card hover:scale-105 transition-all duration-150 ease-out">
                  <img src={business} alt="" className="cursor-pointer" />
                </div>
                <p className="font-bold pt-1">Business</p>
              </div>

              <div className="md:p-4 p-5">
                <div className="flex flex-col card hover:scale-105 transition-all duration-150 ease-out">
                  <img src={Photography} alt="" className="cursor-pointer" />
                </div>
                <p className="font-bold pt-1">Photography</p>
              </div>

              <div className="md:p-4 p-5">
                <div className="flex flex-col card hover:scale-105 transition-all duration-150 ease-out">
                  <img src={music} alt="" className="cursor-pointer" />
                </div>
                <p className="font-bold pt-1">Music</p>
              </div>
            </div>
          </div>

          {/* featured topics */}
          <div className="bg-gray-100 p-10">
            <h1 className="font-bold text-2xl py-5">
              Featured Topics by Categories
            </h1>

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-10 lg:gap-x-20 mx-auto">
              <div className="flex flex-col">
                <h1 className="font-bold text-lg py-3">Development</h1>
                <div className="my-2">
                  <h1 className="text-blue-500 cursor-pointer hover:text-blue-700  underline font-semibold">
                    Python
                  </h1>
                  <p className="text-sm text-gray-500">36,553,222 students</p>
                </div>

                <div className="my-2">
                  <h1 className="text-blue-500 cursor-pointer hover:text-blue-700  underline font-semibold">
                    Web Development
                  </h1>
                  <p className="text-sm text-gray-500">11,222,344</p>
                </div>

                <div className="my-2">
                  <h1 className="text-blue-500 cursor-pointer hover:text-blue-700  underline font-semibold">
                    Machine Learning
                  </h1>
                  <p className="text-sm text-gray-500">7,004,332</p>
                </div>
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold text-lg py-3">Business</h1>
                <div className="my-2">
                  <h1 className="text-blue-500 cursor-pointer hover:text-blue-700  underline font-semibold">
                    Financial Analysis
                  </h1>
                  <p className="text-sm text-gray-500">4,553,222 students</p>
                </div>

                <div className="my-2">
                  <h1 className="text-blue-500 cursor-pointer hover:text-blue-700  underline font-semibold">
                    SQL
                  </h1>
                  <p className="text-sm text-gray-500">5,222,344</p>
                </div>

                <div className="my-2">
                  <h1 className="text-blue-500 cursor-pointer hover:text-blue-700  underline font-semibold">
                    PMP
                  </h1>
                  <p className="text-sm text-gray-500">,704,492</p>
                </div>
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold text-lg py-3">IT and Software</h1>
                <div className="my-2">
                  <h1 className="text-blue-500 cursor-pointer hover:text-blue-700  underline font-semibold">
                    AWS Certification
                  </h1>
                  <p className="text-sm text-gray-500">6,002,222 students</p>
                </div>

                <div className="my-2">
                  <h1 className="text-blue-500 cursor-pointer hover:text-blue-700  underline font-semibold">
                    Ethical Hacking
                  </h1>
                  <p className="text-sm text-gray-500">10,222,344</p>
                </div>

                <div className="my-2">
                  <h1 className="text-blue-500 cursor-pointer hover:text-blue-700 underline font-semibold">
                    Cyber Security
                  </h1>
                  <p className="text-sm text-gray-500">3,997,332</p>
                </div>
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold text-lg py-3">Design</h1>
                <div className="my-2">
                  <h1 className="text-blue-500 cursor-pointer hover:text-blue-700 underline font-semibold">
                    Photoshop
                  </h1>
                  <p className="text-sm text-gray-500">10,909,012 students</p>
                </div>

                <div className="my-2">
                  <h1 className="text-blue-500 cursor-pointer hover:text-blue-700 underline font-semibold">
                    Graphic Design
                  </h1>
                  <p className="text-sm text-gray-500">3,381,344</p>
                </div>

                <div className="my-2">
                  <h1 className="text-blue-500 cursor-pointer hover:text-blue-700 underline font-semibold">
                    Drawing
                  </h1>
                  <p className="text-sm text-gray-500">2,401,332</p>
                </div>
              </div>
            </div>

            <button className="text-md font-bold border p-2 mt-5 border-black hover:bg-gray-300">
              Explore more topics
            </button>
          </div>

          {/* cta */}
          <div className="mx-auto pt-16">
            <div className="max-w-xl mx-auto items-center ">
              <h1 className="font-bold text-3xl my-2 text-center">
                Trusted by over 14,500 great teams
              </h1>
              <p className="my-2 text-center">
                Leading companies use the same courses to help employees keep
                their skills fresh
              </p>
            </div>

            <div className="flex space-x-5 justify-evenly items-center pt-5 pb-30">
              <img src="nasdaq-dark.svg" alt="" />
              <img src="volkswagen-dark.svg" alt="" />
              <img src="box-dark.svg" alt="" />
              <img src="netapp-dark.svg" alt="" />
              <img src="eventbrite-dark.svg" alt="" />
              <img src="tcs-dark.svg" alt="" />
            </div>
          </div>

          {/* promotion */}
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto gap-16 pt-40">
            <div className="">
              <div className="w-48">
                <img src="logo-ub.svg" alt="" />
              </div>

              <h1 className="text-3xl font-bold py-4 capitalize ">
                Upskill your team with Udemy Business
              </h1>
              <ul>
                <li className="list-disc p-2 text-lg">
                  Unlimited access to 19,000+ top Udemy courses, anytime,
                  anywhere
                </li>
                <li className="list-disc p-2 text-lg">
                  International course collection in 14 languages
                </li>
                <li className="list-disc p-2 text-lg">
                  Top certifications in tech and business
                </li>
              </ul>

              <div className="flex space-x-4">
                <button className="py-2 px-3 border bg-black text-white font-bold">
                  Get Udemy Business
                </button>
                <button className="py-2 px-3 border border-black font-bold hover:bg-gray-100">
                  Learn More
                </button>
              </div>
            </div>

            <div>
              <img src="promo.jpg" alt="" />
            </div>
          </div>

          {/* promo 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto gap-16 pt-40 mb-20 items-center">
            <div>
              <img src="instructor.jpg" alt="" />
            </div>

            <div className="">
              <h1 className="text-3xl font-bold py-2 capitalize ">
                Become an instructor
              </h1>
              <p className="p-2 text-lg">
                Instructors from around the world teach millions of students on
                Udemy. We provide the tools and skills to teach what you love.
              </p>
              <div className="flex space-x-4">
                <button className="py-2 px-3 my-2 border bg-black text-white font-bold">
                  Start teaching today
                </button>
              </div>
            </div>
          </div>
        </body>

        <footer className="bg-black/90">
          <div className="flex justify-between p-10">
            <div>
              <h1 className="cursor-pointer hover:underline py-1 text-sm text-white">
                Udemy Business
              </h1>
              <h1 className="cursor-pointer hover:underline py-1 text-sm text-white">
                Teach on Udemy
              </h1>
              <h1 className="cursor-pointer hover:underline py-1 text-sm text-white">
                Get the app
              </h1>
              <h1 className="cursor-pointer hover:underline py-1 text-sm text-white">
                About us
              </h1>
              <h1 className="cursor-pointer hover:underline py-1 text-sm text-white">
                Contact us
              </h1>
            </div>

            <div>
              <h1 className="cursor-pointer hover:underline py-1 text-sm text-white">
                Careers
              </h1>
              <h1 className="cursor-pointer hover:underline py-1 text-sm text-white">
                Blogs
              </h1>
              <h1 className="cursor-pointer hover:underline py-1 text-sm text-white">
                Help and Support
              </h1>
              <h1 className="cursor-pointer hover:underline py-1 text-sm text-white">
                Affiliate
              </h1>
              <h1 className="cursor-pointer hover:underline py-1 text-sm text-white">
                Investors
              </h1>
            </div>

            <div>
              <h1 className="cursor-pointer hover:underline py-1 text-sm text-white">
                Terms
              </h1>
              <h1 className="cursor-pointer hover:underline py-1 text-sm text-white">
                Privacy Policy
              </h1>
              <h1 className="cursor-pointer hover:underline py-1 text-sm text-white">
                Cookie Settings
              </h1>
              <h1 className="cursor-pointer hover:underline py-1 text-sm text-white">
                Sitemap
              </h1>
              <h1 className="cursor-pointer hover:underline py-1 text-sm text-white">
                Accessiblity statement
              </h1>
            </div>

            <div className="flex-end ">
              <button className="text-white flex items-center px-5 object-left py-1 border border-white flex-end">
                <GlobeAltIcon className="w-7 mr-1" />
                English
              </button>
            </div>
          </div>

          <div className="flex justify-between p-10">
            <img src="logo-udemy-inverted.svg" alt="" className="w-24 cursor-pointer" />

            <div>
              <h1 className="text-white">© 2022 Udemy, Inc.</h1>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
