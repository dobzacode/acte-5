export async function generateMetadata() {
  return {
    title: 'Politique de Confidentialité | Acte 5',
    description:
      'Découvrez comment nous protégeons votre vie privée sur le site de Acte 5. Consultez notre politique de confidentialité pour comprendre comment nous traitons vos informations. Nous nous engageons à assurer la sécurité et la transparence dans toutes nos interactions en ligne.'
  };
}

export default async function HomePage() {
  return (
    <main className="section-px inner-section-gap relative mx-auto flex w-full flex-col overflow-hidden pb-2xl pt-4xl laptop:container tablet:pt-6xl">
      <h1 className="heading--extra-large max-mobile-large:text-heading-large max-mobile-large:leading-heading-large relative z-10 break-words pb-lg text-primary-400">
        POLITIQUE DE CONFIDENTIALITE
      </h1>

      <div className="flex flex-col gap-md">
        <h2 className="heading--sub-large">1. Objectif de la politique de confidentialité :</h2>
        <p className="body">
          L&apos;objectif de la politique de confidentialité est de vous informer sur la manière
          dont nous traitons vos données personnelles ainsi que les informations suivantes :
        </p>
        <ul className="body flex flex-col gap-xs pl-sm">
          {[
            '- Les données personnelles que nous recueillerons',
            "- L'utilisation des données recueillis",
            '- Qui a accès aux données recueillies',
            '- Les droits des utilisateurs du site'
          ].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <p className="body">
          Cette politique de confidentialité fonctionne parallèlement aux conditions générales
          d&apos;utilisation de notre site.
        </p>
      </div>
      <div className="flex flex-col gap-md">
        <h2 className="heading--sub-large">2 .Lois applicables</h2>
        <p className="body">
          Conformément à la RGPD, cette politique de confidentialité est conforme aux règlements
          suivants.
          <br></br>
          Les données à caractère personnel doivent être :
        </p>
        <ul className="body flex flex-col gap-xs pl-sm">
          {[
            '- Traitées de manière licite, loyale et transparente au regard de la personne concerné (licéité, loyauté, transparence)',
            "- Collectées pour des finalités déterminées, explicites et légitimes, et ne pas être traitées ultérieurement d'une manière incompatible avec ces finalités; le traitement ultérieur à des fins archivistiques dans l'intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques n'est pas considéré, conformément à l'article 89, paragraphe 1, comme incompatible avec les finalités initiales (limitation des finalités)",
            '- Adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées (minimisation des données)',
            '- Exactes et, si nécessaire, tenues à jour; toutes les mesures raisonnables doivent être prises pour que les données à caractère personnel qui sont inexactes, eu égard aux finalités pour lesquelles elles sont traitées, soient effacées ou rectifiées sans tarder (exactitude)',
            "- Conservées sous une forme permettant l'identification des personnes concernées pendant une durée n'excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont traitées; les données à caractère personnel peuvent être conservées pour des durées plus longues dans la mesure où elles seront traitées exclusivement à des fins archivistiques dans l'intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques conformément à l'article 89, paragraphe 1, pour autant que soient mises en œuvre les mesures techniques et organisationnelles appropriées requises par le règlement afin de garantir les droits et libertés de la personne concernée (limitation de la conservation)",
            "- Traitées de façon à garantir une sécurité appropriée des données à caractère personnel, y compris la protection contre le traitement non autorisé ou illicite et contre la perte, la destruction ou les degâts d'origine accidentelle, à l'aide de mesures techniques ou organisationnelles appropriées (intégrité et confidentialité)"
          ].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <p className="body">
          Le traitement n&apos;est licite que si, et dans la mesure où, au moins une des conditions
          suivantes est remplie :
        </p>
        <ul className="body flex flex-col gap-xs pl-sm">
          {[
            '- La personne concernée a consenti au traitement de ses données à caractère personnel pour une ou plusieurs finalités spécifiques',
            "- Le traitement est nécessaire à l'exécution d'un contrat auquel la personne concernée est partie ou à l'exécution de mesures précontractuelles prises à la demande de celle-ci",
            "- Le traitement est nécessaire à la sauvegarde des intérêts vitaux de la personne concernée ou d'une autre personne physique",
            "- Le traitement est nécessaire à l'exécution d'une mission d'intérêt public ou relevant de l'exercice de l'autorité publique dont est investi le responsable du traitement",
            '- Le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le responsable du traitement ou par un tiers, à moins que ne prévalent les intérêts ou les libertés et droits fondamentaux de la personne concernée qui exigent une protection des données à caractère personnel, notamment lorsque la personne concernée est un enfant.'
          ].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <p className="body">
          Pour les résidents de l&apos;État de Californie, cette politique de confidentialité vise à
          se conformer à la California Consumer Privacy Act (CCPA). S&apos;il y a des incohérences
          entre ce document et la CCPA, la législation de l&apos;État s&apos;appliquera. Si nous
          constatons des incohérences, nous modifierons notre politique pour nous conformer à la loi
          pertinente.
        </p>
      </div>
      <div className="flex flex-col gap-md">
        <h2 className="heading--sub-large">3. Consentement</h2>
        <p className="body">
          Les utilisateurs conviennent qu&apos;en utilisant notre site, ils consentent à :
        </p>
        <ul className="body flex flex-col gap-xs pl-sm">
          {[
            '- Les conditions énoncées dans la présente politique de confidentialité',
            "- La collecte, l'utilisation et le traitement de leurs données personnelles"
          ].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-md">
        <h2 className="heading--sub-large">4. Données collectées automatiquement</h2>
        <p className="body">Aucune donnée n&apos;est collectée automatiquement</p>
      </div>
      <div className="flex flex-col gap-md">
        <h2 className="heading--sub-large">5. Données recueillies de manière non automatique</h2>
        <p className="body">
          Nous pouvons également collecter les données suivantes lorsque vous effectuez certaines
          fonctions sur notre site :
        </p>
        <ul className="body flex flex-col gap-xs pl-sm">
          {['- Prénom et nom', '- Email', '- Téléphone'].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <p className="body">
          Ces données peuvent être recueillies au moyen des formulaires de contact présents sur
          notre site. Veuillez noter que nous ne collectons que les données qui nous aident à
          atteindre l&apos;objectif énoncé dans cette politique de confidentialité. Nous ne
          recueillerons pas de données supplémentaires sans vous en informer au préalable.
          <br />
          <br />
          Veuillez noter que nous ne collectons que les données qui nous aident à atteindre
          l&apos;objectif énoncé dans cette politique de confidentialité. Nous ne recueillerons pas
          de données supplémentaires sans vous en informer au préalable.
        </p>
      </div>
      <div className="flex flex-col gap-md">
        <h2 className="heading--sub-large">6. Utilisation des données personnelles</h2>
        <p className="body">
          Les données personnelles recueillies sur notre site seront utilisées uniquement aux fins
          précisées dans la présente politique ou indiquées sur les pages pertinentes de notre site.
          Nous n&apos;utiliserons pas vos données au-delà de ce que nous divulguerons.
          <br></br>
        </p>

        <p className="body">
          Les données que nous recueillons lorsque l&apos;utilisateur exécute certaines fonctions
          peuvent être utilisées aux fins suivantes :
        </p>
        <ul className="body flex flex-col gap-xs pl-sm">
          <li>- Contact à des buts commerciaux</li>
        </ul>
      </div>
      <div className="flex flex-col gap-md">
        <h2 className="heading--sub-large">7. Qui a accès aux données recueillies ?</h2>
        <p className="body">
          <strong>Le titulaire du site internet ainsi que son Webmaster</strong>
          <br />
          <br />
          <strong>Autres divulgations</strong>
          <br />
          Nous ne vendrons ni ne partagerons vos données avec des tiers, sauf dans les cas suivants
          :
        </p>
        <ul className="body flex flex-col gap-xs pl-sm">
          {[
            "- Si la loi l'exige",
            '- Si cela est nécessaire pour toute procédure judiciaire',
            '- Pour prouver ou protéger nos droits légaux'
          ].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <p className="body">
          Si vous suivez des hyperliens de notre site vers un autre site, veuillez noter que nous ne
          sommes pas responsables et n&apos;avons pas de contrôle sur leurs politiques et pratiques
          de confidentialité.
        </p>
      </div>
      <div className="flex flex-col gap-md">
        <h2 className="heading--sub-large">8. Durée de stockage des données personnelles</h2>
        <p className="body">
          Nous ne conservons pas les données des utilisateurs au-delà de ce qui est nécessaire pour
          atteindre les fins pour lesquelles elles sont recueillies.
        </p>
      </div>
      <div className="flex flex-col gap-md">
        <h2 className="heading--sub-large">
          9. Dispositif garantissant la sécurité des données personnelles
        </h2>
        <p className="body">
          Afin d&apos;assurer la protection de votre sécurité, nous utilisons le protocole de
          sécurité de la couche transport pour transmettre des renseignements personnels dans notre
          système.
          <br></br>
          <br></br>
          Toutes les données stockées dans notre système sont bien sécurisées et ne sont accessibles
          qu&apos;à nos membres. Nos membres sont liés par des accords de confidentialité stricts et
          une violation de cet accord entraînerait la radiation du membre.
          <br></br>
          <br></br>
          Alors que nous prenons toutes les précautions raisonnables pour nous assurer que nos
          données d&apos;utilisateur sont sécurisées et que les utilisateurs sont protégés, il reste
          toujours du risque de préjudice. L&apos;Internet en sa totalité peut être, parfois, peu
          sûr et donc nous sommes incapables de garantir la sécurité des données des utilisateurs
          au-delà de ce qui est raisonnablement pratique. Mineurs
        </p>
      </div>
      <div className="flex flex-col gap-md">
        <h2 className="heading--sub-large">10. Mineurs ?</h2>
        <p className="body">
          Le RGPD précise que les personnes de moins de 15 ans sont considérées comme des mineurs
          aux fins de la collecte de données. Les mineurs doivent avoir le consentement d&apos;un
          représentant légal pour que leurs données soient recueillies, traitées et utilisées.
        </p>
      </div>
      <div className="flex flex-col gap-md">
        <h2 className="heading--sub-large">11. Droits des utilisateurs</h2>
        <p className="body">
          En vertu du RGPD, les utilisateurs ont les droits suivants en tant que personnes
          concernées :
        </p>{' '}
        <ul className="body flex flex-col gap-xs pl-sm">
          {[
            "- Droit d'accès",
            '- Droit de rectification',
            "- Droit à l'effacement",
            '- Droit de restreindre le traitement',
            "- Droit de s'opposer au traitement",
            '- Droit à la portabilité des données',
            '- Droit de déposer une plainte'
          ].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <p className="body">
          Vous trouverez de plus amples informations sur ces droits au chapitre 3 (art 12-23) du
          RGPD.
        </p>
      </div>
      <div className="flex flex-col gap-md">
        <h2 className="heading--sub-large">
          12. Comment modifier, supprimer ou contester les données recueillies
        </h2>
        <p className="body">
          Si vous souhaitez que vos renseignements soient supprimés ou modifiés d&apos;une façon ou
          d&apos;une autre, veuillez communiquer avec notre agent de protection de la vie privée ici
          :
        </p>
        <ul className="body flex flex-col gap-xs pl-sm">
          {['- Brimbelle Chambet', '- bc@acte5.fr', '- 03 88 44 99 40'].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>

      <div className="flex flex-col gap-md">
        <h2 className="heading--sub-large">13. Modifications</h2>
        <p className="body">
          Cette politique de confidentialité peut être modifiée à l&apos;occasion afin de maintenir
          la conformité avec la loi et de tenir compte de tout changement à notre processus de
          collecte de données. Nous recommandons à nos utilisateurs de vérifier notre politique de
          temps à autre pour s&apos;assurer qu&apos;ils soient informés de toute mise à jour. Au
          besoin, nous pouvons informer les utilisateurs par courriel des changements apportés à
          cette politique.
        </p>
      </div>
      <div className="flex flex-col gap-md">
        <h2 className="heading--sub-large">14. Contact</h2>
        <p className="body">
          Si vous avez des questions à nous poser, n&apos;hésitez pas à communiquer avec nous en
          utilisant ce qui suit :
          <br />
          <br />
          - info@acte5.fr
          <br />- 03 88 44 99 40
        </p>
      </div>
    </main>
  );
}
