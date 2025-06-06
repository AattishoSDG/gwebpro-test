"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller, Autoplay } from "swiper/modules";
import CustomCursorWrapper from "./CustomCursor";
import ScrollButton from "./ScrollButton";
import CheckMobile from "./CheckMobile";
import CheckScreenWidth from "./CheckScreenWidth";

const slidesData = [
  {
    id: 1,
    title: "First Slide Title",
    description: "First slide description",
    // videoUrl: "/videos/slide1.mp4",
    linkUrl: "/page1",
    cursorText: "/images/gwebpro-red-circle.png",
  },
  {
    id: 2,
    title: "Second Slide Title",
    description: "Second slide description",
    // videoUrl: "/videos/slide2.mp4",
    linkUrl: "/page2",
    cursorText: "/images/gwebpro-blue-circle.png",
  },
  {
    id: 3,
    title: "Third Slide Title",
    description: "Third slide description",
    // videoUrl: "/videos/slide3.mp4",
    linkUrl: "/page3",
    cursorText: "/images/gwebpro-green-circle.png",
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
                      <h1>{e.title}</h1>
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
