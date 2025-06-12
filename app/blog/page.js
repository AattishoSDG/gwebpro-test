import Link from "next/link";
import CheckScreenWidth from "../components/CheckScreenWidth";
import NavLink from "../components/NavLink";
import Image from "next/image";

export default function page() {
  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk">
                  <h1>Blog</h1>
                </div>
                <CheckScreenWidth setWidth={991}>
                  <div className="video-container">
                    <video
                      src="/images/services-banner.mp4"
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
      <div className="breadcrumb mb-0">
        <Link href="/">Home</Link>/<NavLink href="/blog">Blog</NavLink>
      </div>
      <section className="pad_cmn_blk">
        <div className="container">
          <div className="row gy-5">
            <div className="col-md-6 col-lg-4">
              <Link href="/" className="blog-listing-link">
                <div className="blog-listing-card position-relative">
                  <div className="blog-listing-img">
                    <Image
                      src="/images/blog-featured-image.png"
                      alt="How to Choose the Best Digital Marketing Course in Kolkata"
                      width={550}
                      height={350}
                    />
                  </div>
                  <div className="blog-listing-title">
                    How to Choose the Best Digital Marketing Course in Kolkata
                    for Your Career Goals
                  </div>
                  <div className="blog-listing-date">
                    <span>May 08</span>, 2025
                  </div>
                  <div className="blog-listing-text">
                    Digital marketing is one of the fastest-growing careers.
                    With businesses shifting online a...
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="/" className="blog-listing-link">
                <div className="blog-listing-card position-relative">
                  <div className="blog-listing-img">
                    <Image
                      src="/images/blog-featured-image.png"
                      alt="Digital Marketing Training in Kolkata"
                      width={550}
                      height={350}
                    />
                  </div>
                  <div className="blog-listing-title">
                    Why Digital Marketing Training in Kolkata Is Essential for
                    Today’s Job Market
                  </div>
                  <div className="blog-listing-date">
                    <span>May 05</span>, 2025
                  </div>
                  <div className="blog-listing-text">
                    In today’s digital world, businesses are shifting online
                    faster than ever. From small lo...
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="/" className="blog-listing-link">
                <div className="blog-listing-card position-relative">
                  <div className="blog-listing-img">
                    <Image
                      src="/images/blog-featured-image.png"
                      alt="Digital Marketing Training in Kolkata"
                      width={550}
                      height={350}
                    />
                  </div>
                  <div className="blog-listing-title">
                    Why Digital Marketing Training in Kolkata Is Essential for
                    Today’s Job Market
                  </div>
                  <div className="blog-listing-date">
                    <span>May 05</span>, 2025
                  </div>
                  <div className="blog-listing-text">
                    In today’s digital world, businesses are shifting online
                    faster than ever. From small lo...
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="/" className="blog-listing-link">
                <div className="blog-listing-card position-relative">
                  <div className="blog-listing-img">
                    <Image
                      src="/images/blog-featured-image.png"
                      alt="Digital Marketing Training in Kolkata"
                      width={550}
                      height={350}
                    />
                  </div>
                  <div className="blog-listing-title">
                    Why Digital Marketing Training in Kolkata Is Essential for
                    Today’s Job Market
                  </div>
                  <div className="blog-listing-date">
                    <span>May 05</span>, 2025
                  </div>
                  <div className="blog-listing-text">
                    In today’s digital world, businesses are shifting online
                    faster than ever. From small lo...
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="/" className="blog-listing-link">
                <div className="blog-listing-card position-relative">
                  <div className="blog-listing-img">
                    <Image
                      src="/images/blog-featured-image.png"
                      alt="Digital Marketing Training in Kolkata"
                      width={550}
                      height={350}
                    />
                  </div>
                  <div className="blog-listing-title">
                    Why Digital Marketing Training in Kolkata Is Essential for
                    Today’s Job Market
                  </div>
                  <div className="blog-listing-date">
                    <span>May 05</span>, 2025
                  </div>
                  <div className="blog-listing-text">
                    In today’s digital world, businesses are shifting online
                    faster than ever. From small lo...
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="/" className="blog-listing-link">
                <div className="blog-listing-card position-relative">
                  <div className="blog-listing-img">
                    <Image
                      src="/images/blog-featured-image.png"
                      alt="Digital Marketing Training in Kolkata"
                      width={550}
                      height={350}
                    />
                  </div>
                  <div className="blog-listing-title">
                    Why Digital Marketing Training in Kolkata Is Essential for
                    Today’s Job Market
                  </div>
                  <div className="blog-listing-date">
                    <span>May 05</span>, 2025
                  </div>
                  <div className="blog-listing-text">
                    In today’s digital world, businesses are shifting online
                    faster than ever. From small lo...
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="/" className="blog-listing-link">
                <div className="blog-listing-card position-relative">
                  <div className="blog-listing-img">
                    <Image
                      src="/images/blog-featured-image.png"
                      alt="Digital Marketing Training in Kolkata"
                      width={550}
                      height={350}
                    />
                  </div>
                  <div className="blog-listing-title">
                    Why Digital Marketing Training in Kolkata Is Essential for
                    Today’s Job Market
                  </div>
                  <div className="blog-listing-date">
                    <span>May 05</span>, 2025
                  </div>
                  <div className="blog-listing-text">
                    In today’s digital world, businesses are shifting online
                    faster than ever. From small lo...
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="/" className="blog-listing-link">
                <div className="blog-listing-card position-relative">
                  <div className="blog-listing-img">
                    <Image
                      src="/images/blog-featured-image.png"
                      alt="Digital Marketing Training in Kolkata"
                      width={550}
                      height={350}
                    />
                  </div>
                  <div className="blog-listing-title">
                    Why Digital Marketing Training in Kolkata Is Essential for
                    Today’s Job Market
                  </div>
                  <div className="blog-listing-date">
                    <span>May 05</span>, 2025
                  </div>
                  <div className="blog-listing-text">
                    In today’s digital world, businesses are shifting online
                    faster than ever. From small lo...
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link href="/" className="blog-listing-link">
                <div className="blog-listing-card position-relative">
                  <div className="blog-listing-img">
                    <Image
                      src="/images/blog-featured-image.png"
                      alt="Digital Marketing Training in Kolkata"
                      width={550}
                      height={350}
                    />
                  </div>
                  <div className="blog-listing-title">
                    Why Digital Marketing Training in Kolkata Is Essential for
                    Today’s Job Market
                  </div>
                  <div className="blog-listing-date">
                    <span>May 05</span>, 2025
                  </div>
                  <div className="blog-listing-text">
                    In today’s digital world, businesses are shifting online
                    faster than ever. From small lo...
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
