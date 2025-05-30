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
                  <h1>Client Business Portfolio</h1>
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
        <NavLink href="/questionnaires/client-business-details-questionnaire">
          Client Business Portfolio
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
                        Please fill out the information below to ensure your
                        business listings online are consistent. This
                        information will help us to ensure every listing we
                        create is correct with no discrepancies.
                      </p>
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
                        placeholder="Website *"
                        required=""
                        type="text"
                        name="website"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Physical Address:
                        <br />
                        (If company has multiple locations, please list all of
                        them)
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">Email Address & Phone No:</label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">Hours of Operation:</label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Website FTP and Hosting Login Details:
                      </label>
                      <input type="file" name="" id="" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Provide us website admin login details: (If you have)
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Business Owner’s Name or Manager’s Name (Please provide
                        us the name and designation of the owner(s) or
                        authorized manager(s) – they will be listed on public
                        business directories).
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        When was the business established? Provide the date
                        (month and year).
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What is the approximate number of employees and the
                        estimated yearly revenue?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What industry and category is your business in?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please provide us a description of your business goals
                        and philosophy?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any Social Media Profile’s? If yes, please
                        provide the URLs and login access to, Twitter, Linkedin,
                        Pinterest, Youtube and any other social media profiles.
                        For Facebook - please set manny.saran@gwebpro.com as the
                        Page Role Manager.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have a photo of the Owner or the authorized
                        manager? If yes, please send the image your marketing
                        consultant or send to sales@gwebpro.com.
                      </label>
                      <input type="file" name="" id="" />
                    </div>
                    <div className="col-12">
                      <p>
                        <strong>Detail Information of Business</strong>
                      </p>
                      <label htmlFor="">
                        Do you have other corresponding business website? If
                        yes, please mention the URL of those websites:
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have a verified Local Google Plus page for your
                        location(s)? If yes, then please provide us the URL and
                        assign administrative access to cglen30@gmail.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <p>
                        <strong>Additional</strong>
                      </p>
                      <label htmlFor="">
                        What is your Business Number (GST/HST number)?
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Which areas do you target? Specify all cities, regions
                        and countries.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-md-6">
                      <p>Does your business have parking available? (Yes/No)</p>
                      <div className="input_radio">
                        <input
                          type="radio"
                          id="business_parking_yes"
                          name="business_parking"
                          value="yes"
                        />
                        <label for="business_parking_yes">Yes</label>
                        <input
                          type="radio"
                          id="business_parking_no"
                          name="business_parking"
                          value="no"
                        />
                        <label for="business_parking_no">No</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="">
                        What payment methods do you accept?
                      </label>
                      <input type="text" name="" id="" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        How do you prefer to communicate with your customers?
                        (Phone/Email)
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Did your business use to operate under a different name
                        previously, either through a change of branding,
                        ownership or a new acquisition? If yes, please mention
                        the previous business name.
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Does your business have more than one business name? If
                        yes, please mention the other associated names
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
