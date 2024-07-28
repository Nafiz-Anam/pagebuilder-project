import { useContext } from "react";
import BarsIcon from "../icons/bars.svg?component";
import PencilIcon from "../icons/pencil.svg?component";
import { PageBuilderContext } from "../context/PageBuilderContext";

const deviceStyles = {
  desktop: { maxWidth: "100%" },
  tablet: { maxWidth: "768px" },
  mobile: { maxWidth: "375px" },
  "mobile-rotated": { maxWidth: "667px" },
};

const Canvas = ({ isPreview }) => {
  const { activeDevice, zoomLevel } = useContext(PageBuilderContext);
  const scale = parseInt(zoomLevel) / 100;
  const style = {
    ...deviceStyles[activeDevice],
    transform: `scale(${scale})`,
    transformOrigin: "top center",
    margin: "0 auto",
    height: `${100 / scale}%`,
  };

  return (
    <main className={`flex-1 overflow-y-scroll ${!isPreview && "px-12"}`}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ ...style, padding: isPreview ? "0" : "3rem 0" }}>
          <div className="bg-white">
            <nav className="flex items-center justify-between px-12 py-6">
              <img className="h-11 w-11" src="/img/logo.png" alt="Logo" />
              <div className="flex gap-x-6">
                <button className="rounded-full bg-blue-600 px-8 py-3 text-white">
                  Hire Us
                </button>
                <button className="p-2">
                  <svg className="h-6 w-6 stroke-current">
                    {/* Bars icon SVG path */}
                  </svg>
                </button>
              </div>
            </nav>
            <section className="py-16">
              <div className="px-12">
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-0 hidden border-2 border-blue-600 group-focus-within:block">
                    <div className="absolute -translate-y-full pl-2">
                      <div className="flex items-center gap-x-2 rounded-t-lg bg-blue-600 px-3 py-1 text-white">
                        <span className="text-sm">H1 - hero title</span>
                        <svg className="h-4 w-4 fill-current">
                          {/* Pencil icon SVG path */}
                        </svg>
                      </div>
                    </div>
                    <div className="absolute left-0 top-0 h-2 w-2 -translate-x-full -translate-y-full border-2 border-blue-600"></div>
                    <div className="absolute right-0 top-0 h-2 w-2 -translate-y-full translate-x-full border-2 border-blue-600"></div>
                    <div className="absolute bottom-0 right-0 h-2 w-2 translate-x-full translate-y-full border-2 border-blue-600"></div>
                    <div className="absolute bottom-0 left-0 h-2 w-2 -translate-x-full translate-y-full border-2 border-blue-600"></div>
                    <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 items-center justify-center">
                      <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 items-center justify-center">
                      <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                    </div>
                  </div>
                  <h1
                    className="max-w-3xl text-5xl font-bold leading-[1.4] focus:outline-none"
                    contentEditable
                  >
                    We craft digital products for business and user goals.
                  </h1>
                </div>
                <p className="mt-4 text-lg leading-loose text-gray-400">
                  Help find solutions with UI / UX designs that are intuitive
                  and in accordance with client business goals. We provide a
                  high-quality service in UI/ UX Design & Development.
                </p>
              </div>
              <div className="flex items-center gap-4 px-12 pt-8">
                <button className="rounded-full bg-blue-600 px-8 py-5 font-semibold text-white">
                  Let's work together
                </button>
                <button className="rounded-full border border-gray-200 px-8 py-5 font-semibold text-blue-600">
                  Check our work
                </button>
              </div>
            </section>
            <section className="bg-gray-50 py-16">
              <div className="px-12">
                <span className="text-sm uppercase text-gray-400">
                  Our Projects
                </span>
                <div className="flex items-center justify-between">
                  <h2 className="max-w-3xl text-4xl font-bold leading-[1.4]">
                    Our latest cool projects.
                  </h2>
                  <button className="rounded-full bg-white px-8 py-5 font-semibold text-blue-600">
                    Check our work
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 px-12 pt-8">
                <div className="flex aspect-square w-full items-center overflow-hidden bg-gray-100">
                  <img
                    className="h-full w-full object-cover"
                    src="/img/billy.png"
                    alt="Project Billy"
                  />
                </div>
                <div className="flex aspect-square w-full items-center overflow-hidden bg-gray-100">
                  <img
                    className="h-full w-full object-cover"
                    src="/img/alpha-pay.png"
                    alt="Project Alpha Pay"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Canvas;
