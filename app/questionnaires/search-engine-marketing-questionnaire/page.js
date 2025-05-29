import CheckScreenWidth from "@/app/components/CheckScreenWidth";
import NavLink from "@/app/components/NavLink";
import Link from "next/link";

export default function page() {
  return (
    <>
      <section className="services-banner inner-page-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="banner-content">
                <div className="position-relative title_blk">
                  <h1>Questionnaires</h1>
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
      <div className="breadcrumb">
        <Link href="/">Home</Link>/
        <NavLink href="/questionnaires">Questionnaires</NavLink>
      </div>
    </>
  );
}
