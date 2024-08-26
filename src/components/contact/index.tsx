import { FormEvent, useState, FC } from "react";
import { LeftPart } from "../home";
import { supabase } from "../config/supabaseClient";
import locationImage from "../../assets/images/contact.svg";
import callImage from "../../assets/images/call.svg";
import emailImage from "../../assets/images/mail-2.svg";
import twitterImage from "../../assets/images/twitter.svg";
import instagramImage from "../../assets/images/instagram.svg";
import facebookImage from "../../assets/images/facebook.svg";
import socialImage from "../../assets/images/social.svg";

export const Contact: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errorMessage, setError] = useState<string | null>(null);
  const [successMessage, setSuccess] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = {
      name: !name,
      email: !email,
      phone: !phone,
      message: !message,
    };

    if (Object.values(errors).includes(true)) {
      setFormErrors(errors);
      setError("All fields must be filled out.");
      setSuccess(null);
      return;
    }

    if (!supabase) {
      setError("Service is currently unavailable. Please try again later.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("Table")
        .insert([{ name, email, phone, message }]);

      if (error) {
        console.error("Error:", error);
        setError(
          "Please try again, there was an issue with sending data to the server."
        );
        setSuccess(null);
      } else {
        console.log("Data:", data);
        setSuccess("Your message has been sent successfully!");
        setError(null);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setFormErrors({
          name: false,
          email: false,
          phone: false,
          message: false,
        });
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("Unexpected error, please try again later.");
      setSuccess(null);
    }
  };

  return (
    <>
      <LeftPart />

      <div id="contact" className="kioto_tm_section">
        <div className="container">
          <div className="kioto_tm_contact">
            <div className="kioto_tm_title">
              <span>// Get In Touch</span>
            </div>
            <div className="info_list">
              <ul>
                <li>
                  <div className="list_inner">
                    <img
                      className="svg icon"
                      src={locationImage}
                      alt="Location"
                    />
                    <span>9449 Bay Colony Dr, Des Plaines, IL USA</span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <img className="svg icon" src={callImage} alt="Call" />
                    <span>
                      <a className="line_effect" href="tel:8478059655">
                        847-805-9655
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <img className="svg icon" src={emailImage} alt="Mail" />
                    <span>
                      <a
                        className="line_effect"
                        href="mailto:milustefano25@gmail.com"
                      >
                        milustefano25@gmail.com
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <img className="svg icon" src={socialImage} alt="Social" />
                    <div className="kioto_tm_social">
                      <ul>
                        <li>
                          <a
                            href="https://x.com/milustefano25"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="svg"
                              src={twitterImage}
                              alt="Twitter"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/share/HZchAE6vhbk4S3LS/?mibextid=LQQJ4d"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="svg"
                              src={facebookImage}
                              alt="Facebook"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/rsbarbarian?igsh=MTdzZGI1bW9vbmEwNw%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="svg"
                              src={instagramImage}
                              alt="Instagram"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="form_wrapper">
              <form id="contactForm" onSubmit={handleSubmit}>
                <ul>
                  <li>
                    <input
                      type="text"
                      placeholder="Name"
                      name="contact_name"
                      className={`cf-form-control ${
                        formErrors.name ? "error" : ""
                      }`}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ borderColor: formErrors.name ? "red" : "" }}
                    />
                    <span></span>
                  </li>
                  <li>
                    <input
                      type="email"
                      placeholder="Email"
                      name="contact_email"
                      className={`cf-form-control ${
                        formErrors.email ? "error" : ""
                      }`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ borderColor: formErrors.email ? "red" : "" }}
                    />
                    <span></span>
                  </li>
                  <li>
                    <input
                      type="text"
                      placeholder="Phone"
                      name="contact_phone"
                      className={`cf-form-control ${
                        formErrors.phone ? "error" : ""
                      }`}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ borderColor: formErrors.phone ? "red" : "" }}
                    />
                    <span></span>
                  </li>
                  <li id="text-area-w">
                    <textarea
                      placeholder="Message"
                      name="contact_message"
                      className={`cf-form-control ${
                        formErrors.message ? "error" : ""
                      }`}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ borderColor: formErrors.message ? "red" : "" }}
                    ></textarea>
                  </li>
                </ul>
                <div className="kioto_tm_button">
                  <button
                    type="submit"
                    id="send_message"
                    className="tm_text_effect"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
            </div>

            <div className="my_map">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height="392"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=9449%20bay%20colony%20dr%20des%20plaines%20il&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
