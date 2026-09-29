import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [status, setStatus] = useState("");

  const contactItems = [
    {
      type: "email",
      label: "EMAIL",
      value: "sunilballadi24@gmail.com",
      href: "mailto:sunilballadi24@gmail.com",
    },
    {
      type: "phone",
      label: "PHONE",
      value: "+91 7795364566",
      href: "tel:+917795364566",
    },
    {
      type: "location",
      label: "LOCATION",
      value: "Bengaluru, Karnataka",
      href: "#",
    },
    {
      type: "linkedin",
      label: "LINKEDIN",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/sunil-5212a8301",
    },
    {
      type: "github",
      label: "GITHUB",
      value: "View my projects",
      href: "https://github.com/Sunil-7795",
    },
  ];

  const getIcon = (type) => {
    if (type === "email") {
      return (
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    }

    if (type === "phone") {
      return (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M6.5 3.5l3 1.5-1.5 4-2 .8c1 2.3 2.8 4.2 5.2 5.2l.8-2 4-1.5 1.5 3c.3.7 0 1.5-.6 1.9l-2.1 1.2c-.6.3-1.3.4-2 .2-5.7-1.7-9.5-5.5-11.2-11.2-.2-.7-.1-1.4.2-2L5 4.1c.4-.6 1.2-.9 1.5-.6Z" />
        </svg>
      );
    }

    if (type === "location") {
      return (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    }

    if (type === "linkedin") {
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.9c0-3.75-2-5.5-4.7-5.5-2.15 0-3.1 1.18-3.64 2.01V8.5H9.16V21h3.5v-6.19c0-1.63.3-3.21 2.33-3.21 2 0 2.02 1.86 2.02 3.31V21H21v-7.1Z" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0 1 12 6.84c.85 0 1.71.11 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12C22 6.48 17.52 2 12 2Z" />
      </svg>
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xkjgkqvw",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* CONTACT HEADING */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p>CONTACT</p>

          <h2>Let's connect.</h2>

          <span>
            I'm open to software development opportunities,
            collaborations and conversations about technology.
          </span>
        </motion.div>


        {/* CONTACT CONTENT */}
        <div className="contact-content">

          {/* LEFT SIDE */}
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >

            {contactItems.map((item) => (
              <motion.a
                key={item.type}
                href={item.href}
                className="contact-card"
                target={
                  item.type === "linkedin" ||
                  item.type === "github"
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.type === "linkedin" ||
                  item.type === "github"
                    ? "noopener noreferrer"
                    : undefined
                }
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                <div className="contact-icon">
                  {getIcon(item.type)}
                </div>

                <div className="contact-card-text">
                  <span>{item.label}</span>

                  <strong>{item.value}</strong>
                </div>
              </motion.a>
            ))}

          </motion.div>


          {/* RIGHT SIDE */}
          <motion.div
            className="contact-form-card"
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <form onSubmit={handleSubmit}>

              <div className="contact-form-row">

                <div className="contact-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    required
                  />
                </div>

                <div className="contact-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                  />
                </div>

              </div>

              <div className="contact-field">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
              </div>

              <div className="contact-field contact-message">
                <textarea
                  name="message"
                  placeholder="Message *"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={status === "sending"}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M22 2 11 13" />
                  <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                </svg>

                <span>
                  {status === "sending"
                    ? "Sending..."
                    : "Send Message"}
                </span>
              </button>

              {status === "success" && (
                <p className="contact-form-success">
                  ✓ Message sent successfully. Thank you for reaching out!
                </p>
              )}

              {status === "error" && (
                <p className="contact-form-error">
                  ✕ Something went wrong. Please try again.
                </p>
              )}

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;