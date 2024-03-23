import Menu from "../components/Menu";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

function Home() {
  const cardImages = [
    {
      urlImage: "https://i.imgur.com/mK7tFPf.jpeg",
    },

    {
      urlImage: "https://i.imgur.com/WcBlOzV.png",
    },

    {
      urlImage:
        "https://i.imgur.com/hlbSjTL_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    },

    {
      urlImage:
        "https://i.imgur.com/hFFs7qX_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    },

    {
      urlImage:
        "https://i.imgur.com/bFqHajU_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    },

    {
      urlImage:
        "https://i.imgur.com/P0jz0gs_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    },

    {
      urlImage:
        "https://i.imgur.com/b1CntEC_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    },

    {
      urlImage:
        "https://i.imgur.com/0W80ka2_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    },
  ];

  const imagesCategory = [
    {
      name: "Fantasia",
      urlImage: "https://i.imgur.com/c8jLXkK.jpeg",
    },

    {
      name: "Fan art",
      urlImage: "https://i.imgur.com/hmbYvDH.jpeg",
    },

    {
      name: "Anime/Manga",
      urlImage: "https://i.imgur.com/gtO1o2E.jpeg",
    },

    {
      name: "Game art",
      urlImage: "https://i.imgur.com/As7q2Um.jpeg",
    },
  ];

  const imagesShop = [
    {
      urlImage:
        "https://i.imgur.com/xTPVTch_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    },

    {
      urlImage:
        "https://i.imgur.com/rdHK81J_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    },

    {
      urlImage:
        "https://i.imgur.com/jY0tJn6_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    },
  ];

  return (
    <>
      <Menu />
      {/*inicio Categoria */}
      <div class="flex gap-x-2 justify-around pl-7 pr-7">
        <div class="w-40 center relative inline-block select-none whitespace-nowrap rounded-md bg-corPadrao py-2 px-1 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
          <div class="mt-px text-center">blue</div>
        </div>
        <div class="w-32 center relative inline-block select-none whitespace-nowrap rounded-md bg-corPadrao py-2 px-1 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
          <div class="mt-px text-center">red</div>
        </div>
        <div class="w-32 center relative inline-block select-none whitespace-nowrap rounded-md bg-corPadrao  py-2 px-1 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
          <div class="mt-px text-center">green</div>
        </div>
        <div class="w-32 center relative inline-block select-none whitespace-nowrap rounded-md bg-corPadrao  py-2 px-1 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
          <div class="mt-px text-center">amber</div>
        </div>
        <div class="w-32 center relative inline-block select-none whitespace-nowrap rounded-md bg-corPadrao  py-2 px-1 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
          <div class="mt-px text-center">pink</div>
        </div>
        <div class="w-32 center relative inline-block select-none whitespace-nowrap rounded-md bg-corPadrao  py-2 px-1 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
          <div class="mt-px text-center">indigo</div>
        </div>
        <div class="w-32 center relative inline-block select-none whitespace-nowrap rounded-md bg-corPadrao  py-2 px-1 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
          <div class="mt-px text-center">purple</div>
        </div>
        <div class="w-32 center relative inline-block select-none whitespace-nowrap rounded-md bg-corPadrao  py-2 px-1 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
          <div class="mt-px text-center">teal</div>
        </div>
      </div>
      {/* Fim categoria */}

      {/*inicio galeria  */}
      <section class="relative py-10 md:py-15 overflow-hidden">
        <div className="container">
            <h1 className="text-white font-bold text-4xl ml-12 mb-7">Explorar</h1>
        </div>
        <img
          class="absolute top-0 left-0 mt-4"
          src="saturn-assets/images/content/stars-left-top.svg"
          alt=""
        />
        <img
          className="absolute top-0 right-0 mt-40"
          src="saturn-assets/images/content/blue-light-right.png"
          alt=""
        />
        <div className="relative container px-4 mx-auto">
          <div className="relative max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-8">
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <a
                  className="group block max-w-sm mx-auto md:max-w-none h-full border border-corContraste bg-white rounded-xl transform hover:scale-105 transition duration-500"
                  href="#"
                >
                  <div class="flex items-center justify-between px-4 py-2">
                    <span className="text-base font-semibold">@saturn_ui</span>
                    <img
                      className="rounded-full w-12 h-12"
                      src="https://i.pinimg.com/564x/e7/14/cc/e714cc1d38e496ddcda4182f8f6c10b1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="h-72">
                    <img
                      className="block w-full h-full"
                      src="https://i.imgur.com/UHd5vGv_d.webp?maxwidth=520&shape=thumb&fidelity=high"
                      alt=""
                    />
                  </div>
                  <div className="px-4 pt-4 pb-5">
                    <span className="block text-sm tetx-gray-800 mb-2.5">
                      This is example post
                    </span>
                    <div className="flex items-center">
                    <img
                        class="mr-1.5 w-5 h-5"
                        src="./src/assets/coracao.png"
                        alt=""
                      />
                      <span className="text-sm text-gray-500">12.903</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <a
                  className="group block max-w-sm mx-auto md:max-w-none h-full border border-corContraste bg-white rounded-xl transform hover:scale-105 transition duration-500"
                  href="#"
                >
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-base font-semibold">@saturn_ui</span>
                    <img
                      className="rounded-full w-12 h-12"
                      src="https://i.pinimg.com/564x/e7/14/cc/e714cc1d38e496ddcda4182f8f6c10b1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="h-72">
                    <img
                      className="block w-full h-full"
                      src="https://i.imgur.com/hu3DaoS_d.webp?maxwidth=520&shape=thumb&fidelity=high"
                      alt=""
                    />
                  </div>
                  <div class="px-4 pt-4 pb-5">
                    <span class="block text-sm tetx-gray-800 mb-2.5">
                      This is example post
                    </span>
                    <div class="flex items-center">
                    <img
                        class="mr-1.5 w-5 h-5"
                        src="./src/assets/coracao.png"
                        alt=""
                      />
                      <span class="text-sm text-gray-500">12.903</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <a
                  class="group block max-w-sm mx-auto md:max-w-none h-full border border-corContraste bg-white rounded-xl transform hover:scale-105 transition duration-500"
                  href="#"
                >
                  <div class="flex items-center justify-between px-4 py-2">
                    <span class="text-base font-semibold">@saturn_ui</span>
                    <img
                      className="rounded-full w-12 h-12"
                      src="https://i.pinimg.com/564x/e7/14/cc/e714cc1d38e496ddcda4182f8f6c10b1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="h-72">
                    <img
                      class="block w-full h-full"
                      src="https://i.imgur.com/406q5Z8_d.webp?maxwidth=520&shape=thumb&fidelity=high"
                      alt=""
                    />
                  </div>
                  <div class="px-4 pt-4 pb-5">
                    <span class="block text-sm tetx-gray-800 mb-2.5">
                      This is example post
                    </span>
                    <div class="flex items-center">
                    <img
                        class="mr-1.5 w-5 h-5"
                        src="./src/assets/coracao.png"
                        alt=""
                      />
                      <span class="text-sm text-gray-500">12.903</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <a
                  class="group block max-w-sm mx-auto md:max-w-none h-full border border-corContraste bg-white rounded-xl transform hover:scale-105 transition duration-500"
                  href="#"
                >
                  <div class="flex items-center justify-between px-4 py-2">
                    <span class="text-base font-semibold">@saturn_ui</span>
                    <img
                      className="rounded-full w-12 h-12"
                      src="https://i.pinimg.com/564x/e7/14/cc/e714cc1d38e496ddcda4182f8f6c10b1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="h-72">
                    <img
                      class="block w-full h-full"
                      src="https://i.imgur.com/hFFs7qX_d.webp?maxwidth=520&shape=thumb&fidelity=high"
                      alt=""
                    />
                  </div>
                  <div class="px-4 pt-4 pb-5">
                    <span class="block text-sm tetx-gray-800 mb-2.5">
                      This is example post
                    </span>
                    <div class="flex items-center">
                    <img
                        class="mr-1.5 w-5 h-5"
                        src="./src/assets/coracao.png"
                        alt=""
                      />
                      <span class="text-sm text-gray-500">12.903</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <a
                  class="group block max-w-sm mx-auto md:max-w-none h-full border border-corContraste bg-white rounded-xl transform hover:scale-105 transition duration-500"
                  href="#"
                >
                  <div class="flex items-center justify-between px-4 py-2">
                    <span class="text-base font-semibold">@saturn_ui</span>
                    <img
                      className="rounded-full w-12 h-12"
                      src="https://i.pinimg.com/564x/e7/14/cc/e714cc1d38e496ddcda4182f8f6c10b1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="h-72">
                    <img
                      class="block w-full h-full"
                      src="https://i.imgur.com/kXloYtt_d.webp?maxwidth=520&shape=thumb&fidelity=high"
                      alt=""
                    />
                  </div>
                  <div class="px-4 pt-4 pb-5">
                    <span class="block text-sm tetx-gray-800 mb-2.5">
                      This is example post
                    </span>
                    <div class="flex items-center">
                    <img
                        class="mr-1.5 w-5 h-5"
                        src="./src/assets/coracao.png"
                        alt=""
                      />
                      <span class="text-sm text-gray-500">12.903</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <a
                  class="group block max-w-sm mx-auto md:max-w-none h-full border border-corContraste bg-white rounded-xl transform hover:scale-105 transition duration-500"
                  href="#"
                >
                  <div class="flex items-center justify-between px-4 py-2">
                    <span class="text-base font-semibold">@saturn_ui</span>
                    <img
                      className="rounded-full w-12 h-12"
                      src="https://i.pinimg.com/564x/e7/14/cc/e714cc1d38e496ddcda4182f8f6c10b1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="h-72">
                    <img
                      class="block w-full h-full"
                      src="https://i.imgur.com/yiRtYzY_d.webp?maxwidth=520&shape=thumb&fidelity=high"
                      alt=""
                    />
                  </div>
                  <div class="px-4 pt-4 pb-5">
                    <span class="block text-sm tetx-gray-800 mb-2.5">
                      This is example post
                    </span>
                    <div class="flex items-center">
                    <img
                        class="mr-1.5 w-5 h-5"
                        src="./src/assets/coracao.png"
                        alt=""
                      />
                      <span class="text-sm text-gray-500">12.903</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <a
                  class="group block max-w-sm mx-auto md:max-w-none h-full border border-corContraste bg-white rounded-xl transform hover:scale-105 transition duration-500"
                  href="#"
                >
                  <div class="flex items-center justify-between px-4 py-2">
                    <span class="text-base font-semibold">@saturn_ui</span>
                    <img
                      className="rounded-full w-12 h-12"
                      src="https://i.pinimg.com/564x/e7/14/cc/e714cc1d38e496ddcda4182f8f6c10b1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="h-72">
                    <img
                      class="block w-full h-full"
                      src="https://i.imgur.com/bFqHajU_d.webp?maxwidth=520&shape=thumb&fidelity=high"
                      alt=""
                    />
                  </div>
                  <div class="px-4 pt-4 pb-5">
                    <span class="block text-sm tetx-gray-800 mb-2.5">
                      This is example post
                    </span>
                    <div class="flex items-center">
                    <img
                        class="mr-1.5 w-5 h-5"
                        src="./src/assets/coracao.png"
                        alt=""
                      />
                      <span class="text-sm text-gray-500">12.903</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <a
                  class="group block max-w-sm mx-auto md:max-w-none h-full border border-corContraste bg-white rounded-xl transform hover:scale-105 transition duration-500"
                  href="#"
                >
                  <div class="flex items-center justify-between px-4 py-2">
                    <span class="text-base font-semibold">@saturn_ui</span>
                    <img
                      className="rounded-full w-12 h-12"
                      src="https://i.pinimg.com/564x/e7/14/cc/e714cc1d38e496ddcda4182f8f6c10b1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="h-72">
                    <img
                      class="block w-full h-full"
                      src="https://i.imgur.com/NaL9Qfw_d.webp?maxwidth=520&shape=thumb&fidelity=high"
                      alt=""
                    />
                  </div>
                  <div class="px-4 pt-4 pb-5">
                    <span class="block text-sm tetx-gray-800 mb-2.5">
                      This is example post
                    </span>
                    <div class="flex items-center">
                      <img
                        class="mr-1.5 w-5 h-5"
                        src="./src/assets/coracao.png"
                        alt=""
                      />
                      <span class="text-sm text-gray-500">12.903</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center">
        <div className="cursor-pointer">
            <button>
                <img className="w-14 h-14" src="./src/assets/seta-baixoWhite.png" />
            </button>
        </div>
      </div>
      {/* fim galeria */}
       <Footer />  
    </>
  );
}

export default Home;
