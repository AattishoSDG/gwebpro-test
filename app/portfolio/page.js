"use client";
// import { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import NavLink from "../components/NavLink";
import CheckScreenWidth from "../components/CheckScreenWidth";
import BrandMarket from "../components/BrandMarket";
import Image from "next/image";

export default function Portfolio() {
  // const [scrollbarHeight, setScrollbarHeight] = useState(0);
  // useEffect(() => {
  //   const setScrollbarHeightFunc = () => {
  //     setScrollbarHeight(
  //       window.innerHeight - document.documentElement.clientHeight
  //     );
  //     document.documentElement.style.setProperty(
  //       "--scrollbar-height",
  //       `${scrollbarHeight}px`
  //     );
  //   };

  //   setScrollbarHeightFunc(); // Initial execution
  //   window.addEventListener("resize", setScrollbarHeightFunc); // Update on resize
  //   console.log(scrollbarHeight);

  //   return () => {
  //     window.removeEventListener("resize", setScrollbarHeightFunc); // Cleanup on unmount
  //   };
  // });
  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk">
                  <h1>
                    Our Latest <span>Work</span>
                  </h1>
                  <p>
                    Our goal is to nurture your vision and provide innovative,
                    custom solutions for all your marketing needs. At GWebPro
                    Marketing Inc, we understand the value of your brand. We
                    provide a range of customized services including branding,
                    website design & development, marketing consultation, SEO,
                    and more.
                  </p>
                </div>
                <CheckScreenWidth setWidth={991}>
                  <div className="video-container">
                    <video
                      src="images/services-banner.mp4"
                      autoPlay
                      muted
                      loop
                    ></video>
                  </div>
                </CheckScreenWidth>
                <div className="scroll"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="breadcrumb">
        <NavLink href="/">Home</NavLink>/
        <NavLink href="/portfolio">Portfolio</NavLink>
      </div>
      <section className="section-portfolio-list">
        <div className="container">
          <div className="row">
            <div className="col">
              <Tabs defaultActiveKey={0} className="mb-3">
                <Tab eventKey={0} title="Web Development">
                  <div className="row">
                    <div className="col-12">
                      <div className="title_blk text-center">
                        <h2>Featured Case Study</h2>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-rows">
                    <div className="row portfolio-row">
                      <div className="col-md-6 has-btn-grp">
                        <h3>GTA EV Chargers</h3>
                        <h4>
                          Web Design and Development for a Professional Business
                        </h4>
                        <p>
                          Lorem Ipsum has been the industry&apos;s standard
                          dummy text ever since the 1500s, when an unknown
                          printer took a galley of type and scrambled it to make
                          a type specimen book.
                        </p>
                        <ul>
                          <li>Web Development</li>
                          <li>SEO</li>
                          <li>Pay Per Click</li>
                        </ul>
                        <a href="#">View Case Study</a>
                        <a href="#">View Live Site</a>
                      </div>
                      <div className="col-md-6">
                        <Image
                          src="/images/portfolio-gta-ev.webp"
                          alt=""
                          width={739}
                          height={477}
                        />
                      </div>
                    </div>
                    <div className="row portfolio-row">
                      <div className="col-md-6 has-btn-grp">
                        <h3>Trust Mortgages</h3>
                        <h4>
                          Web Design and Development for a Professional Business
                        </h4>
                        <p>
                          Lorem Ipsum has been the industry&apos;s standard
                          dummy text ever since the 1500s, when an unknown
                          printer took a galley of type and scrambled it to make
                          a type specimen book.
                        </p>
                        <ul>
                          <li>Web Development</li>
                          <li>SEO</li>
                          <li>Pay Per Click</li>
                        </ul>
                        <a href="">View Case Study</a>
                        <a href="">View Live Site</a>
                      </div>
                      <div className="col-md-6">
                        <Image
                          src="/images/portfolio-trust-mortgages.webp"
                          alt=""
                          width={739}
                          height={477}
                        />
                      </div>
                    </div>
                    <div className="row portfolio-row">
                      <div className="col-md-6 has-btn-grp">
                        <h3>Woodbine Banquest Hall</h3>
                        <h4>
                          Web Design and Development for a Professional Business
                        </h4>
                        <p>
                          Lorem Ipsum has been the industry&apos;s standard
                          dummy text ever since the 1500s, when an unknown
                          printer took a galley of type and scrambled it to make
                          a type specimen book.
                        </p>
                        <ul>
                          <li>Web Development</li>
                          <li>SEO</li>
                          <li>Pay Per Click</li>
                        </ul>
                        <a href="">View Case Study</a>
                        <a href="">View Live Site</a>
                      </div>
                      <div className="col-md-6">
                        <Image
                          src="/images/portfolio-woodbine.webp"
                          alt=""
                          width={739}
                          height={477}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row view-more">
                    <div className="col-12">
                      <button>
                        View more{" "}
                        <Image
                          src="/images/rounded-rarr.svg"
                          alt=""
                          width={56}
                          height={17}
                        />
                      </button>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey={1} title="SEO">
                  SEO
                </Tab>
                <Tab eventKey={2} title="Pay Per Click">
                  Pay Per Click
                </Tab>
                <Tab eventKey={3} title="Social Media Management">
                  Social Media Management
                </Tab>
                <Tab eventKey={4} title="UX/UI">
                  UX/UI
                </Tab>
                <Tab eventKey={5} title="Consultation And Audit">
                  Consultation And Audit
                </Tab>
                <Tab
                  as={"button"}
                  title={
                    <Image
                      src="/images/search-icon.svg"
                      width={26}
                      height={26}
                      alt=""
                    />
                  }
                ></Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <BrandMarket />
    </>
  );
}
