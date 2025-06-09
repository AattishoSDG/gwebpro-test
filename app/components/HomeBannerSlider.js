"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller, Autoplay } from "swiper/modules";
import CustomCursorWrapper from "./CustomCursor";
import ScrollButton from "./ScrollButton";
import CheckMobile from "./CheckMobile";
import CheckScreenWidth from "./CheckScreenWidth";
import Link from "next/link";
import Image from "next/image";

const slidesData = [
  {
    id: 1,
    title:
      "Professional <span>Digital Marketing Agency</span> in Toronto for Your Business",
    description:
      "We offer complete digital marketing services for businesses of all sizes. As a leading digital marketing company in Toronto, our team helps you set up websites, run online ads, manage SEO, and create social media plans. We use the best methods to promote your business online. Every service is planned carefully to match your needs.",
    // videoUrl: "/videos/slide1.mp4",
    linkUrl: "/page1",
    // cursorText: "/images/gwebpro-red-circle.png",
    cursorText: "/images/custom-cursor-text.svg",
  },
  {
    id: 2,
    title:
      "A <span>Custom Software Development</span> Company in Toronto You Can Rely On",
    description:
      "We design and develop software to meet your business needs. As a top software development company in Toronto, our services include website development, CMS creation, and custom apps. Our team works with you at every step of development to ensure smooth delivery of your project. We focus on making practical and easy-to-use solutions that fit your business goals.",
    // videoUrl: "/videos/slide2.mp4",
    linkUrl: "/page2",
    // cursorText: "/images/gwebpro-blue-circle.png",
    cursorText: "/images/custom-cursor-text.svg",
  },
  {
    id: 3,
    title: "<span>Consulting Services</span> to Plan Your Digital Strategy",
    description:
      "We offer consulting services to guide your business’s digital plans. Our team listens to your needs and suggests the best approach. As a trusted management consulting firm in Toronto, we help you make informed choices for marketing, website design, and software development. Every plan is built with care, based on your business goals and budget.",
    // videoUrl: "/videos/slide3.mp4",
    linkUrl: "/page3",
    // cursorText: "/images/gwebpro-green-circle.png",
    cursorText: "/images/custom-cursor-text.svg",
  },
];

export default function HomeBannerSlider({ pageData }) {
  const [activeSlide, setActiveSlide] = useState(0);
  // In HomeBannerSlider component
  const [titleSwiper, setTitleSwiper] = useState(null);
  const [descSwiper, setDescSwiper] = useState(null);

  // Set up controller relationship
  // useEffect(() => {
  //   if (titleSwiper && descSwiper) {
  //     titleSwiper.controller.control = descSwiper;
  //     descSwiper.controller.control = titleSwiper;
  //   }
  // }, [titleSwiper, descSwiper]);

  const handleSlideChange = (swiper) => {
    console.log(swiper);
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <>
      <section className="section-home-hero">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 ps-md-5 order-2 order-md-1">
              <Swiper
                modules={[Controller, Autoplay]}
                onSwiper={setTitleSwiper}
                controller={{ control: descSwiper }}
                onSlideChange={handleSlideChange}
                autoplay={{
                  delay: 3000, // 3 seconds delay between slides
                  disableOnInteraction: false, // Continue autoplay after user interactions
                  pauseOnMouseEnter: true, // Pause when mouse enters slider
                }}
                autoHeight={true}
                // loop={true}
              >
                {/* <SwiperSlide>
                  <p>1</p>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: pageData.banner_title,
                    }}
                  ></h1>
                </SwiperSlide>
                <SwiperSlide>
                  <p>2</p>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: pageData.banner_title,
                    }}
                  ></h1>
                </SwiperSlide>
                <SwiperSlide>
                  <p>3</p>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: pageData.banner_title,
                    }}
                  ></h1>
                </SwiperSlide> */}
                {slidesData.map((e, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <h1
                        dangerouslySetInnerHTML={{
                          __html: e.title,
                        }}
                      ></h1>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="next-section-btn">
                <ScrollButton sectionId="leader-in-marketing" />
                <Swiper
                  modules={[Controller]}
                  onSwiper={setDescSwiper}
                  controller={{ control: titleSwiper }}
                  autoHeight={true}
                >
                  {/* <SwiperSlide>
                    <p>{pageData.banner_description}</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <p>{pageData.banner_description}</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <p>{pageData.banner_description}</p>
                  </SwiperSlide> */}

                  {slidesData.map((e, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <p>{e.description}</p>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <CheckMobile setWidth={768}>
                  <Link
                    className="custom-cursor active position-static"
                    style={{ transform: "unset" }}
                    href={slidesData[activeSlide].linkUrl}
                  >
                    {/* "/images/custom-cursor-text.svg" */}
                    <Image
                      src={slidesData[activeSlide].cursorText}
                      alt=""
                      width={180}
                      height={180}
                    />
                  </Link>
                </CheckMobile>
              </div>
              <div className="widgets-container">
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
              <CheckScreenWidth setWidth={767}>
                <CustomCursorWrapper
                  cursorText={slidesData[activeSlide].cursorText}
                >
                  <a href={slidesData[activeSlide].linkUrl}>
                    <div className="video-container">
                      <video
                        src={
                          pageData.banner_video
                            ? pageData.banner_video
                            : undefined
                        }
                        autoPlay={true}
                        loop={true}
                        muted={true}
                      ></video>
                    </div>
                  </a>
                </CustomCursorWrapper>
              </CheckScreenWidth>
              <CheckMobile setWidth={768}>
                {/* <CustomCursorWrapper
                  cursorText={slidesData[activeSlide].cursorText}
                >
                  <a href={slidesData[activeSlide].linkUrl}> */}
                <div className="video-container">
                  <video
                    src={
                      pageData.banner_video ? pageData.banner_video : undefined
                    }
                    autoPlay={true}
                    loop={true}
                    muted={true}
                  ></video>
                </div>
                {/* </a>
                </CustomCursorWrapper> */}
              </CheckMobile>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
