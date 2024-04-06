import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="relative py-20"
        aria-labelledby="contact-heading"
      >
        <div className="text-center">
          <h2
            id="contact-heading"
            className=" text-xl md:text-2xl lg:text-4xl font-bold pb-5 "
          >
            Let's build a unique{" "}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-300">
              Experience.
            </span>
          </h2>
          <p className="text-sm md:text-base ">
            I'm always open to discussing new work or opportunities.
          </p>
        </div>
        
          <ContactForm aria-label="Contact form" />
    
      </section>
    </>
  );
}
