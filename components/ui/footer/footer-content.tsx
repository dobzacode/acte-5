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
        <section className="flex flex-col gap-sm ">
          <Link
            scroll={false}
            className="sub-heading pb-sm font-normal hover:opacity-hover"
            href="agence-evenementielle-strasbourg"
          >
            Evenementiel
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="agence-evenementielle-strasbourg/service"
          >
            Service
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="agence-evenementielle-strasbourg/temoignages"
          >
            Témoignages
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="agence-evenementielle-strasbourg/a-propos"
          >
            A propos
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="agence-evenementielle-strasbourg/blog"
          >
            Blog
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="agence-evenementielle-strasbourg/contact"
          >
            Contact
          </Link>
        </section>
        <section className="flex flex-col gap-sm">
          <Link
            scroll={false}
            className="sub-heading pb-sm font-normal hover:opacity-hover"
            href="spectacles-strasbourg"
          >
            Spectacle
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="spectacles-strasbourg/revue-scoute"
          >
            Revue scoute
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="spectacles-strasbourg/a-laffiche"
          >
            A l'affiche
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="spectacles-strasbourg/portfolio"
          >
            Portfolio
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="spectacles-strasbourg/a-propos"
          >
            A propos
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="spectacles-strasbourg/contact"
          >
            Contact
          </Link>
        </section>
        <section className="flex flex-col gap-sm">
          <p className="sub-heading pb-sm font-normal ">Informations légales</p>
          <Link className="body hover:opacity-hover" href="politique-confidentialite">
            Politique de confidentialité
          </Link>
          <Link className="body hover:opacity-hover" href="mentions-legales">
            Mentions légales
          </Link>
        </section>
        <section className="flex flex-col gap-sm">
          <p className="sub-heading pb-sm font-normal ">Nous suivre</p>
          <p className="body opacity-hover">Social 1</p>
          <p className="body opacity-hover">Social 2</p>
          <p className="body opacity-hover">Social 3</p>
        </section>
      </nav>
    </footer>
  );
}
