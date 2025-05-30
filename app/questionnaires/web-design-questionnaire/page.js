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
                  <h1>Web Design Questionnaire</h1>
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
        <Link href="/questionnaires">Questionnaires</Link>/
        <NavLink href="/questionnaires/web-design-questionnaire">
          Web Design Questionnaire
        </NavLink>
      </div>
      <section className="section-contact-form pad_cmn_blk">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="contact-form form-questionnaires">
                <form>
                  <div className="row">
                    <div className="col-12">
                      <p>
                        We’re very excited to work with you on your website.
                        This document is a starter questionnaire for us to
                        understand your brand, target market, competition,
                        functions of website and more. The more we understand
                        about your business, the better we can create the best
                        possible design.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <input
                        placeholder="Contact Name *"
                        required=""
                        type="text"
                        name="contact_name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        placeholder="Business Name *"
                        required=""
                        type="text"
                        name="business_name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        placeholder="Business Address *"
                        required=""
                        type="text"
                        name="business_address"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        placeholder="Business Email *"
                        required=""
                        type="email"
                        name="business_email"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        placeholder="Business Phone Number *"
                        required=""
                        type="tel"
                        name="business_phone_number"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        placeholder="Business Fax *"
                        required=""
                        type="tel"
                        name="business_fax"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Briefly describe your company and its products/services?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please briefly describe the purpose of your website?
                        What are the goals for your website?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Describe the demographics of the visitors who will be
                        visiting your website? Who will be your primary target
                        market?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have an existing logo or is G Web Pro making your
                        logo? (Note: We don’t begin a design mockup until a logo
                        is received. If you have a logo, please attach it in a
                        transparent high resolution format such as eps, png, or
                        tiff)
                      </label>
                      <input type="file" name="" id="" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please list 5 websites that you find attractive and
                        describe why you like them. Order them from most
                        favourite to least favourite.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please list 5 local or national competitors in your
                        industry? (Provide names and website URL’s)
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What type of image do you want your website to portray?
                        When thinking about your company, what images comes to
                        mind?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have a specific style in mind for your website?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What is your preferred navigation structure? Any special
                        requests? (NOTE: Navigation structure refers to the
                        pages that will be available to users from the main
                        navigation menu. For example, Home, About Us, Services,
                        Gallery, News, Etc. Also list any sub-categories for
                        your products/services or a reference website that is
                        similar.)
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any special requests for photos or graphics
                        on the home page?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have content written for your website? What
                        special content should be present on your home page?
                        (NOTE: Special Content refers to the individualized
                        sections that a home page is often broken into. For
                        example, a web design company may have sections for
                        Company News, Industry News, Testimonials, Our Team,
                        etc.)
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please provide the text for the welcome section of your
                        home page. (NOTE: It’s best to supply the home page text
                        before designs are initiated. The designers can then
                        work around the text and know how much space it will
                        require on the home page. If you don’t have the content
                        ready, try to provide a rough estimate on the number of
                        characters.)
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Describe in detail any particular features or function
                        for your website? What will clients be able to do and
                        see on certain pages? Do you have any specific
                        requirements for each function? (For example. There
                        should be a gallery for each project or be able to zoom
                        in and out of each image.)
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">Any other comments or requests?</label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>

                    <div className="col-12">
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
