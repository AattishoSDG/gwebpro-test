"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import Slider from "react-slick";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Tabs from "./components/Tabs";
import ClientSlider from "./components/ClientSlider";
import MarqueBlock from "./components/MarqueBlock";
import AddressTab from "./components/AddressTab";
import BrandMarket from "./components/BrandMarket";
import CustomCursor from "./components/CustomCursor";
import { LogoGwebproLetterG } from "./components/SVG";

import apiService from "./services/apiService"; // Import the service

// import CheckMobile from "../components/CheckMobile";
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const abtBg = {
  backgroundImage: "url(images/abt_bg.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const clientBg = {
  background: "url(images/cliend_bg.jpg) no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const pinColumnRef = useRef(null);
  const scrollColumnRef = useRef(null);

  const [pageData, setPagedata] = useState([]);
  const [brandData, setBranddata] = useState([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pinColumn = pinColumnRef.current;
    const scrollColumn = scrollColumnRef.current;

    if (section && pinColumn && scrollColumn) {
      // Create GSAP scroll animation
      gsap.to(scrollColumn, {
        y: () => window.innerHeight - scrollColumn.clientHeight,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: "margin",
          // pinSpacing: false,
          start: "top top",
          endTrigger: scrollColumn,
          end: "bottom bottom",
          // end: `+=${section.offsetHeight}`,
          scrub: true,
          // markers: true, // Enable markers for debugging
          invalidateOnRefresh: true,
        },
      });
    }

    // Cleanup the ScrollTrigger when the component unmounts
    // Cleanup the ScrollTrigger when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pageData?.discover_repeater]);

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth); // Set initial window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize); // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(function () {
    function isTouchDevice() {
      return (
        "ontouchstart" in window || // Checks for touch events
        navigator.maxTouchPoints > 0 || // Checks for touch points (modern devices)
        navigator.msMaxTouchPoints > 0 // Checks for touch points (older Microsoft devices)
      );
    }

    // Example usage
    if (isTouchDevice()) {
      console.log("This device supports touch.");
      document.body.classList.add("touch-device"); // Add a class for styling
    } else {
      console.log("This device does not support touch.");
      document.body.classList.add("non-touch-device"); // Add a class for styling
    }
  }, []);

  // Fetch page data on component mount
  useEffect(() => {
    fetchPagedata();
  }, []);

  const fetchPagedata = async () => {
    try {
      const data = await apiService.getPagedata("wp/v2/pages/8");
      setPagedata(data.acf);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  // Fetch brand data on component mount
  useEffect(() => {
    fetchbrandData();
  }, []);

  const fetchbrandData = async () => {
    try {
      const brdata = await apiService.getacfData("acf/v1/leader-brands/");
      setBranddata(brdata);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  const discoverSliderSettings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <>
      <section
        className="section-home-hero"
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        <CustomCursor isHovered={isHovered} />
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 ps-md-5 order-2 order-md-1">
              <h1
                dangerouslySetInnerHTML={{
                  __html: pageData.banner_title,
                }}
              ></h1>
              <p>
                <span className="scroll"></span>
                <span>{pageData.banner_description}</span>
              </p>
              <div
                className="widgets-container"
                // onMouseEnter={() => setIsHovered(false)}
                // onMouseLeave={() => setIsHovered(true)}
              >
                {pageData.banner_clutch_data ? (
                  pageData.banner_clutch_data.map((item, i) => (
                    <div className="widget" key={i}>
                      <iframe
                        width="100%"
                        height="100%"
                        src={item.clutch_iframe_link}
                        title={item.clutch_iframe_title}
                      ></iframe>
                    </div>
                  ))
                ) : (
                  <span></span>
                )}
              </div>
            </div>
            <div className="col-md-6 pe-md-5 order-1 order-md-2">
              <div
                className="video-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <video
                  src={pageData.banner_video}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <CheckMobile setWidth={768}>
        <section className="pad_cmn_blk">
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <div
                  className={`custom-cursor position-static`}
                  style={{
                    opacity: "1",
                    visibility: "visible",
                    pointerEvents: "auto",
                    transform: "none",
                    height: "124px",
                    width: "124px",
                    backgroundColor: "#fff",
                  }}
                >
                  <img src="/images/custom-cursor-text.svg" alt="" />
                </div>
                <CustomCursor isHovered={isHovered} />
              </div>
            </div>
          </div>
        </section>
      </CheckMobile> */}

      <BrandMarket
        title={brandData.brand_section_title}
        description={brandData.brand_section_desc}
        brandLogo={brandData.brand_logo_list}
      />

      {pageData.discover_repeater ? (
        <section
          className="discover_blk pad_cmn_blk d-none d-lg-block"
          ref={sectionRef}
        >
          {/**ref={sectionRef} */}
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-lg-5 pin-column" ref={pinColumnRef}>
                {/**ref={pinColumnRef} */}
                <div className="title_blk title-big">
                  <h2>{pageData.discover_title}</h2>
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: pageData.discover_description,
                    }}
                  ></h4>
                </div>
                <div className="video-container">
                  <video
                    src={pageData.discover_video}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                  ></video>
                </div>
              </div>

              <div className="col-md-7 col-lg-7 ps-lg-5" ref={scrollColumnRef}>
                {/* ref={scrollColumnRef}*/}
                <div className="discover-cards">
                  <div className="row">
                    {pageData.discover_repeater.map((row, j) => {
                      return (
                        <div className="col-md-6" key={j}>
                          <div className="discover-card">
                            <Image
                              width={96}
                              height={96}
                              src={row.discover_repeater_image}
                              alt={row.discover_repeater_title}
                            />
                            <h4>{row.discover_repeater_title}</h4>
                            <p>{row.discover_repeater_description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div></div>
      )}

      {pageData.discover_repeater ? (
        <section className="discover_blk pad_cmn_blk d-block d-lg-none">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <div className="title_blk title-big">
                  <h2>{pageData.discover_title}</h2>
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: pageData.discover_description,
                    }}
                  ></h4>
                </div>
                {windowWidth > 991 && (
                  <div className="video-container">
                    <video
                      src={pageData.discover_video}
                      autoPlay={true}
                      loop={true}
                      muted={true}
                    ></video>
                  </div>
                )}
              </div>

              <div className="col-12">
                <div className="discover-cards">
                  <div className="row">
                    <div className="col pe-0 ps-0">
                      <Slider {...discoverSliderSettings}>
                        {pageData.discover_repeater.map((mrow, k) => {
                          return (
                            <div className="" key={k}>
                              <div className="discover-card">
                                <Image
                                  width={96}
                                  height={96}
                                  src={mrow.discover_repeater_image}
                                  alt={mrow.discover_repeater_title}
                                />
                                <h4>{mrow.discover_repeater_title}</h4>
                                <p>{mrow.discover_repeater_description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div></div>
      )}
      <section className="home_abt pad_cmn_blk" style={abtBg}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 home_abt_cnt">
              <div className="title_blk title-big">
                <h2>{pageData.about_us_title}</h2>
              </div>

              <p>{pageData.about_us_description}</p>

              {pageData.about_repeater ? (
                <ul>
                  {pageData.about_repeater.map((abtrow, l) => {
                    return (
                      <li key={l}>
                        <h4>{abtrow.repeater_value}</h4>
                        <p>{abtrow.repeater_description}</p>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p></p>
              )}
            </div>

            {windowWidth > 991 && (
              <div className="col-lg-5">
                <div className="gwebpro-logo">
                  <video
                    src={pageData.background_video}
                    autoPlay
                    muted
                    loop
                  ></video>
                  <LogoGwebproLetterG />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="market_tab_blk pad_cmn_blk">
        <div className="container-fluid">
          <div className="row">
            {windowWidth > 991 && (
              <div className="col-lg-6">
                <div className="video-container">
                  <video
                    src={pageData.section_video}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                  ></video>
                </div>
              </div>
            )}

            <div className="col-lg-6">
              <div className="title_blk">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: pageData.section_title_intgrtd,
                  }}
                ></h2>
                <p>{pageData.section_description_intgrtd}</p>
              </div>

              <Tabs tabsData={pageData.marketing_tab_repeater} />
            </div>
          </div>
        </div>
      </section>

      <section className="client_slider_blk pad_cmn_blk" style={clientBg}>
        <div className="container">
          <div className="title_blk text-center">
            <h2>Our Happy Clients</h2>
          </div>

          <ClientSlider clientTab={pageData.happy_client_list} />

          <div className="clnt-btn text-center">
            <Link href="/" className="btn-white">
              View Our Case Studies
            </Link>
          </div>
        </div>
      </section>

      <section className="our_work pad_cmn_blk">
        <div className="container">
          <div className="title_blk text-center mb-md-5">
            <h2>
              Some Of <br />
              Our Finest Works
            </h2>
          </div>
        </div>

        <MarqueBlock
          portfolioOne={pageData.our_portfolio_row1}
          portfolioTwo={pageData.our_portfolio_row2}
        />

        <div className="portfolio_btn text-center">
          <Link href="/">
            View All Portfolio <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      <section className="address_blk pad_cmn_blk">
        <div className="container">
          <AddressTab />
        </div>
      </section>
    </>
  );
};

export default Home;
