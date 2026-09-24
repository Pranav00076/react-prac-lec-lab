import { useState } from 'react'

export default function Info() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <main>
        <div className="my-20">
          <div className="mx-auto max-w-7xl bg-white px-4 text-center sm:px-0">
            <h2 className="mx-auto text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Audio + Video Podcasts =
              <span className="text-indigo-600"> 8x more listeners.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg font-medium text-gray-800">
              Get access to a diverse pool of audiences across multiple
              platforms with just a single click on our podcast studio software!
            </p>
          </div>
        </div>

        <div className="relative my-12 w-full overflow-hidden">
          <div className="flex w-[200%] animate-scroll gap-4 sm:gap-8">
            <div className="flex w-[120px] flex-none items-center justify-center sm:w-[200px]">
              <img
                className="max-h-12 w-auto object-contain sm:max-h-24"
                src="https://files.hubhopper.com/studio-assets/images/2025-12-17/spotify.svg"
                alt=""
              />
            </div>
            <div className="flex w-[120px] flex-none items-center justify-center sm:w-[200px]">
              <img
                className="max-h-12 w-auto object-contain sm:max-h-24"
                src="https://files.hubhopper.com/studio-assets/images/2025-12-17/spotify.svg"
                alt=""
              />
            </div>
            <div className="flex w-[120px] flex-none items-center justify-center sm:w-[200px]">
              <img
                className="max-h-12 w-auto object-contain sm:max-h-24"
                src="https://files.hubhopper.com/studio-assets/images/2025-12-17/spotify.svg"
                alt=""
              />
            </div>
            <div className="flex w-[120px] flex-none items-center justify-center sm:w-[200px]">
              <img
                className="max-h-12 w-auto object-contain sm:max-h-24"
                src="https://files.hubhopper.com/studio-assets/images/2025-12-17/spotify.svg"
                alt=""
              />
            </div>
            <div className="flex w-[120px] flex-none items-center justify-center sm:w-[200px]">
              <img
                className="max-h-12 w-auto object-contain sm:max-h-24"
                src="https://files.hubhopper.com/studio-assets/images/2025-12-17/spotify.svg"
                alt=""
              />
            </div>
            <div className="flex w-[120px] flex-none items-center justify-center sm:w-[200px]">
              <img
                className="max-h-12 w-auto object-contain sm:max-h-24"
                src="https://files.hubhopper.com/studio-assets/images/2025-12-17/spotify.svg"
                alt=""
              />
            </div>
            <div className="flex w-[120px] flex-none items-center justify-center sm:w-[200px]">
              <img
                className="max-h-12 w-auto object-contain sm:max-h-24"
                src="https://files.hubhopper.com/studio-assets/images/2025-12-17/spotify.svg"
                alt=""
              />
            </div>
            <div className="flex w-[120px] flex-none items-center justify-center sm:w-[200px]">
              <img
                className="max-h-12 w-auto object-contain sm:max-h-24"
                src="https://files.hubhopper.com/studio-assets/images/2025-12-17/spotify.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-7xl pt-6 sm:pt-12 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6 text-center">
                  <dt className="text-sm/6 text-white">
                    Global Listens on Podcasts Hosted with Us
                  </dt>
                  <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                    <span>1,100 M+</span>
                  </dd>
                </div>

                <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6 text-center">
                  <dt className="text-sm/6 text-white">
                    Hours of Content Made Live Through Hubhopper
                  </dt>
                  <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                    <span>24 M</span>
                  </dd>
                </div>

                <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6 text-center">
                  <dt className="text-sm/6 text-white">
                    Brands That Trust Us to Amplify Their Impact
                  </dt>
                  <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                    <span>40 +</span>
                  </dd>
                </div>

                <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6 text-center">
                  <dt className="text-sm/6 text-white">
                    Years in the Industry
                  </dt>
                  <dd className="order-first text-5xl font-semibold tracking-tight text-white">
                    <span>10 +</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="relative bg-white pt-12 sm:pt-24">
          <div>
            <div className="relative isolate overflow-hidden">
              <img
                src="https://files.hubhopper.com/studio-assets/images/2025-12-17/bg-wall.svg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />

              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden sm:-top-80 blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    animation:
                      "20s linear 0s infinite normal none running rotate",
                  }}
                ></div>
              </div>
            </div>

            <div className="mx-auto max-w-6xl px-6 lg:px-8 z-10">
              <div className="mx-auto max-w-2xl py-12 sm:py-24">
                <div className="text-center">
                  <h2 className="mx-auto text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Unlimited Podcasts & <br /> Downloads with{" "}
                    <span className="text-indigo-600">Zero limits!</span>
                  </h2>
                  <p className="mx-auto mt-6 max-w-4xl text-lg font-medium text-gray-800">
                    Hubhopper lets you unleash your podcasting potential to the
                    fullest. Our platform offers limitless possibilities; no
                    caps on the number of podcasts you create, how much storage
                    you use, or the hours you upload. As your downloads
                    skyrocket, you won’t pay a penny more on our podcast
                    software platform.
                  </p>
                  <a
                    href="/pricing"
                    className="inline-flex items-center text-xl font-semibold text-indigo-600 hover:text-indigo-500 mt-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-6 w-6 mr-2"
                    >
                      <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684ZM13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z"></path>
                    </svg>
                    Try for free <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-24 sm:pt-36 mb-10">
              <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-8 text-center shadow-2xl sm:rounded-3xl sm:px-16 sm:py-16">
                  <p className="mx-auto mt-6 max-w-4xl text-sm font-medium text-gray-100 sm:text-xl">
                    “Gautam and the Hubhopper team have built a world-class
                    product. They are a partner in creator success and combine
                    products and services seamlessly.”
                  </p>
                  <div className="mx-auto mt-12 flex items-center justify-center gap-x-3">
                    <img
                      src="https://files.hubhopper.com/studio-assets/images/2025-12-17/rishi.png"
                      className="size-8 flex-none rounded-full bg-gray-800"
                    />
                    <h3 className="flex font-semibold text-gray-100">
                      Rishi Malhotra{" "}
                      <span className="text-xl text-indigo-600">/</span>{" "}
                      <span className="text-gray-500">
                        @Luminary CEO & Founder JioSaavn.
                      </span>
                    </h3>
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-8 -left-8 -z-10 transform-gpu"
                    >
                      <img src="https://files.hubhopper.com/studio-assets/images/2025-12-17/Pattern.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block max-w-6xl mx-auto">
              <div className="relative flex flex-col md:flex-row">
                <div className="sticky top-0 flex text-gray-300 h-screen w-full items-center px-8 md:w-1/2">
                  <div className="relative -mt-[25rem] w-full">
                    <div className="absolute left-0 top-0 max-w-xl">
                      <h2 className="mb-6 text-lg sm:text-4xl font-bold text-gray-900">
                        Don't Just Be Heard!{" "}
                        <span className="text-indigo-600">
                          Be Seen with Video Podcasts!
                        </span>
                      </h2>
                      <p className="mb-8 text-lg leading-relaxed text-gray-600">
                        With Hubhopper, your podcast distribution becomes
                        effortless. Hubhopper offers you a free podcast
                        application and lets you publish audio and video
                        podcasts to 15+ platforms with just one click. Sign up
                        to track real-time analytics and grow your fan base!
                      </p>
                      <a
                        href="/signup"
                        className="inline-flex items-center text-lg font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Get started <span className="ml-2">→</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative w-full md:w-1/2">
                  <div
                    className="sticky top-0 flex h-screen items-center justify-end"
                    data-index="0"
                  >
                    <div className="flex max-h-[60%] w-full max-w-[70%] justify-end">
                      <img
                        src="https://files.hubhopper.com/studio-assets/images/2025-12-17/slidertab1.png"
                        alt="Don't Just Be Heard!"
                        className="h-full object-contain"
                      />
                    </div>
                  </div>

                  <div
                    className="sticky top-0 flex h-screen items-center justify-end"
                    data-index="1"
                  >
                    <div className="flex max-h-[60%] w-full max-w-[70%] justify-end">
                      <img
                        src="https://files.hubhopper.com/studio-assets/images/2025-12-17/slidertab2.png"
                        alt="A Personalized Home"
                        className="h-full object-contain"
                      />
                    </div>
                  </div>

                  <div
                    className="sticky top-0 flex h-screen items-center justify-end"
                    data-index="2"
                  >
                    <div className="flex max-h-[60%] w-full max-w-[70%] justify-end">
                      <img
                        src="https://files.hubhopper.com/studio-assets/images/2025-12-17/slidertab3.png"
                        alt="Your Podcast's"
                        className="h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-6  md:mt-24 lg:mt-28">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-5xl">
                <span className="text-gray-800"> Podcasting made easy</span>{" "}
                with AI
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-800 font-medium">
                Make better use of content creation time with the help of
                Hubhopper’s AI tools, the best platform for podcasts.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-8">
              <div className="relative flex items-center space-x-3 rounded-2xl bg-[#f9f7fe] pl-10 py-5 shadow-sm ring-1 ring-neutral-200/50 md:shadow focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div className="flex flex-col sm:flex-row lg:items-center w-full">
                  <div className="sm:w-2/3 flex flex-col justify-center max-w-[18rem] text-center sm:text-left">
                    <div className="text-2xl font-bold text-gray-900">
                      <p>
                        {" "}
                        Podcast Name <br /> Generator{" "}
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-800">
                      <p>
                        {" "}
                        The right name for your podcast <br /> with a few simple
                        cues.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="w-[80%] sm:w-2/5 ml-auto mt-16 sm:mt-0">
                    <img
                      src="https://files.hubhopper.com/studio-assets/images/2025-12-17/ai1.svg "
                      alt="Maple organizer base with slots, supporting white polycarbonate trays of various sizes."
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex items-center space-x-3 rounded-2xl bg-[#ebecfe] pl-10 py-5 shadow-sm ring-1 ring-neutral-200/50 md:shadow focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div className="flex flex-col sm:flex-row lg:items-center w-full">
                  <div className="sm:w-2/3 flex flex-col justify-center max-w-[18rem] text-center sm:text-left">
                    <div className="text-2xl font-bold text-gray-900">
                      <p>
                        Generate <br /> Transcripts
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-800">
                      <p>
                        Automatic transcriptions for <br /> over 20
                        languages{" "}
                      </p>
                    </div>
                  </div>
                  <div className="w-[80%] sm:w-2/5 ml-auto mt-16 sm:mt-0">
                    <img
                      src="https://files.hubhopper.com/studio-assets/images/2025-12-17/ai2.svg "
                      alt="Team collaborating on a project, surrounded by tools and resources."
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex items-center space-x-3 rounded-2xl bg-[#ebecfe] pl-10 py-5 shadow-sm ring-1 ring-neutral-200/50 md:shadow focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div className="flex flex-col sm:flex-row lg:items-center w-full">
                  <div className="sm:w-2/3 flex flex-col justify-center max-w-[18rem] text-center sm:text-left">
                    <div className="text-2xl font-bold text-gray-900">
                      <p>
                        No more <br /> ums and ahs.
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-800">
                      <p>
                        Don’t worry about the filler words, <br /> we’ll remove
                        them for you.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="w-[80%] sm:w-2/5 ml-auto mt-16 sm:mt-0">
                    <img
                      src="https://files.hubhopper.com/studio-assets/images/2025-12-17/ai3.svg "
                      alt="Workflow automation tools visualized in an intuitive dashboard."
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex items-center space-x-3 rounded-2xl bg-[#ebecfe] pl-10 py-5 shadow-sm ring-1 ring-neutral-200/50 md:shadow focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div className="flex flex-col sm:flex-row lg:items-center w-full">
                  <div className="sm:w-2/3 flex flex-col justify-center max-w-[18rem] text-center sm:text-left">
                    <div className="text-2xl font-bold text-gray-900">
                      <p>
                        One-click podcast <br /> promotion collaterals
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-800">
                      <p>
                        Get transcripts, show notes, and social <br /> media
                        captions to market your podcast.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="w-[80%] sm:w-2/5 ml-auto mt-16 sm:mt-0">
                    <img
                      src="https://files.hubhopper.com/studio-assets/images/2025-12-17/ai4.svg "
                      alt="Analytics dashboard showing key metrics and growth trends."
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-6 flex items-center justify-center gap-x-6">
              <a
                href="/pricing"
                className="rounded-md bg-gray-800 px-10 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                target="_blank"
              >
                Try for free
              </a>
            </div>
          </div>

          <div className="pt-24 sm:pt-36">
            <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-8 text-center shadow-2xl sm:rounded-3xl sm:px-16 sm:py-16">
                <p className="mx-auto mt-6 max-w-4xl text-sm font-medium text-gray-100 sm:text-xl">
                  “For as long as I’ve been part of the podcasting in India (a
                  little over 8 years now), Hubhopper has been deeply invested
                  in the podcasting space. One of the few and first homegrown
                  Indian podcasting apps, they lit the way and held fort for all
                  those who wanted to create a podcast. The independent
                  podcaster will find a safe haven and the tools that they
                  require to not just educate themselves about how to create
                  their show, but also to make it a reality.”
                </p>
                <div className="mx-auto mt-12 flex items-center justify-center gap-x-3">
                  <img
                    src="https://files.hubhopper.com/studio-assets/images/2025-12-17/mae.png"
                    className="size-8 flex-none rounded-full bg-gray-800"
                  />
                  <h3 className="flex font-semibold text-gray-100">
                    Mae Thomas{" "}
                    <span className="text-xl text-indigo-600">/</span>{" "}
                    <span className="text-gray-500">@maedininda</span>
                  </h3>
                </div>
                <div
                  className="absolute -bottom-8 -left-8 -z-10 transform-gpu"
                  aria-hidden="true"
                >
                  <img src="https://files.hubhopper.com/studio-assets/images/2025-12-17/Pattern.svg" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-12 px-6 pt-24 text-center sm:mb-20 sm:pt-36 lg:px-8">
              <h2 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">
                <span className="text-gray-800">Why choose</span>
                <span className="font-kimberley text-indigo-600">
                  Hubhopper?
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-gray-800">
                Podcasting is picking up steam but not every podcast hosting
                platform is evolving. Hubhopper stands out and here’s our
                founder explaining why under 3 minutes.
              </p>
            </div>

            <div className="mx-auto h-full w-full max-w-6xl px-4">
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://player.vimeo.com/video/1071722996?h=f753a12e7d&badge=0&autopause=0&player_id=0&app_id=58479"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 h-full w-full"
                  title="Hubhopper's Brand Video"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-24 sm:mt-36">
            <div className="overflow-hidden bg-gray-900">
              <ul
                className="
            tab-list relative mx-auto mt-8 flex w-fit items-center
            px-2 sm:px-8 py-3 gap-3 sm:gap-10
            rounded-full min-w-xl
            bg-transparent sm:bg-gray-800
            overflow-hidden sm:overflow-visible
            scrollbar-hide capitalize
            ring-1 ring-gray-600/50
          "
              >
                <li className={`tab-item text-center flex-shrink-0 transition-all pb-1 ${activeTab === 0 ? 'border-b-2 border-indigo-400' : ''}`}>
                  <button
                    onClick={() => setActiveTab(0)}
                    className={`tab-trigger block w-full whitespace-nowrap text-sm sm:text-base font-medium focus:outline-none focus:ring-0 transition-colors ${activeTab === 0 ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                  >
                    Easy to Use
                  </button>
                </li>

                <li className={`tab-item text-center flex-shrink-0 transition-all pb-1 ${activeTab === 1 ? 'border-b-2 border-indigo-400' : ''}`}>
                  <button
                    onClick={() => setActiveTab(1)}
                    className={`tab-trigger block w-full whitespace-nowrap text-sm sm:text-base font-medium focus:outline-none focus:ring-0 transition-colors ${activeTab === 1 ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                  >
                    Data Analytics
                  </button>
                </li>



                <li className={`tab-item text-center flex-shrink-0 transition-all pb-1 ${activeTab === 2 ? 'border-b-2 border-indigo-400' : ''}`}>
                  <button
                    onClick={() => setActiveTab(2)}
                    className={`tab-trigger block w-full whitespace-nowrap text-sm sm:text-base font-medium focus:outline-none focus:ring-0 transition-colors ${activeTab === 2 ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                  >
                    Audio Editor
                  </button>
                </li>

                <li className={`tab-item text-center flex-shrink-0 transition-all pb-1 ${activeTab === 3 ? 'border-b-2 border-indigo-400' : ''}`}>
                  <button
                    onClick={() => setActiveTab(3)}
                    className={`tab-trigger block w-full whitespace-nowrap text-sm sm:text-base font-medium focus:outline-none focus:ring-0 transition-colors ${activeTab === 3 ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                  >
                    Embed Player
                  </button>
                </li>

                <li className={`tab-item text-center flex-shrink-0 transition-all pb-1 ${activeTab === 4 ? 'border-b-2 border-indigo-400' : ''}`}>
                  <button
                    onClick={() => setActiveTab(4)}
                    className={`tab-trigger block w-full whitespace-nowrap text-sm sm:text-base font-medium focus:outline-none focus:ring-0 transition-colors ${activeTab === 4 ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                  >
                    AI Clip Generation
                  </button>
                </li>

                <li className={`tab-item text-center flex-shrink-0 transition-all pb-1 ${activeTab === 5 ? 'border-b-2 border-indigo-400' : ''}`}>
                  <button
                    onClick={() => setActiveTab(5)}
                    className={`tab-trigger block w-full whitespace-nowrap text-sm sm:text-base font-medium focus:outline-none focus:ring-0 transition-colors ${activeTab === 5 ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                  >
                    Social Media Manager
                  </button>
                </li>
              </ul>
              <div className="tab-container relative h-[350px] sm:h-[800px] lg:h-[900px] overflow-hidden px-4 py-8">
                <div className={`absolute inset-0 transform transition-all duration-500 ease-in-out ${activeTab === 0 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                  <div className="mx-auto  mt-10 sm:mt-12  max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="mx-auto sm:text-center">
                      <p className="mt-2 text-center text-xl sm:text-4xl font-Manrope font-normal uppercase tracking-wide  text-gray-100 sm:text-balance">
                        Go live in five
                      </p>
                      <p className="mx-auto mt-4 sm:mt-6 hidden max-w-4xl font-medium text-pretty text-sm text-indigo-200 sm:block sm:text-lg/6">
                        Hubhopper’s intuitive design with guidance for
                        podcasters at every step ensures a streamlined workflow
                        and a quicker reach to the finish line. All you have to
                        do is create or import your audio or video show, add
                        your podcast details, and make the final click to go
                        live
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden pt-4 sm:pt-16">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                      <img
                        src="https://files.hubhopper.com/studio-assets/images/2025-12-17/podcast.gif"
                        alt="App screenshot"
                        className="w-full rounded-xl object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 transform transition-all duration-500 ease-in-out ${activeTab === 1 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                  <div className="mx-auto  mt-10 sm:mt-12  max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="mx-auto sm:text-center">
                      <p className="mt-2 text-center text-xl sm:text-4xl font-Manrope font-normal uppercase tracking-wide  text-gray-100 sm:text-balance">
                        Data That Tells You Everything
                      </p>
                      <p className="mx-auto mt-4 sm:mt-6 hidden max-w-4xl font-medium text-pretty text-sm text-indigo-200 sm:block sm:text-lg/6">
                        Hubhopper is the ultimate podcast studio software. Owing
                        to its IAB-compliant advanced analytics, you can now
                        turn data into actionable insights. Check your podcast's
                        performance with features like geographical insights,
                        episode comparisons, breakdowns of listening sources,
                        and many more
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden pt-4 sm:pt-16">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                      <img
                        src="https://files.hubhopper.com/studio-assets/images/2025-12-17/1.gif"
                        alt="App screenshot"
                        className="w-full rounded-xl object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 transform transition-all duration-500 ease-in-out ${activeTab === 2 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                  <div className="mx-auto  mt-10 sm:mt-12  max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="mx-auto sm:text-center">
                      <p className="mt-2 text-center text-xl sm:text-4xl font-Manrope font-normal uppercase tracking-wide  text-gray-100 sm:text-balance">
                        Edit your audio in seconds
                      </p>
                      <p className="mx-auto mt-4 sm:mt-6 hidden max-w-4xl font-medium text-pretty text-sm text-indigo-200 sm:block sm:text-lg/6">
                        Bid adieu to the hassle of browsing through podcast
                        editing platforms! Hubhopper presents you with an
                        in-built audio editor so that everything is ready at
                        your fingertips. You can now cut, combine, crop, or
                        fine-tune your audio files and episodes on our platform
                        in a simple and stress-free manner!
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden pt-4 sm:pt-16">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                      <img
                        src="https://files.hubhopper.com/studio-assets/images/2025-12-17/audio.gif"
                        alt="App screenshot"
                        className="w-full rounded-xl object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 transform transition-all duration-500 ease-in-out ${activeTab === 3 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                  <div className="mx-auto  mt-10 sm:mt-12  max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="mx-auto sm:text-center">
                      <p className="mt-2 text-center text-xl sm:text-4xl font-Manrope font-normal uppercase tracking-wide  text-gray-100 sm:text-balance">
                        Embed Your Podcast Player in Seconds
                      </p>
                      <p className="mx-auto mt-4 sm:mt-6 hidden max-w-4xl font-medium text-pretty text-sm text-indigo-200 sm:block sm:text-lg/6">
                        Hubhopper's customizable embed player lets you add your
                        podcast directly to a website. Share episodes with your
                        audience where they already are and make it easier for
                        new listeners to discover your podcast
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden pt-4 sm:pt-16">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                      <img
                        src="https://files.hubhopper.com/studio-assets/images/2025-12-17/microsite.gif"
                        alt="App screenshot"
                        className="w-full rounded-xl object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 transform transition-all duration-500 ease-in-out ${activeTab === 4 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                  <div className="mx-auto  mt-10 sm:mt-12  max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="mx-auto sm:text-center">
                      <p className="mt-2 text-center text-xl sm:text-4xl font-Manrope font-normal uppercase tracking-wide  text-gray-100 sm:text-balance">
                        Turn Your Podcast Moments into Shareable Reels
                      </p>
                      <p className="mx-auto mt-4 sm:mt-6 hidden max-w-4xl font-medium text-pretty text-sm text-indigo-200 sm:block sm:text-lg/6">
                        Automatically generate short video clips from your
                        podcast episodes and share them across platforms.
                        Hubhopper’s AI helps creators transform long-form
                        content into short, engaging clips ready for social
                        media
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden pt-4 sm:pt-16">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                      <img
                        src="https://files.hubhopper.com/studio-assets/images/2026-03-16/Reel%20Generation.gif"
                        alt="App screenshot"
                        className="w-full rounded-xl object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 transform transition-all duration-500 ease-in-out ${activeTab === 5 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                  <div className="mx-auto  mt-10 sm:mt-12  max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="mx-auto sm:text-center">
                      <p className="mt-2 text-center text-xl sm:text-4xl font-Manrope font-normal uppercase tracking-wide  text-gray-100 sm:text-balance">
                        Schedule Your Podcast Promotion with Ease
                      </p>
                      <p className="mx-auto mt-4 sm:mt-6 hidden max-w-4xl font-medium text-pretty text-sm text-indigo-200 sm:block sm:text-lg/6">
                        Promoting your podcast consistently helps it grow.
                        Hubhopper’s Social Media Manager lets you plan,
                        organize, and schedule social media posts in advance so
                        your podcast stays active and visible across platforms
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden pt-4 sm:pt-16">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                      <img
                        src="https://files.hubhopper.com/studio-assets/images/2026-03-16/Social%20Distribution.gif"
                        alt="App screenshot"
                        className="w-full rounded-xl object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-10 sm:mb-12 sm:mt-8 flex items-center justify-center gap-x-6">
                <a className="rounded-md bg-gray-50 px-10 py-4 text-center text-sm font-semibold text-gray-800 shadow-sm hover:shadow-lg hover:shadow-gray-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                  Get started
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white py-24 sm:py-32 relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-0">
              <div className="mx-auto text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  We help people{" "}
                  <span className="text-indigo-600">grow with podcasts</span>
                </h2>
              </div>
              <div className="relative mt-16">
                <div className="flex overflow-x-scroll snap-x snap-mandatory gap-8 no-scrollbar p-4 -ml-4">
                  <article className="relative flex-shrink-0 w-full max-w-xs snap-center isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 aspect-square transition transform hover:scale-105 hover:shadow-lg">
                    <div
                      className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-2xl drop-shadow-[0px_10px_10px_rgba(0,0,0,1)]"
                      style={{
                        backgroundImage:
                          "url(https://listen.hubhopper.com/_next/image?url=https%3A%2F%2Ffiles.hubhopper.com%2Fpodcast%2F398577%2Fmoneywise_8795.png%3Fv%3D1678442156%26s%3Dhh-web-app&w=384&q=75&quot)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                    <h3 className="mt-3 text-base font-medium text-white">
                      <a
                        href="https://listen.hubhopper.com/podcast/moneywise/398577"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <span className="absolute inset-0"></span>Moneywise
                      </a>
                    </h3>
                    <div className="flex items-center gap-x-4">
                      <div className="flex gap-x-2.5 text-indigo-400 text-sm">
                        Timbre media
                      </div>
                    </div>
                  </article>
                  <article className="relative flex-shrink-0 w-full max-w-xs snap-center isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 aspect-square transition transform hover:scale-105 hover:shadow-lg">
                    <div
                      className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-2xl drop-shadow-[0px_10px_10px_rgba(0,0,0,1)]"
                      style={{
                        backgroundImage:
                          "url(https://listen.hubhopper.com/_next/image?url=https%3A%2F%2Ffiles.hubhopper.com%2Fpodcast%2F398577%2Fmoneywise_8795.png%3Fv%3D1678442156%26s%3Dhh-web-app&w=384&q=75&quot)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                    <h3 className="mt-3 text-base font-medium text-white">
                      <a
                        href="https://listen.hubhopper.com/podcast/moneywise/398577"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <span className="absolute inset-0"></span>Moneywise
                      </a>
                    </h3>
                    <div className="flex items-center gap-x-4">
                      <div className="flex gap-x-2.5 text-indigo-400 text-sm">
                        Timbre media
                      </div>
                    </div>
                  </article>
                  <article className="relative flex-shrink-0 w-full max-w-xs snap-center isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 aspect-square transition transform hover:scale-105 hover:shadow-lg">
                    <div
                      className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-2xl drop-shadow-[0px_10px_10px_rgba(0,0,0,1)]"
                      style={{
                        backgroundImage:
                          "url(https://listen.hubhopper.com/_next/image?url=https%3A%2F%2Ffiles.hubhopper.com%2Fpodcast%2F398577%2Fmoneywise_8795.png%3Fv%3D1678442156%26s%3Dhh-web-app&w=384&q=75&quot)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                    <h3 className="mt-3 text-base font-medium text-white">
                      <a
                        href="https://listen.hubhopper.com/podcast/moneywise/398577"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <span className="absolute inset-0"></span>Moneywise
                      </a>
                    </h3>
                    <div className="flex items-center gap-x-4">
                      <div className="flex gap-x-2.5 text-indigo-400 text-sm">
                        Timbre media
                      </div>
                    </div>
                  </article>
                  <article className="relative flex-shrink-0 w-full max-w-xs snap-center isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 aspect-square transition transform hover:scale-105 hover:shadow-lg">
                    <div
                      className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-2xl drop-shadow-[0px_10px_10px_rgba(0,0,0,1)]"
                      style={{
                        backgroundImage:
                          "url(https://listen.hubhopper.com/_next/image?url=https%3A%2F%2Ffiles.hubhopper.com%2Fpodcast%2F398577%2Fmoneywise_8795.png%3Fv%3D1678442156%26s%3Dhh-web-app&w=384&q=75&quot)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                    <h3 className="mt-3 text-base font-medium text-white">
                      <a
                        href="https://listen.hubhopper.com/podcast/moneywise/398577"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <span className="absolute inset-0"></span>Moneywise
                      </a>
                    </h3>
                    <div className="flex items-center gap-x-4">
                      <div className="flex gap-x-2.5 text-indigo-400 text-sm">
                        Timbre media
                      </div>
                    </div>
                  </article>
                  <article className="relative flex-shrink-0 w-full max-w-xs snap-center isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 aspect-square transition transform hover:scale-105 hover:shadow-lg">
                    <div
                      className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-2xl drop-shadow-[0px_10px_10px_rgba(0,0,0,1)]"
                      style={{
                        backgroundImage:
                          "url(https://listen.hubhopper.com/_next/image?url=https%3A%2F%2Ffiles.hubhopper.com%2Fpodcast%2F398577%2Fmoneywise_8795.png%3Fv%3D1678442156%26s%3Dhh-web-app&w=384&q=75&quot)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                    <h3 className="mt-3 text-base font-medium text-white">
                      <a
                        href="https://listen.hubhopper.com/podcast/moneywise/398577"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <span className="absolute inset-0"></span>Moneywise
                      </a>
                    </h3>
                    <div className="flex items-center gap-x-4">
                      <div className="flex gap-x-2.5 text-indigo-400 text-sm">
                        Timbre media
                      </div>
                    </div>
                  </article>
                  <article className="relative flex-shrink-0 w-full max-w-xs snap-center isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 aspect-square transition transform hover:scale-105 hover:shadow-lg">
                    <div
                      className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-2xl drop-shadow-[0px_10px_10px_rgba(0,0,0,1)]"
                      style={{
                        backgroundImage:
                          "url(https://listen.hubhopper.com/_next/image?url=https%3A%2F%2Ffiles.hubhopper.com%2Fpodcast%2F398577%2Fmoneywise_8795.png%3Fv%3D1678442156%26s%3Dhh-web-app&w=384&q=75&quot)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                    <h3 className="mt-3 text-base font-medium text-white">
                      <a
                        href="https://listen.hubhopper.com/podcast/moneywise/398577"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <span className="absolute inset-0"></span>Moneywise
                      </a>
                    </h3>
                    <div className="flex items-center gap-x-4">
                      <div className="flex gap-x-2.5 text-indigo-400 text-sm">
                        Timbre media
                      </div>
                    </div>
                  </article>
                </div>
                <div className="absolute bottom-[-1.5rem] right-4 flex gap-2">
                  <button className="h-2 w-2 rounded-full bg-gray-300 transition transform"></button>
                  <button className="h-2 w-2 rounded-full bg-gray-300 transition transform"></button>
                  <button className="h-2 w-2 rounded-full bg-gray-300 transition transform"></button>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mb-24 max-w-7xl bg-white sm:mb-32">
            <div className="mx-auto mb-32 max-w-7xl sm:mb-40 sm:px-6 lg:px-8">
              <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-8 text-center shadow-2xl sm:rounded-3xl sm:px-16 sm:py-16">
                  <p className="mx-auto mt-6 max-w-4xl text-sm font-medium text-gray-100 sm:text-xl">
                    “Apart from broad expertise in digital audio, Hubhopper
                    showed exceptional resourcefulness, collaborative approach,
                    and creativity in launching our first podcast. They built
                    tools and systems that made podcasting easy.”
                  </p>
                  <div className="mx-auto mt-12 flex items-center justify-center gap-x-3">
                    <img
                      src="https://files.hubhopper.com/studio-assets/images/2025-12-17/yatin.png"
                      className="size-8 flex-none rounded-full bg-gray-800"
                    />
                    <h3 className="flex font-semibold text-gray-100">
                      Yatin Naik
                      <span className="text-xl text-indigo-600">/</span>{" "}
                      <span className="text-gray-500">@Hindustan Times</span>
                    </h3>
                  </div>
                  <div
                    className="absolute -bottom-8 -left-8 -z-10 transform-gpu"
                    aria-hidden="true"
                  >
                    <img src="https://files.hubhopper.com/studio-assets/images/2025-12-17/Pattern.svg" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <img
                  src="https://files.hubhopper.com/studio-assets/images/2025-12-17/layer_1.png"
                  alt="Training"
                  className="h-full w-full rounded-2xl object-cover px-4 sm:px-0"
                />
              </div>
              <div className="px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:text-5xl">
                  Most Podcasters Nail the Basics—But What About Growth?
                </h2>
                <p className="mt-6 text-base font-medium text-gray-800 sm:text-lg">
                  Have your content efforts led to more listeners? If not, our
                  free podcast software comes in with a change! Hubhopper
                  Academy teaches you how to start, then market, and finally
                  monetize your podcast. These strategies taught by our
                  founder,- are available in our 21-day course for free.
                </p>
                <p className="mt-6 text-base font-medium text-gray-800 sm:text-lg">
                  Master SEO and learn about audience engagement and effective
                  monetization. Basically, the course covers everything to help
                  you become a successful podcaster!
                </p>
                <div className="mt-10 space-y-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 w-full">
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-[70%] sm:w-[75%] focus:-outline-offset block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline focus:outline-indigo-400 sm:text-sm/6"
                      />
                      <button className="w-[30%] sm:w-[25%] inline-flex justify-center rounded-md bg-gray-800 px-2 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 disabled:opacity-50">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mx-auto divide-y divide-gray-900/10">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Frequently asked questions
                </h2>
                <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                  <div className="pt-6" data-headlessui-state>
                    <dt>
                      <button
                        className="group flex w-full items-start justify-between text-left text-gray-900"
                        id="headlessui-disclosure-button-:r2m:"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state
                      >
                        <span className="text-base/7 font-semibold">
                          I am seeking a free podcast hosting site; where can I
                          find one?
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={"1.5"}
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className="size-6 group-data-[open]:hidden"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m6-6H6"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </dt>
                  </div>

                  <div className="pt-6" data-headlessui-state>
                    <dt>
                      <button
                        className="group flex w-full items-start justify-between text-left text-gray-900"
                        id="headlessui-disclosure-button-:r2m:"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state
                      >
                        <span className="text-base/7 font-semibold">
                          I am seeking a free podcast hosting site; where can I
                          find one?
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={"1.5"}
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className="size-6 group-data-[open]:hidden"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m6-6H6"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </dt>
                  </div>

                  <div className="pt-6" data-headlessui-state>
                    <dt>
                      <button
                        className="group flex w-full items-start justify-between text-left text-gray-900"
                        id="headlessui-disclosure-button-:r2m:"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state
                      >
                        <span className="text-base/7 font-semibold">
                          Which platform is considered the best for video
                          podcasts?
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={"1.5"}
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className="size-6 group-data-[open]:hidden"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m6-6H6"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </dt>
                  </div>

                  <div className="pt-6" data-headlessui-state>
                    <dt>
                      <button
                        className="group flex w-full items-start justify-between text-left text-gray-900"
                        id="headlessui-disclosure-button-:r2m:"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state
                      >
                        <span className="text-base/7 font-semibold">
                          Which platform is considered the best to monetize a
                          podcast?
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={"1.5"}
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className="size-6 group-data-[open]:hidden"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m6-6H6"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </dt>
                  </div>

                  <div className="pt-6" data-headlessui-state>
                    <dt>
                      <button
                        className="group flex w-full items-start justify-between text-left text-gray-900"
                        id="headlessui-disclosure-button-:r2m:"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state
                      >
                        <span className="text-base/7 font-semibold">
                          What is the way of monetizing my podcast?
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={"1.5"}
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className="size-6 group-data-[open]:hidden"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m6-6H6"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </dt>
                  </div>

                  <div className="pt-6" data-headlessui-state>
                    <dt>
                      <button
                        className="group flex w-full items-start justify-between text-left text-gray-900"
                        id="headlessui-disclosure-button-:r2m:"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state
                      >
                        <span className="text-base/7 font-semibold">
                          Is there a chance for me to host my podcast for free?
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={"1.5"}
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className="size-6 group-data-[open]:hidden"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m6-6H6"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </dt>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="bg-white py-24 sm:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none">
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Come to Us for Guidance in Every Step of the Way!
                </h2>
                <p className="mt-6 text-lg/8 text-gray-800 font-medium">
                  Your storytelling journey will reach new heights on our
                  podcasting platform for streaming! Enjoy our comprehensive
                  range of valuable resources that will guide you right from the
                  beginning of your journey to success!
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                  <div className="flex flex-col items-center text-center">
                    <dt className="flex flex-col items-center text-base/7 font-semibold text-gray-900">
                      <div className="mb-6 flex size-16 items-center justify-center rounded-lg bg-indigo-50">
                        <img
                          src="https://files.hubhopper.com/studio-assets/images/2025-12-17/blog_img.svg"
                          alt="Blog"
                        />
                      </div>
                      Blog
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                      <p className="flex-auto">
                        Have questions about the right way to start a podcast?
                        Or want guidance to scale an episode? Take a look at our
                        in-depth blogs for answers!
                      </p>
                      <p className="mt-6">
                        <a
                          href="https://hubhopper.com/blog/"
                          target="_blank"
                          className="font-semibold text-indigo-600 text-sm sm:text-lg"
                        >
                          Go to Blog <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <dt className="flex flex-col items-center text-base/7 font-semibold text-gray-900">
                      <div className="mb-6 flex size-16 items-center justify-center rounded-lg bg-indigo-50">
                        <img
                          src="https://files.hubhopper.com/studio-assets/images/2025-12-17/que_img.svg"
                          alt="Help Center"
                        />
                      </div>
                      Help Centre
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                      <p className="flex-auto">
                        Reach out to our help centre for any questions regarding
                        what our best platform for podcast offers or how to
                        effectively use the AI tools.
                      </p>
                      <p className="mt-6">
                        <a
                          href="https://help.hubhopper.com/hc/en-us"
                          target="_blank"
                          className="font-semibold text-indigo-600 text-sm sm:text-lg"
                        >
                          Learn More <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <dt className="flex flex-col items-center text-base/7 font-semibold text-gray-900">
                      <div className="mb-6 flex size-16 items-center justify-center rounded-lg bg-indigo-50">
                        <img
                          src="https://files.hubhopper.com/studio-assets/images/2025-12-17/blog_img.svg"
                          alt=""
                        />
                      </div>
                      1-1 Calls
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                      <p className="flex-auto">
                        Speak to our team directly to know how Hubhopper
                        contributes to your podcasting success!
                      </p>
                      <p className="mt-6">
                        <a
                          href="https://calendly.com/samarth-f-hubhopper/30min"
                          target="_blank"
                          className="font-semibold text-indigo-600 text-sm sm:text-lg"
                        >
                          Book a Call <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="bg-gray-900">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="mx-auto text-center">
                <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                  Get started with Hubhopper for free!
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-100">
                  Time to take the leap! Take your podcasting journey to a whole
                  new level with us by your side!
                </p>
                <div className="-mt-8 mb-8 mt-6 flex items-center justify-center gap-x-6">
                  <a
                    href="/pricing"
                    className="rounded-md bg-gray-50 px-10 py-4 text-center text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    Try for free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <h3 className="font-kimberley text-4xl font-medium sm:text-5xl text-indigo-600">
                hubhopper
              </h3>
              <p className="text-sm font-semibold sm:text-lg leading-6 text-gray-600">
                All in one podcasting platform.
              </p>
              <div className="mt-8">
                <a
                  href="/pricing"
                  className="border border-gray-300 bg-white text-gray-700 hover:bg-[#4F46E5] hover:text-white text-md px-8 py-2 rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[#4F46E5]/50 hover:shadow-xl font-semibold relative before:absolute before:inset-0 before:bg-white/20 before:rounded-lg before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 overflow-hidden text-gray-500"
                  id="gtm-start-my-podcast"
                >
                  Start my podcast
                </a>
              </div>
              <div className="flex space-x-6 md:order-2">
                <a
                  href="https://www.facebook.com/Hubhopper/"
                  className="text-gray-600 hover:text-gray-400"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule={"evenodd"}
                    ></path>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/hubhopperofficial/"
                  className="text-gray-600 hover:text-gray-400"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@hubhopper_official"
                  className="text-gray-600 hover:text-gray-400"
                >
                  <span className="sr-only">Youtube</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"></path>
                  </svg>
                </a>

                <a
                  href="https://x.com/hubhopper"
                  className="text-gray-600 hover:text-gray-400"
                >
                  <span className="sr-only">X</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-0">
                <div>
                  <h3 className="font-semibold leading-6 text-gray-200 text-gray-800">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="https://hubhopper.com/blog/hubhopper-podcast-awards-2023/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Awards
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="text-sm leading-6 text-gray-600"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pricing"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://services.hubhopper.com/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Management Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://careers.hubhopper.com/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://hubhopper.com/financial-information/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Financial Information
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold leading-6 text-gray-200 text-gray-800">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="https://help.hubhopper.com/hc/en-us"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://help.hubhopper.com/hc/en-us/requests/new"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Request Feature
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://services.hubhopper.com/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Status
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://hubhopper.com/advertise-with-us/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Advertise
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:grid md:grid-cols-2 md:gap-0">
                <div>
                  <h3 className="font-semibold leading-6 text-gray-200 text-gray-800">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="https://hubhopper.com/privacy-policy/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://hubhopper.com/guideline/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Community Guidelines
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://hubhopper.com/terms/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold leading-6 text-gray-200 text-gray-800">
                    Resources
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="https://help.hubhopper.com/hc/en-us"
                        className="text-sm leading-6 text-gray-600"
                      >
                        How to start a podcast?
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-600">
                        Podcast Launchpad
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://help.hubhopper.com/hc/en-us/requests/new"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://services.hubhopper.com/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Android App
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://hubhopper.com/advertise-with-us/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Podcast Name Generator
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://hubhopper.com/advertise-with-us/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Buzzsprout Alternative
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://hubhopper.com/advertise-with-us/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Libsyn Alternative
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://hubhopper.com/advertise-with-us/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Podbean Alternative
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://hubhopper.com/advertise-with-us/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Anchor Alternative
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://hubhopper.com/advertise-with-us/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Captivate Alternative
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://hubhopper.com/advertise-with-us/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Transistor Alternative
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://hubhopper.com/advertise-with-us/"
                        className="text-sm leading-6 text-gray-600"
                      >
                        Castos Alternative
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto pb-8 max-w-7xl">
          <div className="border-t border-white/10 pt-8 md:flex md:items-end md:justify-between">
            <p className="text-xs leading-5 text-gray-500 md:order-1 md:mt-0 px-2">
              Company Registered Name: <br />{" "}
              <span className="font-medium">
                PARIJAT INNOVATIONS PRIVATE LIMITED
              </span>
            </p>
            <p className="text-xs leading-5 text-gray-500 md:order-1 md:mt-0 px-2">
              Company Registered Address: <br />{" "}
              <span className="font-medium">
                M-77, 2ND FLOOR, M BLOCK MARKET, GREATER KAILASH PART-II, NEW
                DELHI - 110048
              </span>
            </p>
            <p className="text-xs leading-5 text-gray-500 md:order-1 md:mt-0 px-2">
              <span className="font-medium">
                © 2025 Parijat Innovations Pvt. Ltd. (Hubhopper) All rights
                reserved.
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
