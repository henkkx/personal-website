import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { PageSEO } from "@/components/seo";
import { Transition } from "@headlessui/react";
import { getIsMobile } from "@/utils/misc";

export default function Home({ isMobile }) {
  return (
    <>
      <PageSEO
        title="Henrik Hiltunen"
        description="Henrik Hiltunen's personal website and blog"
      />
      <Transition
        as={Fragment}
        appear={true} //THIS will make the transition run everytime the component is rendered
        show={true}
      >
        <div className="h-full w-full pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <Transition.Child
                enter="transition-all ease-out duration-1000"
                enterFrom={
                  isMobile ? "opacity-0 scale-50" : "transform translate-x-full"
                }
                enterTo={
                  isMobile ? "opacity-100 scale-100" : "transform translate-x-0"
                }
              >
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:pt-10 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                  <div className="lg:py-10">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:mt-5 sm:text-6xl xl:text-6xl">
                      <span className="block pb-12 ">
                        Hey, I'm{" "}
                        <span className="text-primary-400">Henrik!</span> 👋
                      </span>
                      I'm a Full Stack
                      <span className="block text-primary-400 underline decoration-primary-300 decoration-double">
                        Software Engineer
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      I'm final year MSci student at the{" "}
                      <span className="bg-blue-900 text-white">
                        University of Glasgow
                      </span>
                      . During my studies I have completed multiple software
                      engineering internships, among othes, at{" "}
                      <span className="underline decoration-primary-300 decoration-solid">
                        Jump Trading
                      </span>{" "}
                      and{" "}
                      <span className="underline decoration-primary-300 decoration-solid">
                        JPMorgan Chase & Co.
                      </span>
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <div className="sm:flex">
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <Link href="/blog">
                            <a className="focus:ring-indigo-500 mt-3 w-full rounded-lg border border-gray-900  bg-gray-900 px-6 py-3 font-medium text-white drop-shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:border-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center ">
                              Read some of my work
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>

              <Transition.Child
                enter="transform transition duration-[1000ms]"
                enterFrom="opacity-0 scale-50"
                enterTo="opacity-100 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 scale-100 "
                leaveTo="opacity-0 scale-95 "
              >
                <div className="h-500px w-400px mt-10 px-4 drop-shadow-lg lg:relative lg:ml-20">
                  <Image
                    className="lg:max-h-sm sm:max-h-xs rounded-xl  sm:max-w-xs lg:absolute lg:inset-y-20 lg:left-0 lg:max-w-sm"
                    src="/images/profile-picture.png"
                    alt="A Smiling man wearing a shirt and a jacket, sitting in a restaurant"
                    height="500"
                    width="400"
                  />
                </div>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

Home.getInitialProps = ({ req }) => {
  const isMobile = getIsMobile(req);
  return { isMobile };
};
