import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import emailjs from "@emailjs/browser";
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
  Brain,
  Sparkle,
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

  const handleSubmit = async (e: React.FormEvent) => {
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
      // EmailJS configuration
      const serviceId = "service_ilfhza8";
      const templateId = "template_zjy3y19";
      const publicKey = "mYpwEHZH5G02AFCCT";

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
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1
            className="tracking-[0.3em] uppercase"
            style={{
              fontFamily: "Cinzel, serif",
              color: "white",
              fontWeight: 400,
              fontSize: "1.25rem",
              letterSpacing: "0.3em",
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
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
            className="text-white tracking-[0.5em] uppercase mb-6"
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 300,
              letterSpacing: "0.5em",
            }}
          >
            HEAL. REJUVENATE. TRANSFORM.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white max-w-3xl mb-10 text-lg leading-relaxed"
          >
            Discover authentic Ayurvedic healing nestled in the
            serene hills of Mankulam, where ancient wisdom meets
            peaceful nature to restore balance in body, mind,
            and spirit.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            onClick={() => setShowBookingModal(true)}
            className="border-2 border-white text-white px-10 py-3 uppercase tracking-wider hover:bg-white hover:text-[#364F35] transition-all"
          >
            Discover More
          </motion.button>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg leading-relaxed text-gray-700"
          >
            Our retreat offers authentic Ayurvedic healing
            surrounded by forests, waterfalls, and fresh
            mountain air—where the body relaxes, the mind slows
            down, and nature becomes part of the therapy.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "#F7F8F3" }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                Nestled in the pristine hills of Mankulam,
                Kerala, Punarnavam Ayur Retreat is a sanctuary
                where traditional Ayurvedic wisdom and natural
                healing converge. Our retreat offers
                personalized wellness programs designed to
                restore balance, rejuvenate the spirit, and
                transform lives through the power of ancient
                healing practices.
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
                      Traditional therapies administered by
                      experienced practitioners
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
                      Customized healing plans based on your
                      unique dosha constitution
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
                      Surrounded by lush forests, waterfalls,
                      and mountain air
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
                      Integrating body, mind, and spirit for
                      complete transformation
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
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
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
      <section className="py-20 px-6 bg-white">
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
              Dr. Shahana
            </h2>
            <p className="text-[#627460] mb-6 tracking-wide uppercase text-sm">
              Ayurveda Consultant
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dr. Shahana brings over 15 years of experience in
              traditional Ayurvedic medicine and holistic
              healing. Trained in classical Ayurvedic
              institutions in Kerala, she specializes in
              Panchakarma therapies, stress management, and
              chronic disease treatment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Her compassionate approach combines ancient wisdom
              with modern understanding, creating personalized
              treatment plans that address the root cause of
              ailments. Dr. Shahana believes in empowering
              patients through education about their unique
              constitution and guiding them towards sustainable
              wellness practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatments Section */}
      <section
        id="treatments"
        className="py-20 px-6"
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
              Traditional Ayurvedic therapies to detoxify,
              rejuvenate, and restore balance
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                icon: <Heart size={32} />,
                title: "ABHYANGA",
                description:
                  "A synchronized full-body oil massage using warm herbal oils that release tension, improve circulation, nourish tissues, and deeply relaxes the body",
              },
              {
                icon: <Droplets size={32} />,
                title: "SHIRODHARA",
                description:
                  "A calming therapy where warm medicated oil is gently poured over the forehead to relax the nervous system and reduce stress",
              },
              {
                icon: <Eye size={32} />,
                title: "NETRASEKAM",
                description:
                  "A soothing eye therapy using medicated decoctions that relieves the eyes and helps reduce strain from digital exposure",
              },
              {
                icon: <Wind size={32} />,
                title: "CHOORNAPINDA SWEDAM",
                description:
                  "A therapeutic herbal powder bolus massage that reduces pain, inflammation, and stiffness in joints and muscles",
              },
              {
                icon: <Sparkle size={32} />,
                title: "STRESS RELIEF THERAPY",
                description:
                  "A combination of relaxing treatments designed to calm the mind, ease tension, and restore emotional balance",
              },
              {
                icon: <Leaf size={32} />,
                title: "DETOX & REJUVENATION",
                description:
                  "A comprehensive cleansing program that eliminates toxins, revitalizes energy, and promotes overall wellness",
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
        className="relative overflow-hidden"
        style={{ height: "70vh" }}
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
      <section id="packages" className="py-20 px-6 bg-white">
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
              Choose the perfect retreat program for your
              healing journey
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-0">
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
                  "Yoga & meditation sessions",
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
                  "Nature-based healing experiences",
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
                className={`p-8 ${pkg.featured ? "text-white" : "bg-white"}`}
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
        className="py-20 px-6"
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
              Immerse yourself in the natural beauty and culture
              of Kerala
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
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
                title: "Backwater Cruises",
                image:
                  "https://images.unsplash.com/photo-1717069541470-9b1a2b085e1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
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
      <section className="py-20 px-6 bg-white">
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
              "Ayurveda teaches us that true health is not
              merely the absence of disease, but a dynamic state
              of balance and harmony between body, mind, and
              spirit."
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Leaf size={32} />,
                title: "Wholesome Ayurvedic Food",
                description:
                  "Organic, locally sourced meals prepared according to Ayurvedic principles",
              },
              {
                icon: <Mountain size={32} />,
                title: "Peaceful Surroundings",
                description:
                  "Tranquil environment surrounded by pristine nature and mountain air",
              },
              {
                icon: <Heart size={32} />,
                title: "Mindful Living",
                description:
                  "Practices that cultivate presence, awareness, and inner peace",
              },
              {
                icon: <Trees size={32} />,
                title: "Connection with Nature",
                description:
                  "Healing experiences that reconnect you with the natural world",
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
                className="flex gap-6"
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

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6"
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
                Mankulam, Kerala, India
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-white"
            >
              <Phone
                size={32}
                className="mx-auto mb-4 text-[#B4C1A6]"
              />
              <h4 className="mb-2 uppercase tracking-wider text-sm">
                Phone
              </h4>
              <a
                href="https://wa.me/917012844437"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#B4C1A6] transition-colors cursor-pointer inline-block"
              >
                +91 70128 44437
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
        className="py-8 px-6 text-white text-center"
        style={{ backgroundColor: "#1a2518" }}
      >
        <div className="container mx-auto">
          <p className="mb-2">
            Contact:{" "}
            <a
              href="https://wa.me/917012844437"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B4C1A6] transition-colors cursor-pointer"
            >
              +91 70128 44437
            </a>
          </p>
          <p className="text-white/60 text-sm">
            © 2026 Punarnavam Ayur Retreat. All rights
            reserved.
          </p>
        </div>
      </footer>

      {/* Booking Modal */}
      {showBookingModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          onClick={() => setShowBookingModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          onClick={() => setShowSuccessModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-10 max-w-md w-full relative text-center"
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
              Request Submitted!
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Thank you for your interest in Punarnavam Ayur Retreat. We have received your booking request and will contact you within 24 hours to confirm your retreat.
            </p>
            <p className="text-gray-600 text-sm mb-8">
              Please check your email for a confirmation message.
            </p>
            <button
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