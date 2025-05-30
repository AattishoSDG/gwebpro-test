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
                  <h1>Search Engine Marketing Questionnaire</h1>
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
        <NavLink href="/questionnaires/search-engine-marketing-questionnaire">
          Search Engine Marketing Questionnaire
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
                        understand your brand, target market, competition,
                        competitive advantage and more. The more we understand
                        about your business, the better we can develop relevant
                        ad copy, test out new strategies and to optimize your ad
                        campaign.
                      </p>
                    </div>
                    <div className="col-12">
                      <input
                        placeholder="Company Name *"
                        required=""
                        type="text"
                        name="company_name"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Are you currently doing any advertising for your
                        business? Please provide details.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have an existing Google Adwords Account? If yes,
                        please provide your customer ID number?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">What are your marketing goals?</label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Who are your direct competitors? (Provide name and
                        website URL’s)
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        How are you different than the competition? What is your
                        unique selling position?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Who is your target audience? Please explain each segment
                        and what aspects of your business are targeted to them.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What are the demographics of your target audience? (Ex.
                        Age, Gender, Marital Status, etc.)
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Which geographical area(s) do you want to target?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have seasonal products or services? If yes,
                        please provide details.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What are your best-selling products or services? Please
                        explain in detail.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        List some keywords that describe your business. Think
                        from a customer’s point of view.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any promotions, discounts or incentives that
                        you want to mention in your ad campaign?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you request any specific keyword phrases to be
                        included in your campaign?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you use Google Analytics? If yes, please give
                        administrative access to analytics@gwebpro.com for us to
                        link your Adwords campaign to your Analytics account.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Who makes changes to your website, such as editing page
                        copy or adding new pages? Do you have an in-house team,
                        web agency or will G Web Pro be doing the changes?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have a Google Maps account? If yes, please give
                        administrative access to cglen30@gmail.com for us to
                        link your Adwords account to your location.
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
