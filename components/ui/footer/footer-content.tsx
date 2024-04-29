import Link from 'next/link';
import Logo from '../header/logo';

export default function FooterContent() {
  return (
    <footer className="jusitfy-center flex flex-wrap gap-2xl  laptop:justify-between">
      <div className="flex flex-col gap-sm max-laptop:hidden">
        <p className="sub-heading font-normal">ACTE 5</p>
        <Logo className="w-4xl"></Logo>
      </div>
      <nav className="flex flex-wrap justify-between gap-3xl max-laptop:w-full tablet:flex-nowrap laptop:justify-normal">
        <section className="flex flex-col gap-sm">
          <Link className="sub-heading font-normal" href="evenementiel">
            Evenementiel
          </Link>
          <Link className="body" href="evenementiel/service">
            Service
          </Link>
          <Link className="body" href="evenementiel/temoignages">
            Témoignages
          </Link>
          <Link className="body" href="evenementiel/a-propos">
            A propos
          </Link>
          <Link className="body" href="evenementiel/blog">
            Blog
          </Link>
          <Link className="body" href="evenementiel/contact">
            Contact
          </Link>
        </section>
        <section className="flex flex-col gap-sm">
          <Link className="sub-heading font-normal" href="spectacle">
            Spectacle
          </Link>
          <Link className="body" href="spectacle/revue-scoute">
            Revue scoute
          </Link>
          <Link className="body" href="spectacle/a-laffiche">
            A l'affiche
          </Link>
          <Link className="body" href="spectacle/portfolio">
            Portfolio
          </Link>
          <Link className="body" href="spectacle/a-propos">
            A propos
          </Link>
          <Link className="body" href="spectacle/contact">
            Contact
          </Link>
        </section>
        <section className="flex flex-col gap-sm">
          <Link className="sub-heading font-normal" href="legal">
            Informations légales
          </Link>
          <Link className="body" href="spectacle/revue-scoute">
            Politique de confidentialité
          </Link>
          <Link className="body" href="spectacle/revue-scoute">
            Mentions légales
          </Link>
        </section>
        <section className="flex flex-col gap-sm">
          <p className="sub-heading font-normal">Nous suivre</p>
          <p className="body">Social 1</p>
          <p className="body">Social 2</p>
          <p className="body">Social 3</p>
        </section>
      </nav>
    </footer>
  );
}
