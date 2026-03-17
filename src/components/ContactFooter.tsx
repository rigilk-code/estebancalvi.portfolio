const ContactFooter = () => {
  return (
    <footer id="contact" className="bg-accent text-accent-foreground py-20 px-8 md:px-16 lg:px-40 relative overflow-hidden">
      {/* Geometric miscellanies */}
      <div className="absolute top-8 right-12 w-10 h-10 border-2 border-accent-foreground hidden md:block" />
      <div className="absolute bottom-12 left-1/3 w-16 h-[2px] bg-accent-foreground hidden md:block" />

      <div className="relative z-10 max-w-3xl">
        <p className="text-label-large text-accent-foreground/70 mb-2">
          Get In Touch
        </p>
        <h2 className="font-heading text-display-small mb-8">
          Let's build something together.
        </h2>

        <div className="space-y-4 mb-12">
          <a
            href="mailto:estebancalvi@gmail.com"
            className="text-title-large block hover:underline"
          >
            estebancalvi@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/estebancalvi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-title-large block hover:underline"
          >
            linkedin.com/in/estebancalvi
          </a>
        </div>

        <div className="border-t border-accent-foreground/30 pt-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-body-medium text-accent-foreground/70">
            © {new Date().getFullYear()} Esteban Calvi. All rights reserved.
          </p>
          <p className="text-body-medium text-accent-foreground/70">
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
