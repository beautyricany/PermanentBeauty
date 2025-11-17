// Shared services data for Permanent Beauty
// Import this file in any component: import { services } from '../data/services';

export interface ServiceGroup {
    name: string;
    shortDescription?: string;
    description: Description[];
    images: string[];
    services: Service[];
}

export interface Service {
    title: string;
    shortDescription?: string;
    price: number;
    description: Description[];
    features: string[];
    images: string[];
}

export interface Description {
    title: string;
    titleType: HeadingType;
    text: string;
}

export enum HeadingType {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
}

export const serviceGroups: ServiceGroup[] = [
    {
        name: "Eyebrow Services",
        shortDescription: "Perfect your brows with our professional microblading and powder brow techniques.",
        description: [
            {
                title: "Perfect Your Brows",
                titleType: HeadingType.H2,
                text: "Our eyebrow services are designed to enhance your natural beauty with techniques that create the perfect shape, fullness, and definition for your unique facial features."
            }
        ],
        images: ["eyebrow-services-main.jpg"],
        services: [
            {
                title: "Microblading",
                shortDescription: "Natural hair-like strokes for fuller, defined brows.",
                price: 450,
                description: [
                    {
                        title: "Natural Hair-Like Strokes",
                        titleType: HeadingType.H3,
                        text: "Transform your eyebrows with our signature microblading technique. This semi-permanent treatment creates natural-looking, hair-like strokes that fill in sparse areas and define your brow shape."
                    }
                ],
                features: [
                    "Natural, hair-like strokes",
                    "Customized shape and color",
                    "Lasts 12-18 months",
                    "Includes touch-up session"
                ],
                images: ["microblading-1.jpg", "microblading-2.jpg"]
            },
            {
                title: "Powder Brows",
                shortDescription: "Soft, powdered makeup look perfect for all skin types.",
                price: 475,
                description: [
                    {
                        title: "Soft Makeup Finish",
                        titleType: HeadingType.H3,
                        text: "Achieve a soft, powdered makeup look that lasts. This technique creates a fuller, more defined brow with a gradient effect from light to dark, perfect for all skin types."
                    }
                ],
                features: [
                    "Soft, makeup-like finish",
                    "Great for all skin types",
                    "Fuller appearance",
                    "Lasts 18-24 months"
                ],
                images: ["powder-brows-1.jpg", "powder-brows-2.jpg"]
            }
        ]
    },
    {
        name: "Eye Services",
        shortDescription: "Wake up with perfectly defined eyes every morning.",
        description: [
            {
                title: "Enhance Your Eyes",
                titleType: HeadingType.H2,
                text: "Wake up with perfectly defined eyes every morning. Our permanent eyeliner services enhance your lash line with precision and artistry."
            }
        ],
        images: ["eye-services-main.jpg"],
        services: [
            {
                title: "Permanent Eyeliner",
                shortDescription: "Waterproof, smudge-proof eyeliner that lasts years.",
                price: 375,
                description: [
                    {
                        title: "Effortless Definition",
                        titleType: HeadingType.H3,
                        text: "Wake up with perfectly defined eyes every morning. Our permanent eyeliner enhances your lash line with a subtle or dramatic look that won't smudge or fade throughout the day."
                    }
                ],
                features: [
                    "Top, bottom, or both lash lines",
                    "Various styles available",
                    "Waterproof and smudge-proof",
                    "Lasts 2-3 years"
                ],
                images: ["eyeliner-1.jpg", "eyeliner-2.jpg"]
            }
        ]
    },
    {
        name: "Lip Services",
        shortDescription: "Natural color and definition for fuller, more beautiful lips.",
        description: [
            {
                title: "Beautiful Lips",
                titleType: HeadingType.H2,
                text: "Enhance your lips with natural color and definition that lasts. Our lip services create fuller, more defined lips with a beautiful, natural-looking tint."
            }
        ],
        images: ["lip-services-main.jpg"],
        services: [
            {
                title: "Lip Blushing",
                shortDescription: "Natural tint for fuller-looking lips with custom color matching.",
                price: 500,
                description: [
                    {
                        title: "Natural Lip Enhancement",
                        titleType: HeadingType.H3,
                        text: "Enhance your lips with a natural tint that defines, adds color, and creates the illusion of fuller lips. Perfect for those wanting a subtle, everyday look."
                    }
                ],
                features: [
                    "Natural-looking color enhancement",
                    "Custom color matching",
                    "Corrects asymmetry",
                    "Lasts 2-3 years"
                ],
                images: ["lip-blushing-1.jpg", "lip-blushing-2.jpg"]
            }
        ]
    },
    {
        name: "Special Services",
        shortDescription: "Unique cosmetic enhancements and corrective treatments.",
        description: [
            {
                title: "Specialized Treatments",
                titleType: HeadingType.H2,
                text: "Unique cosmetic enhancements and corrective treatments tailored to your individual needs."
            }
        ],
        images: ["special-services-main.jpg"],
        services: [
            {
                title: "Beauty Mark",
                shortDescription: "Add timeless elegance with a perfectly placed beauty mark.",
                price: 150,
                description: [
                    {
                        title: "Timeless Elegance",
                        titleType: HeadingType.H3,
                        text: "Add a signature beauty mark or enhance an existing one. A subtle touch that adds character and elegance to your look."
                    }
                ],
                features: [
                    "Custom placement",
                    "Natural appearance",
                    "Quick procedure",
                    "Long-lasting results"
                ],
                images: ["beauty-mark-1.jpg"]
            },
            {
                title: "Scar Camouflage",
                shortDescription: "Minimize scars with specialized pigmentation techniques.",
                price: 0, // 0 indicates consultation required
                description: [
                    {
                        title: "Restore Confidence",
                        titleType: HeadingType.H3,
                        text: "Minimize the appearance of scars through specialized pigmentation techniques. We'll assess your unique situation and create a customized treatment plan."
                    }
                ],
                features: [
                    "Personalized assessment",
                    "Color matching expertise",
                    "Various scar types",
                    "Consultation required"
                ],
                images: ["scar-camouflage-1.jpg"]
            }
        ]
    },
    {
        name: "Manicure Services",
        shortDescription: "Professional nail care and beautiful manicures for healthy, polished hands.",
        description: [
            {
                title: "Beautiful Hands",
                titleType: HeadingType.H2,
                text: "Pamper your hands with our professional manicure services. From classic to gel manicures, we offer treatments that keep your nails healthy and beautifully polished."
            }
        ],
        images: ["manicure-services-main.jpg"],
        services: [
            {
                title: "Classic Manicure",
                shortDescription: "Traditional manicure with nail shaping, cuticle care, and polish.",
                price: 35,
                description: [
                    {
                        title: "Timeless Nail Care",
                        titleType: HeadingType.H3,
                        text: "Our classic manicure includes nail shaping, cuticle care, hand massage, and your choice of polish. Perfect for maintaining healthy, beautiful nails."
                    }
                ],
                features: [
                    "Nail shaping and filing",
                    "Cuticle care and treatment",
                    "Relaxing hand massage",
                    "Choice of polish color"
                ],
                images: ["classic-manicure-1.jpg", "classic-manicure-2.jpg"]
            },
            {
                title: "Gel Manicure",
                shortDescription: "Long-lasting gel polish with chip-resistant shine for up to 3 weeks.",
                price: 55,
                description: [
                    {
                        title: "Long-Lasting Shine",
                        titleType: HeadingType.H3,
                        text: "Enjoy chip-resistant, glossy nails that last up to 3 weeks. Our gel manicure includes complete nail care with professional gel polish application."
                    }
                ],
                features: [
                    "Lasts up to 3 weeks",
                    "Chip-resistant finish",
                    "High-gloss shine",
                    "Wide color selection"
                ],
                images: ["gel-manicure-1.jpg", "gel-manicure-2.jpg"]
            },
            {
                title: "Deluxe Spa Manicure",
                shortDescription: "Ultimate hand pampering with exfoliation, mask, and extended massage.",
                price: 65,
                description: [
                    {
                        title: "Ultimate Hand Pampering",
                        titleType: HeadingType.H3,
                        text: "Indulge in our most luxurious manicure experience. Includes exfoliation, hydrating mask, extended massage, and your choice of regular or gel polish."
                    }
                ],
                features: [
                    "Exfoliating scrub treatment",
                    "Nourishing hand mask",
                    "Extended hand and arm massage",
                    "Regular or gel polish included"
                ],
                images: ["deluxe-manicure-1.jpg", "deluxe-manicure-2.jpg"]
            }
        ]
    },
    {
        name: "Pedicure Services",
        shortDescription: "Relaxing foot treatments and beautiful pedicures for healthy, smooth feet.",
        description: [
            {
                title: "Beautiful Feet",
                titleType: HeadingType.H2,
                text: "Treat your feet to professional pedicure services. From classic to luxury spa pedicures, we provide complete foot care that leaves your feet feeling refreshed and looking beautiful."
            }
        ],
        images: ["pedicure-services-main.jpg"],
        services: [
            {
                title: "Classic Pedicure",
                shortDescription: "Essential foot care with nail trimming, callus removal, and polish.",
                price: 45,
                description: [
                    {
                        title: "Essential Foot Care",
                        titleType: HeadingType.H3,
                        text: "Our classic pedicure includes warm soak, nail care, callus removal, foot massage, and polish. The perfect treatment to keep your feet healthy and beautiful."
                    }
                ],
                features: [
                    "Warm foot soak",
                    "Nail trimming and shaping",
                    "Callus removal",
                    "Relaxing foot massage"
                ],
                images: ["classic-pedicure-1.jpg", "classic-pedicure-2.jpg"]
            },
            {
                title: "Gel Pedicure",
                shortDescription: "Long-lasting gel polish on perfectly pampered feet.",
                price: 65,
                description: [
                    {
                        title: "Long-Lasting Beauty",
                        titleType: HeadingType.H3,
                        text: "Complete pedicure with gel polish that lasts up to 3 weeks. Includes all classic pedicure services plus professional gel application."
                    }
                ],
                features: [
                    "Complete foot care treatment",
                    "Chip-resistant gel polish",
                    "Lasts up to 3 weeks",
                    "Beautiful color options"
                ],
                images: ["gel-pedicure-1.jpg", "gel-pedicure-2.jpg"]
            },
            {
                title: "Deluxe Spa Pedicure",
                shortDescription: "Ultimate relaxation with exfoliation, mask, hot stones, and extended massage.",
                price: 85,
                description: [
                    {
                        title: "Ultimate Foot Luxury",
                        titleType: HeadingType.H3,
                        text: "Our signature spa pedicure includes exfoliating scrub, hydrating mask, hot stone massage, and extended relaxation. Choose regular or gel polish for this luxurious treatment."
                    }
                ],
                features: [
                    "Sugar scrub exfoliation",
                    "Hydrating foot mask",
                    "Hot stone massage",
                    "Extended leg and foot massage"
                ],
                images: ["deluxe-pedicure-1.jpg", "deluxe-pedicure-2.jpg"]
            }
        ]
    }
];

export default serviceGroups;
