import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <section id="contact" className="relative py-20 ">
        <div class="text-center pb-10">
          <h2 class="font-heading text-xl md:text-2xl lg:text-4xl font-bold pb-5 ">
            Let's build a unique{" "}
            <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-300">
              Experience.
            </span>
          </h2>
          <span class="text-sm md:text-base ">
            I'm always open to discussing newwork or opportunities.
          </span>
        </div>
        <div className="max-w-2xl mx-auto md:p-5 rounded-md">
          <ContactForm />

    


        </div>
      </section>
    </>
  );
}
