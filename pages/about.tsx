/* This example requires Tailwind CSS v2.0+ */
import { getIsMobile } from "@/utils/misc";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "What technologies do you work with?",
    answer:
      "React, Typescript, Python, Django, and PostgreSQL. Recently I've also started exploring Next.js, Supabase, and Golang",
  },
  {
    question: "Where and what did you study",
    answer:
      "Currenly a final (5th) year student completing my MSci Software Engineering at the university of Glasgow",
  },

  {
    question: "Where do you work?",
    answer: "I will join Jump Trading LLC after Graduation",
  },
  {
    question: "Where did you work previously",
    answer:
      "I have completed a summer internship at Jump Trading, a 12-month full-time industrial placement at JPMorgan and a 9-month part-time internship at Glasgow University Software Services",
  },

  {
    question: "Where are you originally from",
    answer: "Helsinki, Finland",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function About() {
  return (
    <Transition
      as="div"
      appear={true} //THIS will make the transition run everytime the component is rendered
      show={true}
      enter="transition-all ease-out duration-500"
      enterFrom={"opacity-0 scale-50"}
      enterTo={"opacity-100 scale-100"}
    >
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <dl className="mt-6 ">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg ">
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-primary-100 px-4 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:bg-primary-500 dark:hover:bg-purple-500">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center text-gray-900 dark:text-gray-100">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12 ">
                      <p className="px-6 text-base text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </Transition>
  );
}
