import About from "@/components/about";
import Projects from "@/components/projects";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Blog from "@/components/blog";
import ContactMe from "@/components/contact";
import Footer from "@/components/footer";
const page = () => {
  return (
    <section className="min-h-screen w-full bg-white   md:px-4 px-2 ">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Blog />
      <ContactMe />
      <Footer />
    </section>
  );
};

export default page;
