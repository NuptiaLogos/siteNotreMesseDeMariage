import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Mail, Menu, X, UserPlus, FileText } from 'lucide-react';
import '../../styles/legal.css';

const GITHUB_RAW = 'https://raw.githubusercontent.com/kennykennyjohnny/Nmdm-Vraph/main';

export default function Legal() {
  const [activeTab, setActiveTab] = useState('cgv');
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && ['cgv', 'mentions', 'cookies', 'cgu', 'propriete', 'confidentialite'].includes(hash)) {
      setActiveTab(hash);
      // Scroll to top of tabs or page
      const element = document.querySelector('.legal-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
        window.scrollTo(0, 0);
    }
  }, [location]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#652D90]/98 backdrop-blur-xl shadow-xl border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="group">
              <img 
                src={`${GITHUB_RAW}/images/logo_avectexte_horizontal.png`}
                alt="Notre Messe de Mariage" 
                className="h-10 w-auto brightness-0 invert transition-transform group-hover:scale-105"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-white/90 hover:text-white text-sm font-medium" style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>Accueil</Link>
              <Link to="/#futurs-maries" className="text-white/90 hover:text-white text-sm font-medium" style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>Futurs Mariés</Link>
              <Link to="/#paroisses" className="text-white/90 hover:text-white text-sm font-medium" style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>Paroisses</Link>
              <Link to="/#musiciens" className="text-white/90 hover:text-white text-sm font-medium" style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>Musiciens</Link>
              <Link to="/#bibliotheque" className="text-white/90 hover:text-white text-sm font-medium" style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>Bibliothèque</Link>
              
              <div className="flex items-center gap-2">
                <button className="text-white/90 hover:text-white px-3 py-1.5 text-sm font-medium transition">
                  Connexion
                </button>
                <button 
                  onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                  className="bg-gradient-to-r from-[#FF8100] to-[#ff6b6b] text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:shadow-lg transition">
                  Créer un compte
                </button>
              </div>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <button 
                onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                className="bg-gradient-to-r from-[#FF8100] to-[#ff6b6b] text-white p-2 rounded-lg">
                <UserPlus className="w-4 h-4" />
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

           {/* Mobile Menu */}
           {mobileMenuOpen && (
            <div className="lg:hidden pb-3 space-y-1 border-t border-white/10 mt-2 pt-3">
                 <Link to="/" className="block w-full text-left py-2 px-3 rounded-lg text-sm text-white/90 hover:bg-white/10">Accueil</Link>
                 <Link to="/#futurs-maries" className="block w-full text-left py-2 px-3 rounded-lg text-sm text-white/90 hover:bg-white/10">Futurs Mariés</Link>
                 {/* ... other mobile links */}
            </div>
           )}
        </div>
      </nav>

      {/* Legal Section */}
      <section className="legal-section">
        <div className="legal-container">
            <div className="legal-header">
                <h1>Informations légales</h1>
                        <p>Retrouvez toutes les informations légales concernant l'utilisation de notre plateforme</p>
            </div>

            <div className="legal-tabs">
                <nav className="tabs-navigation" role="tablist">
                    <button 
                        className={`tab-button ${activeTab === 'cgv' ? 'active' : ''}`}
                        onClick={() => handleTabClick('cgv')}
                    >
                        Conditions générales de vente et d'abonnement
                    </button>
                    <button 
                         className={`tab-button ${activeTab === 'mentions' ? 'active' : ''}`}
                         onClick={() => handleTabClick('mentions')}
                    >
                        Mentions légales
                    </button>
                    <button 
                         className={`tab-button ${activeTab === 'cookies' ? 'active' : ''}`}
                         onClick={() => handleTabClick('cookies')}
                    >
                        Charte cookies
                    </button>
                    <button 
                         className={`tab-button ${activeTab === 'cgu' ? 'active' : ''}`}
                         onClick={() => handleTabClick('cgu')}
                    >
                        Conditions générales d'utilisation
                    </button>
                    <button 
                         className={`tab-button ${activeTab === 'propriete' ? 'active' : ''}`}
                         onClick={() => handleTabClick('propriete')}
                    >
                        Politique de droits de propriété intellectuelle
                    </button>
                    <button 
                         className={`tab-button ${activeTab === 'confidentialite' ? 'active' : ''}`}
                         onClick={() => handleTabClick('confidentialite')}
                    >
                        Politique de confidentialité
                    </button>
                </nav>

                <div className="tabs-content">
                    {/* CGV Panel */}
                    <div className={`tab-panel ${activeTab === 'cgv' ? 'active' : ''}`}>
                        <h2>Conditions générales de vente et d'abonnement</h2>
                        <p><strong>Dernière mise à jour :</strong> Janvier 2025</p>
                        
                        <h3>Article 1 - Objet et champ d'application</h3>
                        <p>Les présentes Conditions Générales de Vente et d'Abonnement (ci-après « CGV ») régissent les relations contractuelles entre <strong>Notre Messe de Mariage</strong> (ci-après « le Vendeur » ou « Notre Messe de Mariage ») et toute personne physique ou morale (ci-après « l'Acheteur » ou « le Client ») souhaitant acquérir les services payants proposés sur la plateforme accessible à l'adresse <a href="https://www.notremessedemariage.fr">www.notremessedemariage.fr</a> et <a href="https://app.notremessedemariage.fr">app.notremessedemariage.fr</a>.</p>
                        <p>Les présentes CGV s'appliquent à l'exclusion de toutes autres conditions, sauf accord préalable, exprès et écrit du Vendeur. Le fait de passer commande implique l'adhésion entière et sans réserve de l'Acheteur aux présentes CGV.</p>
                        <p>Les CGV sont accessibles à tout moment sur le site et prévaudront, le cas échéant, sur toute autre version ou tout autre document contradictoire.</p>
                        
                        <h3>Article 2 - Services proposés</h3>
                        <p>Notre Messe de Mariage propose les services suivants :</p>
                        
                        <h4>2.1 Service Futurs Mariés</h4>
                        <p>Forfait unique par mariage permettant l'accès complet aux fonctionnalités suivantes :</p>
                        <ul>
                            <li>Création et gestion d'un espace personnalisé pour la préparation de la célébration</li>
                            <li>Accès illimité au répertoire de chants liturgiques et textes bibliques validés</li>
                            <li>Sélection et personnalisation des textes liturgiques (lectures, psaumes, Évangile)</li>
                            <li>Import et intégration de prières personnalisées (prière des époux, prière universelle)</li>
                            <li>Construction du déroulement complet de la cérémonie</li>
                            <li>Collaboration en temps réel avec la paroisse et les musiciens (système de commentaires, notifications)</li>
                            <li>Génération illimitée de documents PDF personnalisés (livret de messe, déroulé complet) avec mise en page professionnelle</li>
                            <li>Tableau de bord de suivi et coordination</li>
                            <li>Support technique par e-mail</li>
                            <li>Accès maintenu jusqu'à 12 mois après la date de célébration pour consultation et téléchargement</li>
                        </ul>
                        
                        <h4>2.2 Service Paroisses</h4>
                        <p>Accès gratuit et sans limitation permettant aux paroisses de :</p>
                        <ul>
                            <li>Suivre et valider les préparations de mariage de leurs paroissiens</li>
                            <li>Gérer simultanément plusieurs mariages</li>
                            <li>Accéder aux informations administratives et liturgiques de chaque célébration</li>
                            <li>Constituer leur propre répertoire liturgique</li>
                            <li>Recevoir des notifications automatiques</li>
                        </ul>
                        <p>Ce service est entièrement gratuit et ne fait pas l'objet d'une vente au sens des présentes CGV.</p>
                        
                        <h4>2.3 Service Musiciens</h4>
                        <p>Abonnement mensuel ou annuel permettant aux musiciens professionnels ou amateurs de :</p>
                        <ul>
                            <li>Gérer leur répertoire musical personnel</li>
                            <li>Coordonner avec les couples et paroisses sur plusieurs mariages simultanément</li>
                            <li>Accéder aux partitions complètes et déroulés musicaux</li>
                            <li>Générer des documents PDF professionnels</li>
                            <li>Suivre leur activité et leurs engagements</li>
                        </ul>
                        <p>Les tarifs d'abonnement pour musiciens sont disponibles sur demande à l'adresse <a href="mailto:contact@notremessedemariage.fr">contact@notremessedemariage.fr</a> ou directement sur la plateforme.</p>
                        
                        <h3>Article 3 - Prix et tarification</h3>
                        <h4>3.1 Prix des services en ligne</h4>
                        <p>Les prix des services en ligne proposés par Notre Messe de Mariage sont indiqués en euros (€), toutes taxes comprises (TTC), incluant la TVA applicable au jour de la souscription.</p>
                        <p>Au jour de la dernière mise à jour des présentes CGV, les tarifs sont les suivants :</p>
                        <ul>
                            <li><strong>Service Futurs Mariés</strong> : 59,99 € TTC par mariage (paiement unique donnant accès au service jusqu'à 12 mois après la célébration)</li>
                            <li><strong>Service Paroisses</strong> : Gratuit, sans limitation de durée ni de nombre de mariages</li>
                            <li><strong>Service Musiciens</strong> : Abonnement mensuel ou annuel dont les tarifs sont communiqués sur la plateforme (reconduction tacite sauf résiliation)</li>
                        </ul>
                        
                        <h4>3.2 Modification des prix</h4>
                        <p>Notre Messe de Mariage se réserve le droit de modifier ses prix à tout moment. Toutefois, les services seront facturés sur la base des tarifs en vigueur au moment de la validation de la souscription par le Client.</p>
                        <p>Pour les paiements uniques (Futurs Mariés), les modifications de prix n'affecteront pas les souscriptions déjà confirmées et payées.</p>
                        <p>Pour les abonnements (Musiciens), toute modification de tarif sera communiquée au Client par e-mail au moins 30 jours avant son application. Le nouveau tarif s'appliquera à compter du prochain renouvellement de l'abonnement. Le Client pourra résilier son abonnement sans frais avant l'application du nouveau tarif s'il n'accepte pas cette modification.</p>
                        
                        <h4>3.3 Promotions et offres spéciales</h4>
                        <p>Les éventuelles promotions ou réductions de prix sont valables pendant la durée indiquée. Elles ne sont pas cumulables sauf mention contraire.</p>
                        <h3>Article 4 - Souscription et processus d'achat</h3>
                        <h4>4.1 Processus de souscription</h4>
                        <p>Pour souscrire à un service payant, le Client doit suivre les étapes suivantes :</p>
                        <ol>
                            <li>Création d'un compte utilisateur sur la plateforme avec fourniture d'informations exactes et complètes</li>
                            <li>Sélection du service souhaité (type de compte et fonctionnalités associées)</li>
                            <li>Pour les abonnements musiciens : choix de la périodicité (mensuelle ou annuelle)</li>
                            <li>Vérification du récapitulatif de souscription (service sélectionné, prix TTC, durée d'accès ou périodicité d'abonnement)</li>
                            <li>Acceptation expresse des présentes CGV en cochant la case prévue à cet effet</li>
                            <li>Choix du moyen de paiement et saisie des informations nécessaires</li>
                            <li>Validation définitive de la souscription par clic sur le bouton de confirmation</li>
                        </ol>
                        
                        <h4>4.2 Confirmation de souscription</h4>
                        <p>Une fois la souscription validée et le paiement accepté, le Client reçoit un e-mail de confirmation récapitulant :</p>
                        <ul>
                            <li>Le numéro de souscription</li>
                            <li>La description du service souscrit</li>
                            <li>Le prix TTC payé et, le cas échéant, la périodicité de facturation</li>
                            <li>La durée d'accès au service ou la date de prochain renouvellement</li>
                            <li>Les modalités d'accès au service</li>
                            <li>Les informations de contact du support</li>
                        </ul>
                        <p>Cette confirmation vaut preuve de la transaction. Il est recommandé au Client de conserver cet e-mail.</p>
                        
                        <h4>4.3 Formation du contrat</h4>
                        <p>Le contrat de fourniture de service en ligne est considéré comme définitivement formé au moment où le Client reçoit l'e-mail de confirmation de souscription, sous réserve de l'encaissement effectif du paiement.</p>
                        <p>Le contrat de vente est considéré comme définitivement formé au moment où le Client reçoit l'e-mail de confirmation de commande, sous réserve de l'encaissement effectif du paiement.</p>
                        
                        <h3>Article 5 - Modalités de paiement</h3>
                        <h4>5.1 Moyens de paiement acceptés</h4>
                        <p>Le paiement s'effectue exclusivement en ligne par l'un des moyens suivants :</p>
                        <ul>
                            <li>Carte bancaire (Carte Bleue, Visa, MasterCard, American Express)</li>
                            <li>Autres moyens de paiement électronique sécurisés proposés sur la plateforme</li>
                        </ul>
                        
                        <h4>5.3 Exigibilité du paiement</h4>
                        <p><strong>Pour les paiements uniques (Futurs Mariés)</strong> : le prix est payable comptant, en totalité, au jour de la souscription. Le service n'est activé qu'après encaissement effectif du paiement.</p>
                        <p><strong>Pour les abonnements (Musiciens)</strong> : le premier paiement est exigible à la souscription. Les paiements suivants sont prélevés automatiquement à chaque échéance (mensuelle ou annuelle) selon la périodicité choisie. En cas d'abonnement annuel, le montant total de l'année est prélevé en une seule fois.</p>
                        
                        <h4>5.4 Défaut de paiement</h4>
                        <p>En cas de refus ou d'échec du paiement par l'organisme bancaire du Client, la souscription sera automatiquement annulée et aucun accès au service ne sera accordé. Le Client pourra effectuer une nouvelle souscription après résolution du problème de paiement.</p>
                        <p>Pour les abonnements, en cas de  d'échec du prélèvement automatique lors d'un renouvellement, le Client sera informé par e-mail et disposera d'un délai de 7 jours pour régulariser sa situation. Passé ce délai, l'accès au service pourra être suspendu jusqu'à régularisation du paiement.</p>

                        <h3>Article 6 - Fourniture du service en ligne</h3>
                        <h4>6.1 Activation du service</h4>
                        <p>L'accès complet aux fonctionnalités du service souscrit est activé immédiatement après validation du paiement. Le Client reçoit un e-mail contenant ses identifiants de connexion et les instructions d'utilisation.</p>
                        
                        <h4>6.2 Durée d'accès et renouvellement</h4>
                        <p><strong>Service Futurs Mariés (paiement unique)</strong> :</p>
                        <ul>
                            <li>Accès complet et illimité dès la souscription jusqu'à la date de célébration du mariage</li>
                            <li>Maintien de l'accès en consultation et téléchargement pendant 12 mois suivant la date de célébration renseignée</li>
                            <li>Possibilité de télécharger tous les documents générés pendant toute la durée d'accès</li>
                            <li>Aucun renouvellement automatique</li>
                        </ul>
                        <p>Il est fortement recommandé au Client de télécharger et sauvegarder tous ses documents importants avant l'expiration de la période d'accès.</p>
                        
                        <p><strong>Service Musiciens (abonnement)</strong> :</p>
                        
                        <h3>Article 7 - Droit de rétractation</h3>
                        <h4>7.1 Délai de rétractation</h4>
                        <p>Conformément aux articles L. 221-18 et suivants du Code de la consommation, le Client consommateur dispose d'un délai de quatorze (14) jours calendaires pour exercer son droit de rétractation.</p>
                        
                        <h4>7.2 Renonciation au droit de rétractation pour fourniture de contenu numérique</h4>
                        <p>Conformément à l'article L. 221-28 du Code de la consommation relatif à la fourniture de contenu numérique non fourni sur un support matériel, le Client reconnaît et accepte expressément que :</p>
                        <ul>
                            <li>Le service en ligne commence immédiatement après validation de la souscription</li>
                            <li>Il renonce expressément à son droit de rétractation dès qu'il commence à utiliser le service (création de contenu, sélection de chants, génération de documents, etc.)</li>
                            <li>Cette renonciation est matérialisée par la case à cocher lors du processus de souscription : "J'accepte expressément que l'exécution du service commence immédiatement et je renonce ainsi à mon droit de rétractation"</li>
                        </ul>
                        <p>Si le Client n'utilise pas le service pendant le délai de 14 jours, il conserve son droit de rétractation.</p>

                        <h4>7.4 Remboursement</h4>
                        <p>En cas d'exercice valide du droit de rétractation, Notre Messe de Mariage procédera au remboursement de la totalité des sommes versées dans un délai maximal de quatorze (14) jours à compter de la réception de la notification de rétractation. Le remboursement sera effectué par le même moyen de paiement que celui utilisé pour la transaction initiale, sauf accord exprès du Client pour un autre moyen de paiement.</p>
                         <p>Pour les abonnements, en cas de résiliation pendant la période d'engagement ou de renouvellement, aucun remboursement au prorata ne sera effectué. L'accès au service sera maintenu jusqu'à la fin de la période déjà payée.</p>
                        
                        <h3>Article 8 - Responsabilités et garanties</h3>
                        <h4>8.1 Obligation de moyens</h4>
                        <p>Notre Messe de Mariage est tenue à une obligation de moyens concernant la fourniture du service. La plateforme s'engage à mettre en œuvre tous les moyens raisonnables pour assurer le bon fonctionnement du service et la disponibilité des contenus.</p>
                        
                        <h4>8.2 Limitation de responsabilité</h4>
                        <p>Notre Messe de Mariage ne saurait être tenue responsable :</p>
                        <ul>
                            <li>Des interruptions temporaires du service pour maintenance, mise à jour ou raisons techniques indépendantes de sa volonté</li>
                            <li>De la perte de données résultant d'une défaillance technique si le Client n'a pas procédé à des sauvegardes régulières</li>
                            <li>De l'incompatibilité du service avec certains équipements ou configurations informatiques du Client</li>
                            <li>De l'utilisation inappropriée ou non conforme du service par le Client</li>
                            <li>Des dommages indirects ou immatériels (perte de données, préjudice commercial, perte de clientèle, etc.)</li>
                            <li>De la conformité liturgique finale de la célébration, qui relève de la responsabilité de la paroisse et du célébrant</li>
                        </ul>
                        <h4>8.3 Garantie de conformité du service numérique</h4>
                        <p>Le service en ligne fourni est conforme à la description présentée sur le site au moment de la souscription. En cas de non-conformité ou de dysfonctionnement, le Client dispose d'un délai de 30 jours pour en informer Notre Messe de Mariage qui s'engage à corriger le dysfonctionnement dans les meilleurs délais ou, si la correction s'avère impossible, à procéder au remboursement au prorata de la période non utilisée.</p>
                        
                        <h3>Article 9 - Obligations du Client</h3>
                        <h4>9.1 Informations exactes</h4>
                        <p>Le Client s'engage à fournir des informations exactes, complètes et à jour lors de la création de son compte et de sa souscription. Toute souscription effectuée avec des informations erronées ou frauduleuses pourra être annulée.</p>
                        <p>Pour les abonnements, le Client s'engage à maintenir à jour ses informations de paiement pour assurer le bon déroulement des renouvellements automatiques.</p>
                        
                        <h4>9.2 Utilisation conforme</h4>
                        <p>Le Client s'engage à utiliser le service conformément à sa destination et dans le respect des Conditions Générales d'Utilisation disponibles sur la plateforme. Toute utilisation abusive, frauduleuse ou contraire à la destination du service pourra entraîner la suspension immédiate de l'accès sans remboursement.</p>
                        
                        <h4>9.3 Sécurité du compte</h4>
                        <p>Le Client est responsable de la confidentialité de ses identifiants de connexion et de toutes les activités effectuées depuis son compte. Il s'engage à signaler immédiatement toute utilisation non autorisée de son compte.</p>
                        
                        <h3>Article 10 - Propriété intellectuelle</h3>
                        <h4>10.1 Droits de Notre Messe de Mariage</h4>
                        <p>L'ensemble des éléments de la plateforme (textes, graphismes, logiciels, photographies, images, sons, plans, noms, logos, marques, créations et œuvres protégeables) sont la propriété exclusive de Notre Messe de Mariage ou font l'objet d'une autorisation d'utilisation.</p>
                        <p>Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans l'autorisation écrite préalable de Notre Messe de Mariage.</p>
                        <h4>10.2 Licence d'utilisation du service en ligne</h4>
                        <p>La souscription au service confère au Client une licence d'utilisation personnelle, non exclusive, non cessible et non transférable des contenus et fonctionnalités de la plateforme en ligne :</p>
                        <ul>
                            <li><strong>Pour les Futurs Mariés</strong> : strictement limitée à la préparation de leur propre célébration de mariage</li>
                            <li><strong>Pour les Musiciens</strong> : limitée aux mariages sur lesquels ils interviennent dans le cadre de leur activité professionnelle ou bénévole</li>
                        </ul>
                        <p>Les documents générés (livrets de messe, déroulés, partitions) peuvent être imprimés et distribués gratuitement aux participants des cérémonies concernées. Toute utilisation commerciale du service lui-même, revente ou diffusion publique des contenus en dehors de ce cadre est strictement interdite.</p>
                        
                        <h3>Article 11 - Protection des données personnelles</h3>
                        <p>Les données personnelles collectées dans le cadre de la vente sont traitées conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.</p>
                        <p>Les informations détaillées sur la collecte, le traitement, la conservation et les droits du Client concernant ses données personnelles sont disponibles dans notre <button onClick={() => handleTabClick('confidentialite')} className="text-blue-600 hover:underline">Politique de Confidentialité</button>.</p>
                        <p>Le Client dispose d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition sur ses données personnelles qu'il peut exercer à l'adresse <a href="mailto:contact@notremessedemariage.fr">contact@notremessedemariage.fr</a>.</p>
                        
                        <h3>Article 12 - Force majeure</h3>
                        <p>Notre Messe de Mariage ne pourra être tenue responsable de l'inexécution de ses obligations contractuelles en cas de survenance d'un événement de force majeure tel que défini par la jurisprudence des tribunaux français.</p>
                        <p>Sont notamment considérés comme cas de force majeure : catastrophes naturelles, guerres, attentats, incendies, grèves totales ou partielles, épidémies, pandémies, blocages des moyens de transport ou d'approvisionnement, tremblements de terre, inondations, défaillances ou pannes d'Internet ou du réseau électrique.</p>
                        <p>En cas de force majeure empêchant la fourniture du service pour une durée supérieure à 30 jours, le contrat pourra être résolu de plein droit et le Client remboursé au prorata temporis de la période non utilisée.</p>
                        
                        <h3>Article 13 - Service client et réclamations</h3>
                        <h4>13.1 Contact du service client</h4>
                        <p>Pour toute question, information sur les commandes ou réclamation concernant le service, le Client peut contacter le service client de Notre Messe de Mariage :</p>
                        <ul>
                            <li><strong>Par e-mail</strong> : <a href="mailto:contact@notremessedemariage.fr">contact@notremessedemariage.fr</a></li>
                            <li><strong>Via le formulaire de contact</strong> disponible sur le site <a href="https://www.notremessedemariage.fr">www.notremessedemariage.fr</a></li>
                        </ul>
                        <p>Le service client s'engage à répondre dans un délai raisonnable (généralement sous 72 heures ouvrées).</p>
                        
                        <h4>13.2 Médiation de la consommation</h4>
                        <p>Conformément aux articles L. 611-1 et suivants du Code de la consommation, Notre Messe de Mariage propose à ses Clients consommateurs, dans le cadre de litiges qui n'auraient pas trouvé résolution de manière amiable, la médiation d'un médiateur de la consommation.</p>
                        <p>Le Client est informé qu'il peut également recourir à la plateforme de Règlement en Ligne des Litiges (RLL) de la Commission européenne accessible à l'adresse : <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a></p>
                        
                        <h3>Article 14 - Modification des CGV</h3>
                        <p>Notre Messe de Mariage se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur à la date de la souscription par le Client.</p>
                        <p>Pour les paiements uniques, les modifications n'affecteront pas les contrats déjà conclus, qui demeurent régis par les CGV acceptées lors de la souscription.</p>
                        <p>Pour les abonnements, les modifications des CGV seront communiquées aux Clients par e-mail au moins 30 jours avant leur entrée en vigueur. Le Client pourra résilier son abonnement sans frais avant l'application des nouvelles CGV s'il n'accepte pas ces modifications. L'absence de résiliation vaudra acceptation des nouvelles CGV.</p>
                        
                        <h3>Article 15 - Nullité partielle</h3>
                        <p>Si une ou plusieurs stipulations des présentes CGV sont tenues pour non valides ou déclarées comme telles en application d'une loi, d'un règlement ou à la suite d'une décision définitive d'une juridiction compétente, les autres stipulations garderont toute leur force et leur portée.</p>
                        
                        <h3>Article 16 - Droit applicable et juridiction</h3>
                        <h4>16.1 Droit applicable</h4>
                        <p>Les présentes CGV et les opérations qui en découlent sont régies et soumises au droit français.</p>
                        
                        <h4>16.2 Langue</h4>
                        <p>Les présentes CGV sont rédigées en langue française. En cas de traduction en une ou plusieurs langues étrangères, seul le texte français fera foi en cas de litige.</p>
                        <h3>Article 17 - Conservation et archivage</h3>
                        <p>Notre Messe de Mariage archivera les confirmations de souscription et les factures sur un support fiable et durable constituant une copie fidèle conformément aux dispositions de l'article 1379 du Code civil.</p>
                        <p>Les registres informatisés conservés dans les systèmes informatiques de Notre Messe de Mariage dans des conditions raisonnables de sécurité, seront considérés comme des preuves des communications, des souscriptions et des paiements intervenus entre les parties.</p>
                        
                        <h3>Article 18 - Informations légales</h3>
                        <p>Les informations relatives à l'identité du fournisseur du service, à ses coordonnées et aux autres mentions légales obligatoires sont disponibles dans la section <a href="#" onClick={() => handleTabClick('mentions')}>Mentions Légales</a> du site.</p>
                        
                        <h3>Article 19 - Contact</h3>
                        <p>Pour toute question concernant les présentes CGV ou pour souscrire à un service, vous pouvez contacter Notre Messe de Mariage :</p>
                        <ul>
                            <li><strong>Par e-mail</strong> : <a href="mailto:contact@notremessedemariage.fr">contact@notremessedemariage.fr</a></li>
                            <li><strong>Via le site internet</strong> : <a href="https://www.notremessedemariage.fr">www.notremessedemariage.fr</a></li>
                        </ul>
                        
                        <p style={{marginTop: '2rem', fontStyle: 'italic', color: '#666'}}>Ces Conditions Générales de Vente et d'Abonnement ont été mises à jour pour la dernière fois en janvier 2025.</p>
                    </div>

                    {/* Mentions légales Panel */}
                    <div className={`tab-panel ${activeTab === 'mentions' ? 'active' : ''}`}>
                        <h2>Mentions légales</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                        <h3>Éditeur du site</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        
                        <h3>Hébergement</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        
                        <h3>Directeur de publication</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>

                    {/* Charte cookies Panel */}
                    <div className={`tab-panel ${activeTab === 'cookies' ? 'active' : ''}`}>
                        <h2>Charte cookies</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                        <h3>Qu'est-ce qu'un cookie ?</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        
                        <h3>Cookies utilisés</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        
                        <h3>Gestion des cookies</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    </div>

                    {/* CGU Panel */}
                    <div className={`tab-panel ${activeTab === 'cgu' ? 'active' : ''}`}>
                        <h2>Conditions générales d'utilisation</h2>
                        <p><strong>Dernière mise à jour :</strong> Janvier 2025</p>
                        
                        <h3>1. Préambule et objet</h3>
                        <p>Les présentes Conditions Générales d'Utilisation (ci-après "CGU") ont pour objet de définir les conditions dans lesquelles les utilisateurs peuvent accéder à la plateforme Notre Messe de Mariage et utiliser ses services.</p>
                        <p>La plateforme, accessible aux adresses <a href="https://www.notremessedemariage.fr">www.notremessedemariage.fr</a> et <a href="https://app.notremessedemariage.fr">app.notremessedemariage.fr</a> (ci-après "la Plateforme"), permet de préparer de manière collaborative les cérémonies de mariage catholique, en facilitant la communication entre les futurs mariés, les paroisses et les musiciens.</p>
                        <p>L'accès et l'utilisation de la Plateforme sont subordonnés à l'acceptation sans réserve des présentes CGU.</p>
                        
                        <h3>2. Définitions</h3>
                        <p>Dans les présentes CGU, les termes suivants ont la signification qui leur est donnée ci-après :</p>
                        <ul>
                            <li><strong>Plateforme</strong> : l'ensemble des sites, applications et services exploités par Notre Messe de Mariage, comprenant le site vitrine <a href="https://www.notremessedemariage.fr">www.notremessedemariage.fr</a> et l'application web <a href="https://app.notremessedemariage.fr">app.notremessedemariage.fr</a>.</li>
                            <li><strong>Utilisateur</strong> : toute personne physique ou morale utilisant les services de la Plateforme, en qualité de futur marié, paroisse ou musicien.</li>
                            <li><strong>Compte</strong> : l'espace personnel permettant d'accéder aux Services de la Plateforme après inscription.</li>
                            <li><strong>Services</strong> : l'ensemble des fonctionnalités proposées par la Plateforme, notamment la sélection de textes et chants liturgiques, la collaboration entre utilisateurs, la validation de déroulés de cérémonie, et la génération automatique de documents PDF.</li>
                            <li><strong>Contenus</strong> : les données et informations (textes, fichiers, commentaires, documents) saisies, transmises ou diffusées par les Utilisateurs sur la Plateforme.</li>
                        </ul>
                        
                        <h3>3. Catégories d'utilisateurs et statut juridique</h3>
                        <h4>3.1 Futurs mariés</h4>
                        <p>Les utilisateurs inscrits en qualité de futurs mariés sont des personnes physiques utilisant la Plateforme à des fins privées. Ils sont qualifiés de consommateurs au sens de l'article liminaire du Code de la consommation et bénéficient à ce titre des droits qui en découlent, notamment le droit de rétractation de 14 jours et l'accès à la médiation de la consommation.</p>
                        
                        <h4>3.2 Paroisses</h4>
                        <p>Les paroisses utilisatrices de la Plateforme n'ont pas de personnalité juridique propre et agissent au nom d'associations cultuelles relevant de la loi du 9 décembre 1905 ou d'une association diocésaine disposant de la personnalité morale. En accédant à la Plateforme, elles interviennent à des fins non privées et non commerciales, dans le cadre de l'organisation de célébrations liturgiques. Elles sont qualifiées d'utilisateurs professionnels ou institutionnels, sans bénéficier du statut de consommateur.</p>
                        
                        <h4>3.3 Musiciens</h4>
                        <p>Les musiciens sont des personnes physiques ou morales utilisant la Plateforme dans le cadre d'une intervention musicale liturgique, qu'ils soient bénévoles au sein d'une paroisse, auto-entrepreneurs, membres d'un ensemble musical associatif ou prestataires ponctuels. Qu'ils soient bénévoles ou rémunérés, ils interviennent à des fins professionnelles ou collectives et ne sont pas considérés comme des consommateurs. Ils sont qualifiés d'utilisateurs professionnels ou non-consommateurs.</p>
                        
                        <h3>4. Accès et inscription</h3>
                        <h4>4.1 Conditions d'accès</h4>
                        <p>L'accès aux Services est réservé aux personnes majeures disposant de la capacité juridique. Les mineurs peuvent utiliser la Plateforme sous la responsabilité de leur représentant légal.</p>
                        
                        <h4>4.2 Création de compte</h4>
                        <p>Chaque Utilisateur doit créer un Compte en fournissant des informations exactes et sincères. Trois types de Comptes sont proposés :</p>
                        <ul>
                            <li><strong>Compte Futurs Mariés</strong> : pour préparer une célébration de mariage en centralisant les informations pratiques (date, lieu, horaire, célébrant), en choisissant les textes liturgiques (première lecture, psaume, Évangile) et les chants adaptés à chaque moment de la cérémonie, en important des prières personnalisées (prière des époux, prière universelle), en désignant les lecteurs, et en collaborant avec la paroisse et les musiciens via un système de commentaires et de notifications.</li>
                            <li><strong>Compte Paroisse</strong> : pour les structures religieuses accompagnant plusieurs mariages simultanément, permettant d'accéder aux informations administratives de chaque mariage (date, lieu, type de célébration : messe avec eucharistie ou célébration sans eucharistie, coordonnées des mariés), de valider les textes liturgiques et le répertoire musical choisis par les couples, de constituer un répertoire liturgique propre à la paroisse, et de suivre en temps réel l'état d'avancement de chaque préparation.</li>
                            <li><strong>Compte Musicien</strong> : pour les intervenants musicaux participant aux cérémonies, qu'ils soient professionnels ou amateurs, permettant de gérer un répertoire musical personnel, de consulter les chants sélectionnés par les couples, de valider les suggestions musicales, d'accéder aux partitions complètes, de générer des documents PDF (déroulé musical, partitions compilées), et de coordonner avec les couples et paroisses.</li>
                        </ul>
                        <p>L'Utilisateur est responsable de la confidentialité de ses identifiants (adresse e-mail et mot de passe). Toute utilisation du Compte à partir de ses identifiants est présumée émaner de lui. En cas de perte, vol ou utilisation frauduleuse, il s'engage à en informer immédiatement Notre Messe de Mariage à l'adresse <a href="mailto:contact@notremessedemariage.fr">contact@notremessedemariage.fr</a>.</p>
                        
                        <h3>5. Utilisation de la Plateforme</h3>
                        <p>L'Utilisateur s'engage à utiliser la Plateforme dans le respect de sa finalité : la préparation collaborative de célébrations religieuses. Toute utilisation abusive, détournée ou illicite est interdite.</p>
                        <p>Les Services varient selon le type de Compte. La création de contenus liturgiques ou musicaux, la mise en relation entre Utilisateurs, la validation de déroulés et la génération de documents sont réservées aux Utilisateurs ayant un Compte actif.</p>
                        <p><strong>Fonctionnalités communes à tous les comptes :</strong></p>
                        <ul>
                            <li>Accès au répertoire partagé de chants liturgiques et textes bibliques validés</li>
                            <li>Système de notifications pour suivre l'avancement des préparations</li>
                            <li>Espace de commentaires pour faciliter les échanges entre acteurs</li>
                            <li>Génération automatique de documents PDF (livrets de messe personnalisés, déroulés complets, partitions)</li>
                            <li>Tableau de bord de suivi et coordination</li>
                        </ul>
                        <p><strong>Fonctionnalités spécifiques :</strong></p>
                        <ul>
                            <li><strong>Pour les Futurs Mariés</strong> : construction pas à pas du déroulement complet de la cérémonie, import de prières personnalisées, désignation des lecteurs, invitation et collaboration avec la paroisse et les musiciens.</li>
                            <li><strong>Pour les Paroisses</strong> : gestion centralisée de plusieurs mariages, validation des textes et musiques, constitution d'un répertoire liturgique propre, accès aux informations administratives complètes.</li>
                            <li><strong>Pour les Musiciens</strong> : gestion de répertoire musical personnel, accès aux partitions complètes, génération de déroulés musicaux, suivi logistique et administratif de l'activité.</li>
                        </ul>
                        
                        <h3>6. Responsabilité de l'Utilisateur</h3>
                        <p>Chaque Utilisateur :</p>
                        <ul>
                            <li>Garantit l'exactitude des informations transmises et s'engage à les mettre à jour en cas de modification.</li>
                            <li>S'engage à respecter les droits des tiers, notamment en matière de propriété intellectuelle.</li>
                            <li>Est seul responsable des Contenus qu'il publie ou partage sur la Plateforme (prières personnalisées, commentaires, suggestions).</li>
                            <li>S'interdit d'utiliser la Plateforme à des fins illégales, frauduleuses ou contraires aux bonnes mœurs.</li>
                            <li>S'interdit de porter atteinte aux droits de propriété intellectuelle de Notre Messe de Mariage ou de tiers.</li>
                            <li>S'interdit de tenter de contourner les mesures techniques de protection de la Plateforme.</li>
                            <li>S'interdit de diffuser des contenus diffamatoires, injurieux, obscènes ou portant atteinte à la dignité humaine.</li>
                            <li>S'interdit de collecter ou utiliser les données personnelles d'autres Utilisateurs sans leur consentement.</li>
                            <li>S'interdit de perturber le fonctionnement normal de la Plateforme ou nuire à son intégrité.</li>
                        </ul>
                        <p>Notre Messe de Mariage se réserve le droit de retirer tout Contenu manifestement illicite ou contraire aux présentes CGU, et de suspendre ou résilier l'accès de tout Utilisateur ne respectant pas ses obligations.</p>
                        
                        <h3>7. Propriété intellectuelle</h3>
                        <p>La Plateforme, sa structure, ses marques, contenus, bases de données et fonctionnalités sont protégés par les dispositions du Code de la propriété intellectuelle. Aucune reproduction, même partielle, n'est autorisée sans accord écrit préalable de Notre Messe de Mariage.</p>
                        <p>Une licence d'utilisation non exclusive, personnelle et non cessible est accordée à chaque Utilisateur pour ses besoins propres, dans la limite des célébrations préparées. Les documents générés (livrets de messe, déroulés, partitions) peuvent être imprimés et distribués gratuitement aux participants des cérémonies concernées. Toute utilisation commerciale du service lui-même, revente ou diffusion publique des contenus en dehors de ce cadre est strictement interdite.</p>
                        <p>Les textes liturgiques, chants, prières et partitions mis à disposition sur la Plateforme sont issus du patrimoine liturgique catholique ou de créations dont les droits ont été régulièrement acquis. Leur utilisation est strictement limitée au cadre de la préparation de cérémonies religieuses via la Plateforme.</p>
                        <p>Les conditions relatives aux contenus publiés par les Utilisateurs, notamment dans la bibliothèque partagée, sont détaillées dans la Politique de droits de propriété intellectuelle disponible sur la Plateforme.</p>
                        
                        <h3>8. Limitation de responsabilité</h3>
                        <h4>8.1 Validation liturgique</h4>
                        <p>La Plateforme n'intervient pas dans la validation théologique ou liturgique des cérémonies. Cette validation incombe aux autorités ecclésiastiques. Bien que Notre Messe de Mariage mette à disposition un répertoire de textes liturgiques et de chants conformes aux normes de l'Église catholique, la plateforme ne se substitue pas à l'autorité ecclésiastique compétente. La validation finale du déroulement liturgique relève de la responsabilité de la paroisse et du célébrant.</p>
                        
                        <h4>8.2 Relations entre Utilisateurs</h4>
                        <p>Notre Messe de Mariage n'est pas partie aux relations contractuelles entre les Utilisateurs (mariés, musiciens, paroisses). Elle ne peut être tenue responsable des litiges qui en découleraient. La Plateforme agit uniquement en tant qu'outil de coordination, sans validation ni garantie sur les contenus ou les intervenants, ni sur la qualité, la disponibilité, l'exactitude ou l'exécution des prestations fournies par l'un ou l'autre.</p>
                        
                        <h4>8.3 Disponibilité de la Plateforme</h4>
                        <p>Notre Messe de Mariage s'efforce d'assurer l'accessibilité de la Plateforme 24 heures sur 24, 7 jours sur 7. Toutefois, Notre Messe de Mariage ne saurait être tenue responsable en cas d'interruption, suspension ou limitation de l'accès à la Plateforme, que ces événements soient planifiés (maintenance) ou non (panne, force majeure, défaillance des réseaux de télécommunication).</p>
                        
                        <h4>8.4 Sauvegarde des données</h4>
                        <p>Bien que Notre Messe de Mariage mette en œuvre tous les moyens techniques pour assurer la sauvegarde et la sécurité des données, il est fortement recommandé aux Utilisateurs d'effectuer des sauvegardes régulières de leurs contenus importants (téléchargement des PDF générés). Notre Messe de Mariage ne saurait être tenue responsable de la perte de données en cas de défaillance technique.</p>
                        
                        <h3>9. Données personnelles</h3>
                        <p>Les traitements de données personnelles effectués par Notre Messe de Mariage sont réalisés dans le respect du Règlement Général sur la Protection des Données (RGPD) et de la loi Informatique et Libertés.</p>
                        <p>L'ensemble des finalités de traitement, des durées de conservation, des droits des Utilisateurs et des mesures de sécurité mises en œuvre sont détaillés dans la <button onClick={() => handleTabClick('confidentialite')} className="text-blue-600 hover:underline">Politique de confidentialité</button> disponible sur la Plateforme.</p>
                        <p>L'Utilisateur peut exercer ses droits d'accès, de rectification, d'effacement, d'opposition, de limitation ou de portabilité de ses données en contactant <a href="mailto:contact@notremessedemariage.fr">contact@notremessedemariage.fr</a>.</p>
                        
                        <h3>10. Modifications des CGU</h3>
                        <p>Notre Messe de Mariage peut modifier les présentes CGU. Toute modification sera notifiée via la Plateforme ou par email. L'utilisation des Services après notification vaut acceptation des nouvelles CGU.</p>
                        <p>Les Utilisateurs seront informés des modifications substantielles par e-mail ou notification sur la Plateforme. La poursuite de l'utilisation de la Plateforme après modification vaut acceptation des nouvelles CGU.</p>
                        
                        <h3>11. Loi applicable et juridiction compétente</h3>
                        <p>Les CGU sont régies par le droit français. En cas de litige relatif à l'interprétation, l'exécution ou la validité des présentes CGU, et à défaut de règlement amiable, le litige sera porté devant les tribunaux français compétents, conformément aux règles de compétence en vigueur.</p>
                        <p>Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, Notre Messe de Mariage adhère au Service du Médiateur du e-commerce de la FEVAD (Fédération du e-commerce et de la vente à distance) dont les coordonnées sont les suivantes : 60 Rue La Boétie – 75008 Paris – <a href="http://www.mediateurfevad.fr" target="_blank" rel="noopener">www.mediateurfevad.fr</a>. Après démarche préalable écrite des consommateurs vis-à-vis de Notre Messe de Mariage, le Service du Médiateur peut être saisi pour tout litige de consommation dont le règlement n'aurait pas abouti.</p>
                        
                        <h3>12. Contact</h3>
                        <p>Pour toute question relative aux présentes CGU ou à l'utilisation de la Plateforme, vous pouvez nous contacter :</p>
                        <ul>
                            <li><strong>Par e-mail</strong> : <a href="mailto:contact@notremessedemariage.fr">contact@notremessedemariage.fr</a></li>
                            <li><strong>Via le site</strong> : <a href="https://www.notremessedemariage.fr">www.notremessedemariage.fr</a></li>
                        </ul>
                        
                        <p style={{marginTop: '2rem', fontStyle: 'italic', color: '#666'}}>Ces Conditions Générales d'Utilisation ont été mises à jour pour la dernière fois en janvier 2025.</p>
                    </div>

                     {/* Propriété intellectuelle Panel */}
                     <div className={`tab-panel ${activeTab === 'propriete' ? 'active' : ''}`}>
                        <h2>Politique de droits de propriété intellectuelle</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                        <h3>Propriété du contenu</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        
                        <h3>Utilisation du contenu</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        
                        <h3>Marques et logos</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    </div>

                    {/* Confidentialité Panel */}
                    <div className={`tab-panel ${activeTab === 'confidentialite' ? 'active' : ''}`}>
                        <h2>Politique de confidentialité</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                        <h3>Données collectées</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        
                        <h3>Utilisation des données</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        
                        <h3>Protection des données</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                        
                        <h3>Vos droits</h3>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </div>

                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/">
                <img 
                    src={`${GITHUB_RAW}/images/logo_avectexte_horizontal.png`}
                    alt="Logo"
                    className="h-8 brightness-0 invert mb-4"
                />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              La plateforme qui rend l'organisation de votre messe de mariage simple et mémorable.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-[#FF8100] text-sm" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
              Légal
            </h4>
            <ul className="space-y-2">
                <li><button onClick={() => handleTabClick('cgv')} className="text-gray-400 hover:text-[#FF8100] transition text-sm">CGV</button></li>
                <li><button onClick={() => handleTabClick('mentions')} className="text-gray-400 hover:text-[#FF8100] transition text-sm">Mentions légales</button></li>
                <li><button onClick={() => handleTabClick('cookies')} className="text-gray-400 hover:text-[#FF8100] transition text-sm">Cookies</button></li>
                <li><button onClick={() => handleTabClick('cgu')} className="text-gray-400 hover:text-[#FF8100] transition text-sm">CGU</button></li>
                <li><button onClick={() => handleTabClick('confidentialite')} className="text-gray-400 hover:text-[#FF8100] transition text-sm">Confidentialité</button></li>
            </ul>
          </div>
          
          <div>
             <h4 className="font-bold mb-4 text-[#FF8100] text-sm" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
              Contact
            </h4>
             <ul className="space-y-2">
                <li>
                    <a href="mailto:contact@notremessedemariage.fr" className="flex items-center gap-2 text-gray-400 hover:text-[#FF8100] transition text-sm">
                        <Mail className="w-4 h-4" /> contact@notremessedemariage.fr
                    </a>
                </li>
             </ul>
             <div className="mt-4">
                  <a href="https://www.instagram.com/notremessedemariage" className="text-gray-400 hover:text-[#FF8100]" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5" />
                  </a>
             </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-xs">
          © 2025 Notre Messe de Mariage • Tous droits réservés
        </div>
      </footer>
    </div>
  );
}
