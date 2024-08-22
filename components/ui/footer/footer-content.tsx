import Link from 'next/link';
import Logo from '../header/logo';

export default function FooterContent() {
  return (
    <footer className="section-px mx-auto flex flex-wrap justify-center gap-2xl laptop:container laptop:justify-between">
      <div className="flex flex-col items-center gap-xs max-laptop-large:hidden">
        <Logo width={160} height={160} className="rounded-xs"></Logo>
        <p className="font-[Quasimoda] text-xl">ACTE 5</p>
      </div>
      <nav className="flex grid-cols-2 flex-wrap justify-center gap-3xl max-laptop:w-full max-tablet:grid max-mobile-large:flex tablet:flex-nowrap tablet:justify-between laptop:justify-normal">
        <div className="flex flex-col items-center gap-sm max-tablet:hidden laptop-large:hidden">
          <Logo width={84} height={84} className="rounded-xs"></Logo>
          <p className="sub-heading whitespace-nowrap !font-extralight">ACTE 5</p>
        </div>
        <section className="flex flex-col gap-sm max-mobile-large:mr-auto">
          <Link
            scroll={false}
            className="sub-heading pb-sm text-md font-medium hover:opacity-hover"
            href="/agence-evenementielle-strasbourg"
          >
            Evenementiel
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="/agence-evenementielle-strasbourg/services"
          >
            Services
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="/agence-evenementielle-strasbourg/projets"
          >
            Projets
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="/agence-evenementielle-strasbourg/a-propos"
          >
            A propos
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="/agence-evenementielle-strasbourg/blog"
          >
            Blog
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="/agence-evenementielle-strasbourg/contact"
          >
            Contact
          </Link>
        </section>
        <section className="flex flex-col gap-sm">
          <Link
            scroll={false}
            className="sub-heading pb-sm text-md font-medium hover:opacity-hover"
            href="/spectacles-strasbourg"
          >
            Spectacle
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="/spectacles-strasbourg/revue-scoute"
          >
            Revue scoute
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="/spectacles-strasbourg/a-laffiche"
          >
            A l'affiche
          </Link>

          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="/spectacles-strasbourg/a-propos"
          >
            A propos
          </Link>
          <Link
            scroll={false}
            className="body hover:opacity-hover"
            href="/spectacles-strasbourg/contact"
          >
            Contact
          </Link>
        </section>
        <section className="flex flex-col gap-sm max-mobile-large:w-full">
          <p className="sub-heading pb-sm text-md font-medium">Informations légales</p>
          <Link className="body hover:opacity-hover" href="politique-confidentialite">
            Politique de confidentialité
          </Link>
          <Link className="body hover:opacity-hover" href="mentions-legales">
            Mentions légales
          </Link>
        </section>
        <section className="flex flex-col gap-sm max-mobile-large:w-full">
          <p className="sub-heading pb-sm text-md font-medium">Nous suivre</p>
          <a href="https://www.instagram.com/acte_5" className="body opacity-hover">
            Instagram
          </a>
          <a href="https://fr.linkedin.com/company/acte-5-event" className="body opacity-hover">
            Linkedin
          </a>
          <a
            href="https://www.facebook.com/acte5evenements/?locale=fr_FR"
            className="body opacity-hover"
          >
            Facebook
          </a>
        </section>
      </nav>
    </footer>
  );
}
