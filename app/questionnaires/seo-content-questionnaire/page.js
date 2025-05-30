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
                  <h1>SEO and Content Questionnaire</h1>
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
        <NavLink href="/questionnaires/seo-content-questionnaire">
          SEO and Content Questionnaire
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
                        This document is a starter questionnaire for us to
                        understand your brand, target market, competitive
                        advantage and more. The more we understand about your
                        business, the better we can develop relevant copy that
                        speaks to your audiences.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <input
                        placeholder="Company Name *"
                        required=""
                        type="text"
                        name="company_name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        placeholder="Email ID *"
                        required=""
                        type="email"
                        name="email_id"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please provide a description of your company and its
                        history?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please provide a description and the features of all
                        your products/services?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What trends are happening now or could happen in the
                        future that would affect your company and its products
                        and/or services?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What are the specific services or products you would
                        like to promote? Please list them in order of
                        importance.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Who is your demographic target audience (Ex. Age,
                        Gender, Marital Status, etc.)? What are your
                        geographical target markets?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Who are your main competitors? (Provide name and website
                        URL’s)
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What sets you apart from your competition? What is your
                        unique selling point?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What do you like and dislike about the way your
                        competitors present themselves online?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Describe your typical customer and their
                        needs/preferences.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What problems do your customers have that your business
                        solves?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Are there any previous work/projects/awards/events that
                        we should mention?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any photographs or other images you would
                        like to specifically incorporate into your content? If
                        yes, one of our consultants will contact you for further
                        steps.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have licenses/accreditations/memberships with
                        organizations? Do you offer any warranties or guarantees
                        for your products? Any insurance for your services?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have testimonials/references? Always try to
                        encourage satisfied customers to leave reviews for you
                        on Google and other review sites.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What are the primary keywords you would like to target?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What is the feeling you want your clients or consumers
                        to experience when they interact with your company
                        online?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <p>
                        <strong>
                          The questions below are only applicable to SEO
                          clients.
                        </strong>
                      </p>
                      <label htmlFor="">
                        Have you had any previous SEO efforts implemented on
                        site? If yes, explain details.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Who makes changes to your website? Do you have someone
                        or will G Web Pro be doing the changes?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any sub-domains? (Ex. subdomain.domain.com)
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have Google Analytics installed on website? If
                        yes, please give administrative access to
                        analytics@gwebpro.com - if no, we will create an account
                        for you.
                      </label>
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
