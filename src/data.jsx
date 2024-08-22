import { IoLocationOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube, FaInstagram, FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { SiBlueprint, SiHomeassistantcommunitystore } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import {
	schalungsbauer,
	Sichtbetontreppen,
	profile2,
	profile3,
	profile4,
	profile5,
	baustellensohle,
	maurerarbeiten,
	building_5,
	building_6,
	gartengestaltung,
	building_8,
	traumhaus,
	rohbau,
	nachhalitigkeit,
	qualitätbauen,
	innovativesbauen,
} from "./assets";
// import { TfiMenuAlt } from "react-icons/tfi";

export const navTabs = [
	{ name: "Home", id: "header" },
	{ name: "Über uns", id: "about" },
	{ name: "Dienstleistungen", id: "services" },
	{ name: "Team", id: "team" },
	{ name: "Projekte", id: "project" },
	// { name: "Testimonial", id: "testimonial" },
	{ name: "Blog", id: "blog" },
];

export const services = [
	{
		name: "Generellunternehmung",
		icon: <SiBlueprint />,
		description: `Hiermit wird das gesamte Bauvorhaben von Anfang bis Ende begleitet, einschließlich der Beauftragung von Subunternehmern, der Verwaltung des Budgets, der Terminplanung und der Sicherstellung, dass das Projekt alle Spezifikationen und Vorschriften erfüllt.`,
	},
	{
		name: "Design-Build-Dienstleistungen",
		icon: <FaDrawPolygon />,
		description: `Dieser Service kombiniert sowohl die Entwurfs- als auch die Bauphase in einem einzigen Vertrag, die Rationalisierung des Prozesses und die Verbesserung der Kommunikation zwischen dem Entwerfer und dem
        Bauteams.

    `,
	},
	{
		name: "Project Management",
		icon: <GrUserManager />,
		description: `Wir bieten Projektmanagement-Dienstleistungen an - die Planung, Koordination und Überwachung von Projekten umfassen, um sicherzustellen, dass sie pünktlich, innerhalb des geplanten Budgets und unter Einhaltung der geforderten Qualitätsstandards durchgeführt werden.`,
	},
	{
		name: "Renovierung und Umbau",
		icon: <SiHomeassistantcommunitystore />,
		description: `Wir sind auf Renovierungs- und Umbauarbeiten spezialisiert, bei denen es um die Modernisierung und Verbesserung bestehender Strukturen geht. Dies kann von kleineren Reparaturen bis hin zu umfassenden Sanierungen von Wohn-, Gewerbe- oder Industrieimmobilien reichen.`,
	},
	{
		name: "Bauvorbereitung",
		icon: <AiOutlineFileProtect />,
		description: `Vor Baubeginn übernehmen wir alle benötigten Aufgaben zur Baustellenvorbereitung, wie z. B. Landrodung, Aushub, Planierung und Installation von Versorgungsleitungen, um sicherzustellen, dass der Standort für Bauvorhaben bereit ist.`,
	},
	{
		name: "Spezialisierte Baudienstleistungen",
		icon: <IoConstructSharp />,
		description: `Dies kann Dienstleistungen wie Dachdeckerarbeiten, Betonarbeiten, Stahlbewehrung, Maurerarbeiten, Sichtbeton und andere Fachgewerke, die für bestimmte Aspekte des Bauprojekts erforderlich sind.`,
	},
];

export const teams = [
	{
		name: "Sichtbetonmaurer",
		// title: "Technician",
		profile: Sichtbetontreppen,
		social: [
			{ name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
			{ name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
			{
				name: "Youtube",
				icon: <FaYoutube />,
				url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
			},
			{ name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
		],
	},
	{
		name: "Eisenflechter",
		// title: "Technician",
		profile: baustellensohle,
		social: [
			{ name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
			{ name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
			{
				name: "Youtube",
				icon: <FaYoutube />,
				url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
			},
			{ name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
		],
	},
	{
		name: "Schalungsbauer",
		// title: "Technician",
		profile: schalungsbauer,
		social: [
			{ name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
			{ name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
			{
				name: "Youtube",
				icon: <FaYoutube />,
				url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
			},
			{ name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
		],
	},
	{
		name: "Maurer",
		// title: "Technician",
		profile: maurerarbeiten,
		social: [
			{ name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
			{ name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
			{
				name: "Youtube",
				icon: <FaYoutube />,
				url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
			},
			{ name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
		],
	},
];

export const projects = [
	{
		title: "Projekt zur Wohnbebauung",
		image: building_5,
		description: `Eine umfassende Wohnbebauung mit dem Bau eines neuen Wohngemeinschaft von der ersten Standorträumung und -vorbereitung bis zum endgültigen Hausbau und der Landschaftsgestaltung`,
	},
	{
		title: "Bürogebäude für Gewerbe",
		image: building_6,
		description: `Der Bau eines mehrgeschossigen Bürogebäudes mit allen architektonische und strukturelle Planung, Koordination der Fachgewerke für HLK- und Elektrosysteme sowie vollständige Projektüberwachung.`,
	},
	{
		title: "Gartengestaltung und Landschaftsbau",
		image: gartengestaltung,
		description: `In der Gartengestaltung und im Landschaftsbau verbinden wir kreative Ideen mit handwerklicher Präzision, um einzigartige Außenbereiche zu schaffen. Wir planen und realisieren individuelle Gärten und Landschaften, die durch harmonische Gestaltung, Funktionalität und Nachhaltigkeit überzeugen.`,
	},
	{
		title: "Bau von Industriehallen",
		image: building_8,
		description: `Bau eines großen Industrielagers, einschließlich Rodung, Fundamentarbeiten, Errichtung der Stahlkonstruktion und kompletter Bauleitung von Anfang bis Ende.`,
	},
	{
		title: "Privathäuser und Villen",
		image: traumhaus,
		description: `Wir realisieren Ihre Wohnträume – von der ersten Idee bis zum schlüsselfertigen Haus. Als Experten im Bau von Privathäusern und Villen legen wir besonderen Wert auf Qualität, Individualität und Nachhaltigkeit. Jedes Projekt wird von uns mit größter Sorgfalt und Präzision ausgeführt, um ein Zuhause zu schaffen, das genau auf Ihre Bedürfnisse und Wünsche abgestimmt ist.`,
	},
	{
		title: "Rohbau",
		image: rohbau,
		description: `Der Rohbau ist das Fundament für jedes erfolgreiche Bauprojekt – und wir sorgen dafür, dass es solide, präzise und termingerecht ausgeführt wird. Mit unserer langjährigen Erfahrung und unserem Fachwissen im Bereich Rohbau legen wir den Grundstein für Ihr Gebäude, auf den Sie sich verlassen können.`,
	},
];

export const testimonial = [
	{
		image: profile2,
		name: "Samuel Eze",
		review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`,
	},
	{
		image: profile3,
		name: "Emmanuel Joseph",
		review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
	},
	{
		image: profile4,
		name: "Gloria Chiwendu",
		review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`,
	},
	{
		image: profile5,
		name: "Precious Stone",
		review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
	},
];

export const blogs = [
	{
		title: "Nachhaltiges Bauen: Bauen für die Zukunft",
		image: nachhalitigkeit,
		category: "Nachhaltigkeit",
		content: `
        Da sich die Baubranche ständig weiterentwickelt, war der Fokus auf Nachhaltigkeit noch nie so wichtig. Nachhaltiges Bauen ist nicht nur ein Trend, sondern eine Notwendigkeit für die Zukunft unseres Planeten. In diesem Blogbeitrag untersuchen wir die Prinzipien des nachhaltigen Bauens, die damit verbundenen Vorteile und wie unser Unternehmen bei umweltfreundlichen Baupraktiken führend ist. Nachhaltiges Bauen zielt darauf ab, die Umweltbelastung durch den gesamten Lebenszyklus eines Gebäudes zu minimieren – von der Planung und Konstruktion über den Betrieb bis hin zur eventualen Entsorgung. Dabei werden ressourcenschonende Materialien, energieeffiziente Technologien und umweltfreundliche Bauprozesse eingesetzt, um den ökologischen Fußabdruck zu reduzieren. 
		
		Für unser Unternehmen bedeutet nachhaltiges Bauen auch, gesunde und komfortable Lebensräume zu schaffen, die langfristig wirtschaftlich und ökologisch vorteilhaft sind. Indem wir innovative Lösungen wie erneuerbare Energien, recycelbare Baumaterialien und intelligente Gebäudetechnologien integrieren, leisten wir einen aktiven Beitrag zum Schutz unserer Umwelt und zur Schaffung einer besseren Zukunft für kommende Generationen. Wir sind stolz darauf, dass wir uns für nachhaltiges Bauen einsetzen und unseren Kunden dabei helfen, umweltfreundliche und zukunftssichere Gebäude zu realisieren.
      `,
		date: new Date("January 10, 2024"),
		likeCount: 34,
		commentCount: 4,
		tags: ["Edu4CommDev", "CommGrowthEdu", "EducateCommunities"],
		poster: {
			name: "Johnson",
		},
	},
	{
		title: "Die Bedeutung der handwerklicher Qualität im Bauwesen",
		image: qualitätbauen,
		category: "Qualität",
		content: `
        Hochwertige Handwerkskunst ist der Grundstein jedes erfolgreichen Bauprojekts. Sie stellt sicher, dass Gebäude nicht nur ästhetisch ansprechend, sondern auch langlebigund sicher sind. In diesem Blogbeitrag gehen wir näher darauf ein, warum hochwertige Handwerkskunst wichtig ist und wie unser Unternehmen bei jedem unserer Projekte die höchsten Standards einhält.
		Handwerkliche Qualität im Bauwesen geht weit über die bloße Einhaltung technischer Spezifikationen hinaus – sie spiegelt das Engagement und die Sorgfalt wider, mit der jedes Detail ausgeführt wird. Von der präzisen Verarbeitung der Materialien bis hin zur sorgfältigen Ausführung der Bauarbeiten trägt hochwertige Handwerkskunst entscheidend zur Wertbeständigkeit und Funktionalität eines Gebäudes bei.
		Unser Unternehmen setzt auf erfahrene Fachkräfte, die ihr Handwerk verstehen und mit Leidenschaft ausüben. Diese Expertise sorgt dafür, dass jedes Bauprojekt nicht nur den höchsten ästhetischen Ansprüchen gerecht wird, sondern auch die Langlebigkeit und Sicherheit bietet, die unsere Kunden erwarten. Mit einem klaren Fokus auf Qualität in jeder Bauphase gewährleisten wir, dass die Ergebnisse unserer Arbeit den Test der Zeit bestehen und einen bleibenden Eindruck hinterlassen.
      `,
		date: new Date("December 15, 2023"),
		likeCount: 201,
		commentCount: 123,
		tags: ["Skills4Growth", "EconSkillImpact", "GrowWithSkills"],
		poster: {
			name: "Bissi",
		},
	},
	{
		title: "Innovative Technologien verändern die Bauindustrie",
		image: innovativesbauen,
		category: "Innovationen",
		content: `
      Dank der Einführung innovativer Technologien erlebt die Baubranche derzeit eine Revolution. Diese Fortschritte machen Bauprojekte effizienter, kostengünstiger und nachhaltiger. In diesem Blogbeitrag werden wir einige der aufregendsten Technologien untersuchen, die unsere Bauweise verändern, und wie unser Unternehmen sie nutzt, um hervorragende Ergebnisse zu erzielen.
	  Innovative Technologien wie Building Information Modeling (BIM), 3D-Druck und Drohneneinsatz revolutionieren die Art und Weise, wie Bauprojekte geplant und umgesetzt werden. Diese Technologien ermöglichen präzisere Planungen, optimieren die Materialnutzung und verkürzen Bauzeiten erheblich. Dadurch können Kosten gesenkt und Projekte effizienter abgeschlossen werden.
	  
	  Unser Unternehmen setzt gezielt auf diese fortschrittlichen Technologien, um komplexe Bauvorhaben mit höchster Genauigkeit und Effizienz zu realisieren. Durch den Einsatz modernster Tools und Methoden stellen wir sicher, dass wir nicht nur die Erwartungen unserer Kunden erfüllen, sondern die Bauprojekte auch zukunftssicher und nachhaltig gestalten. So sind wir in der Lage, Spitzenleistungen zu erbringen und gleichzeitig den ökologischen Fußabdruck zu minimieren.
      `,
		date: new Date("July 20, 2023"),
		likeCount: 198,
		commentCount: 121,
		tags: ["CommEdu", "CommunityEngagement", "EduCommunity"],
		poster: {
			name: "Abisola",
		},
	},
];

export const contacts = [
	{
		name: "Email",
		value: "info@eb-bauunternehmen.com",
		icon: <SiMinutemailer />,
		href: "mailto: info@eb-bauunternehmen.com",
		buttonTitle: "Email",
	},
	{
		name: "Telefonnummer",
		value: "+491622768900",
		icon: <BsFillTelephoneFill />,
		href: "tel:+491622768900",
		buttonTitle: "Anrufen",
	},
	{
		name: "Addresse",
		value: "Veckerhagener Str. 41, 34233 Fuldatal, DE-Hessen",
		icon: <FaMapLocationDot />,
		href: "https://www.google.de/maps/place/EB+Bau+GmbH/@51.0294764,7.9241231,8z/data=!4m10!1m2!2m1!1seb+bau+gmbh!3m6!1s0x47bb390043f6bacf:0xe771888ccfe2126!8m2!3d51.3527765!4d9.5268427!15sCgtlYiBiYXUgZ21iaJIBFGNvbnN0cnVjdGlvbl9jb21wYW554AEA!16s%2Fg%2F11wbfmrnq3?entry=ttu",
		buttonTitle: "Standort",
	},
];

export const footer = [
	{
		name: "Explore",
		routes: [
			{ name: "Privacy Policy" },
			{ name: "Terms and Conditions" },
			{ name: "Cookie Policy" },
		],
	},
	{
		name: "Section",
		routes: [
			{ name: "Home", id: "header" },
			{ name: "About Us", id: "about" },
			{ name: "Services", id: "services" },
			{ name: "Team", id: "team" },
			{ name: "Project", id: "project" },
			{ name: "Testimonial", id: "testimonial" },
			{ name: "Blog", id: "blog" },
		],
	},
];
