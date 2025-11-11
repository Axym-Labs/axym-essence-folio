const Footer = () => {
  return (
    <footer className="mt-32 py-24 px-6 lg:px-8 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-bold text-white break-words leading-none">
          Axym Labs
        </div>
        
        <div className="space-y-4 text-base text-foreground/70">
          <p>
            <a
              href="mailto:contact@axym.org"
              className="text-accent hover:underline"
            >
              contact@axym.org
            </a>
          </p>
          <p>
            <a
              href="https://github.com/Axym-Labs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              github.com/Axym-Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
