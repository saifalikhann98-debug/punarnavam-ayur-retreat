import { useState, useEffect, type FormEvent } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import emailjs from "@emailjs/browser";
import mistyGardenResort from "../imports/misty-garden-resort.jpg";
import {
  Leaf,
  Heart,
  Sparkles,
  Trees,
  Phone,
  Mail,
  MapPin,
  X,
  Mountain,
  Droplets,
  Eye,
  Wind,
  Sparkle,
  Waves,
  Utensils,
  BedDouble,
  ExternalLink,
  MessageCircle,
  Instagram,
} from "lucide-react";

export default function App() {
  const [showBookingModal, setShowBookingModal] =
    useState(false);
  const [showSuccessModal, setShowSuccessModal] =
    useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    note: "",
  });

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_ilfhza8";
      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_zjy3y19";
      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "mYpwEHZH5G02AFCCT";

      // Template parameters that will be used in your email template
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.note || "No additional notes",
        to_email: "punarnavamayurretreat@gmail.com",
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey,
      );

      setShowBookingModal(false);
      setShowSuccessModal(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        note: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(
        "Sorry, there was an error sending your request. Please try again or contact us directly at punarnavamayurretreat@gmail.com",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (showBookingModal || showSuccessModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showBookingModal, showSuccessModal]);

  return (
    <div
      className="bg-white"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(30, 40, 35, 0.95)"
            : "transparent",
          boxShadow: scrolled
            ? "0 2px 10px rgba(0,0,0,0.1)"
            : "none",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between gap-4">
          <h1
            className="uppercase"
            style={{
              fontFamily: "Cinzel, serif",
              color: "white",
              fontWeight: 400,
              fontSize: "clamp(0.95rem, 3.5vw, 1.25rem)",
              letterSpacing: "clamp(0.12em, 1vw, 0.3em)",
            }}
          >
            PUNARNAVAM
          </h1>
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white uppercase tracking-wider text-sm hover:opacity-70 transition-opacity"
            >
              Experiences
            </button>
            <button
              onClick={() => document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white uppercase tracking-wider text-sm hover:opacity-70 transition-opacity"
            >
              Spa
            </button>
            <button
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white uppercase tracking-wider text-sm hover:opacity-70 transition-opacity"
            >
              Wellness
            </button>
            <button
              onClick={() => document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white uppercase tracking-wider text-sm hover:opacity-70 transition-opacity"
            >
              Healing
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white uppercase tracking-wider text-sm hover:opacity-70 transition-opacity"
            >
              Contact
            </button>
            <button
              onClick={() => setShowBookingModal(true)}
              className="border-2 border-white text-white px-6 py-2 uppercase tracking-wider text-sm hover:bg-white hover:text-[#364F35] transition-all"
            >
              Book Now
            </button>
          </nav>
          <button
            onClick={() => setShowBookingModal(true)}
            className="md:hidden border border-white text-white px-4 py-2 uppercase tracking-wider text-xs hover:bg-white hover:text-[#364F35] transition-all shrink-0"
          >
            Book
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[680px] h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1560226262-333ea235f065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Kerala Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white uppercase mb-6 max-w-5xl"
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 300,
              letterSpacing: "clamp(0.08em, 1.2vw, 0.5em)",
            }}
          >
            HEAL REJUVENATE TRANSFORM
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white max-w-3xl mb-10 text-base sm:text-lg leading-relaxed"
          >
            Experience an Ayurvedic retreat in Kerala surrounded
            by the quiet hills of Mankulam where traditional
            healing fresh mountain air and peaceful nature help
            you feel balanced again
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            onClick={() => setShowBookingModal(true)}
            className="border-2 border-white text-white px-8 sm:px-10 py-3 uppercase tracking-wider hover:bg-white hover:text-[#364F35] transition-all"
          >
            Discover More
          </motion.button>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-base sm:text-lg leading-relaxed text-gray-700"
          >
            At Punarnavam Ayur Retreat every stay is shaped by
            authentic Ayurveda forest views waterfall air and the
            calm rhythm of Mankulam near Munnar
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6"
        style={{ backgroundColor: "#F7F8F3" }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="mb-6"
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "#364F35",
                }}
              >
                About the Retreat
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Nestled in the green hills of Mankulam Kerala
                Punarnavam Ayur Retreat is a peaceful space for
                Ayurvedic healing wellness and rest Our retreat
                brings together traditional Kerala Ayurveda
                personal care and nature based living to help
                guests restore balance and feel renewed
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Leaf
                    className="text-[#627460] mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h4
                      className="font-medium mb-1"
                      style={{ color: "#364F35" }}
                    >
                      Authentic Ayurvedic Treatments
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Kerala Ayurvedic therapies offered with
                      care by experienced practitioners
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart
                    className="text-[#627460] mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h4
                      className="font-medium mb-1"
                      style={{ color: "#364F35" }}
                    >
                      Personalized Wellness Programs
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Wellness plans shaped around your body type
                      lifestyle and healing needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles
                    className="text-[#627460] mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h4
                      className="font-medium mb-1"
                      style={{ color: "#364F35" }}
                    >
                      Serene Natural Environment
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Surrounded by forests waterfalls and fresh
                      mountain air
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Trees
                    className="text-[#627460] mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h4
                      className="font-medium mb-1"
                      style={{ color: "#364F35" }}
                    >
                      Holistic Approach
                    </h4>
                    <p className="text-gray-600 text-sm">
                      A gentle approach that supports the body
                      mind and spirit together
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[320px] sm:h-[420px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1740297165018-1431d45d8f11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Ayurvedic Spa Treatment"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2
              className="mb-2"
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#364F35",
              }}
            >
              Dr Shahana
            </h2>
            <p className="text-[#627460] mb-6 tracking-wide uppercase text-sm">
              Ayurveda Consultant
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dr Shahana brings over 10 years of experience in
              traditional Ayurvedic medicine and holistic
              healing Trained in classical Ayurvedic
              institutions in Kerala she supports guests with
              Panchakarma therapies stress management and
              long term wellness care
            </p>
            <p className="text-gray-700 leading-relaxed">
              Her approach is warm simple and personal She
              listens closely understands each guest and guides
              them with Ayurveda diet lifestyle and daily
              wellness practices that feel practical after the
              retreat too
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatments Section */}
      <section
        id="treatments"
        className="py-16 sm:py-20 px-4 sm:px-6"
        style={{ backgroundColor: "#F7F8F3" }}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2
              className="mb-3 uppercase tracking-wider"
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                color: "#364F35",
                letterSpacing: "0.1em",
              }}
            >
              OUR TREATMENTS
            </h2>
            <p className="text-gray-600 text-sm">
              Traditional Ayurvedic therapies for detox
              rejuvenation pain relief stress care and balance
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                icon: <Heart size={32} />,
                title: "ABHYANGA",
                description:
                  "A full body Ayurvedic oil massage with warm herbal oils that helps release tension support circulation nourish the body and bring deep relaxation",
              },
              {
                icon: <Droplets size={32} />,
                title: "SHIRODHARA",
                description:
                  "A calming therapy where warm medicated oil flows gently over the forehead to relax the nervous system and ease stress",
              },
              {
                icon: <Eye size={32} />,
                title: "NETRASEKAM",
                description:
                  "A soothing Ayurvedic eye therapy that helps tired eyes feel fresh and relaxed after screen strain",
              },
              {
                icon: <Wind size={32} />,
                title: "CHOORNAPINDA SWEDAM",
                description:
                  "A herbal powder bolus massage that helps reduce stiffness pain and heaviness in the joints and muscles",
              },
              {
                icon: <Sparkle size={32} />,
                title: "STRESS RELIEF THERAPY",
                description:
                  "A gentle mix of relaxing Ayurvedic treatments created to calm the mind ease tension and support emotional balance",
              },
              {
                icon: <Leaf size={32} />,
                title: "DETOX AND REJUVENATION",
                description:
                  "A cleansing and rejuvenation program that supports digestion energy sleep and overall wellness",
              },
            ].map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="text-left"
              >
                <div className="text-[#364F35] mb-4 stroke-1">
                  {treatment.icon}
                </div>
                <h3
                  className="mb-3 uppercase tracking-wider"
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: "0.95rem",
                    color: "#364F35",
                    letterSpacing: "0.05em",
                  }}
                >
                  {treatment.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {treatment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Image Break */}
      <section
        className="relative overflow-hidden h-[45vh] min-h-[320px] sm:h-[70vh]"
      >
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1775133263714-848c8fe09e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Ayurvedic Shirodhara Treatment"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Wellness Packages Section */}
      <section id="packages" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#364F35",
              }}
            >
              Wellness Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose a Kerala Ayurveda wellness program that
              suits your time energy and healing goals
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-0 shadow-sm md:shadow-none">
            {[
              {
                title: "3 DAY RELAXATION\nRETREAT",
                features: [
                  "Ayurvedic consultation",
                  "Daily Abhyanga massage",
                  "Herbal steam therapy",
                  "Ayurvedic meals",
                  "Nature walks",
                ],
                featured: false,
              },
              {
                title: "5 DAY REJUVENATION\nPROGRAM",
                features: [
                  "Personalized therapy plan",
                  "Daily Panchakarma treatments",
                  "Stress relief therapies",
                  "Detox herbal support",
                  "Yoga and meditation sessions",
                ],
                featured: true,
              },
              {
                title: "7 DAY AYURVEDA\nHEALING RETREAT",
                features: [
                  "Full Ayurvedic consultation",
                  "Customized treatment schedule",
                  "Detox and rejuvenation treatments",
                  "Lifestyle and diet guidance",
                  "Nature based healing experiences",
                ],
                featured: false,
              },
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className={`p-6 sm:p-8 border border-[#D7DCCD] md:border-0 ${pkg.featured ? "text-white" : "bg-white"}`}
                style={{
                  backgroundColor: pkg.featured
                    ? "#364F35"
                    : "white",
                }}
              >
                <h3
                  className={`mb-6 uppercase whitespace-pre-line ${pkg.featured ? "text-white" : ""}`}
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: "0.95rem",
                    color: pkg.featured ? "white" : "#364F35",
                    letterSpacing: "0.05em",
                    lineHeight: "1.6",
                  }}
                >
                  {pkg.title}
                </h3>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="mt-0.5 flex-shrink-0"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7.5"
                          stroke={
                            pkg.featured ? "#B4C1A6" : "#627460"
                          }
                          strokeWidth="1"
                        />
                        <path
                          d="M5 8L7 10L11 6"
                          stroke={
                            pkg.featured ? "#B4C1A6" : "#627460"
                          }
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className={`text-sm ${pkg.featured ? "text-white" : "text-gray-600"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section
        id="experiences"
        className="py-16 sm:py-20 px-4 sm:px-6"
        style={{ backgroundColor: "#F7F8F3" }}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#364F35",
              }}
            >
              Experiences
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the nature culture and quiet hill life
              around Mankulam and Munnar
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Forest Walks",
                image:
                  "https://images.unsplash.com/photo-1733743366272-f138806d8d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
              {
                title: "Waterfall Visits",
                image:
                  "https://images.unsplash.com/photo-1636693316901-a3238bc2917c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
              {
                title: "Tea Plantation Tours",
                image:
                  "https://images.unsplash.com/photo-1553337787-17961c0990db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
              {
                title: "Trekking",
                image:
                  "https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
              {
                title: "Mountain Safaris",
                image:
                  "https://images.unsplash.com/photo-1628080657485-a45999f8a3cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
              {
                title: "Village Experiences",
                image:
                  "https://images.unsplash.com/photo-1766404891650-492a7192696b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
              >
                <motion.img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3
                    className="text-white tracking-wider"
                    style={{
                      fontFamily: "Cinzel, serif",
                      fontSize: "1.25rem",
                    }}
                  >
                    {experience.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="mb-6"
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#364F35",
              }}
            >
              Our Philosophy
            </h2>
            <p className="text-gray-700 text-lg italic leading-relaxed max-w-3xl mx-auto mb-12">
              Ayurveda reminds us that true health is balance in
              the body calm in the mind and a deeper connection
              with daily life
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Leaf size={32} />,
                title: "Wholesome Ayurvedic Food",
                description:
                  "Fresh local meals prepared with Ayurvedic principles",
              },
              {
                icon: <Mountain size={32} />,
                title: "Peaceful Surroundings",
                description:
                  "A calm hill setting surrounded by nature and mountain air",
              },
              {
                icon: <Heart size={32} />,
                title: "Mindful Living",
                description:
                  "Simple practices that support presence awareness and inner peace",
              },
              {
                icon: <Trees size={32} />,
                title: "Connection with Nature",
                description:
                  "Healing experiences that bring you closer to nature",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="flex gap-4 sm:gap-6"
              >
                <div className="text-[#627460] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "Cinzel, serif",
                      fontSize: "1.25rem",
                      color: "#364F35",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resort Section */}
      <section
        id="resort"
        className="py-16 sm:py-20 px-4 sm:px-6"
        style={{ backgroundColor: "#F7F8F3" }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#627460] uppercase tracking-[0.18em] text-xs mb-4">
                About the Resort
              </p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "#364F35",
                }}
              >
                Misty Garden Resorts and Spa
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Punarnavam Ayur Retreat is located within Misty
                Garden Resorts and Spa in Mankulam near Munnar
                The resort is surrounded by misty valleys forest
                air organic farms and the quiet beauty of the
                Western Ghats
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                The resort gives guests a comfortable base for an
                Ayurveda wellness retreat with restful rooms
                peaceful views dining spa facilities and easy
                access to waterfalls tea gardens trekking routes
                and local nature experiences
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: <BedDouble size={22} />,
                    label: "Comfortable Stay",
                    text: "Rooms and cottages for a restful retreat",
                  },
                  {
                    icon: <Utensils size={22} />,
                    label: "Restaurant",
                    text: "Fresh meals served within the resort",
                  },
                  {
                    icon: <Waves size={22} />,
                    label: "Pool and Spa",
                    text: "Relaxation spaces after Ayurvedic therapy sessions",
                  },
                  {
                    icon: <MapPin size={22} />,
                    label: "Mankulam Munnar",
                    text: "A quiet location surrounded by nature",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="flex gap-4 bg-white p-5 rounded-lg border border-[#D7DCCD]"
                  >
                    <div className="text-[#627460] flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        className="mb-1"
                        style={{
                          fontFamily: "Cinzel, serif",
                          fontSize: "0.95rem",
                          color: "#364F35",
                        }}
                      >
                        {item.label}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <a
                href="https://share.google/PrL9UUb14rrTOqGXu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#364F35] text-[#364F35] px-6 py-3 uppercase tracking-wider text-sm hover:bg-[#364F35] hover:text-white transition-all"
              >
                View on Google Maps
                <ExternalLink size={16} />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="h-[360px] sm:h-[460px] lg:h-[560px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src={mistyGardenResort}
                  alt="Misty Garden Resorts and Spa building at dusk"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:right-6 sm:bottom-6 bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-lg">
                <p className="text-[#364F35] leading-relaxed">
                  A nature led stay for guests who come to
                  Punarnavam for Ayurveda rest and quiet time
                  away from the rush
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 px-4 sm:px-6"
        style={{ backgroundColor: "#364F35" }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              }}
            >
              Plan Your Healing Journey
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <MapPin
                size={32}
                className="mx-auto mb-4 text-[#B4C1A6]"
              />
              <h4 className="mb-2 uppercase tracking-wider text-sm">
                Location
              </h4>
              <p className="text-white/80">
                Mankulam Kerala India
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-white"
            >
              <MessageCircle
                size={32}
                className="mx-auto mb-4 text-[#B4C1A6]"
              />
              <h4 className="mb-2 uppercase tracking-wider text-sm">
                WhatsApp
              </h4>
              <p className="mb-4 text-white/80 text-sm">
                +91 70128 44437
              </p>
              <a
                href="https://wa.me/917012844437"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#364F35]"
              >
                <Phone size={16} />
                Chat on WhatsApp
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-white"
            >
              <Mail
                size={32}
                className="mx-auto mb-4 text-[#B4C1A6]"
              />
              <h4 className="mb-2 uppercase tracking-wider text-sm">
                Email
              </h4>
              <p className="text-white/80">
                punarnavamayurretreat@gmail.com
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <button
              onClick={() => setShowBookingModal(true)}
              className="px-12 py-4 uppercase tracking-wider transition-all hover:opacity-90"
              style={{
                backgroundColor: "#B4C1A6",
                color: "#364F35",
              }}
            >
              Book Your Retreat
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-4 sm:px-6 text-white text-center"
        style={{ backgroundColor: "#1a2518" }}
      >
        <div className="container mx-auto">
          <div className="mb-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            <a
              href="https://wa.me/917012844437"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/85 transition-colors hover:text-[#B4C1A6]"
            >
              <Phone size={16} />
              +91 70128 44437
            </a>
            <a
              href="https://www.instagram.com/punarnavam_ayur?igsh=MXFyejRya2ZuYnZmMg=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/85 transition-colors hover:text-[#B4C1A6]"
            >
              <Instagram size={16} />
              Instagram
            </a>
          </div>
          <p className="text-white/60 text-sm">
            © 2026 Punarnavam Ayur Retreat All rights reserved
          </p>
        </div>
      </footer>

      <a
        href="https://wa.me/917012844437"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get help on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-[#1fb85a] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#364F35]"
      >
        <MessageCircle size={22} />
        <span className="hidden sm:inline">Need Help</span>
      </a>

      {/* Booking Modal */}
      {showBookingModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          onClick={() => setShowBookingModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full relative max-h-[calc(100vh-2rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close booking form"
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            <h3
              className="mb-6"
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "1.75rem",
                color: "#364F35",
              }}
            >
              Book Your Retreat
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 text-sm text-gray-700">
                  Full Name{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullName: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#627460]"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-700">
                  Phone Number{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#627460]"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#627460]"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-700">
                  Note (optional)
                </label>
                <textarea
                  value={formData.note}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      note: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#627460] resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 text-white uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#364F35" }}
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          onClick={() => setShowSuccessModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6 sm:p-10 max-w-md w-full relative text-center max-h-[calc(100vh-2rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#B4C1A6" }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3
              className="mb-4"
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "1.75rem",
                color: "#364F35",
              }}
            >
              Request Submitted
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Thank you for your interest in Punarnavam Ayur Retreat We have received your booking request and will contact you within 24 hours to confirm your retreat
            </p>
            <p className="text-gray-600 text-sm mb-8">
              Please check your email for a confirmation message
            </p>
            <button
              aria-label="Close confirmation"
              onClick={() => setShowSuccessModal(false)}
              className="px-10 py-3 text-white uppercase tracking-wider hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#364F35" }}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
