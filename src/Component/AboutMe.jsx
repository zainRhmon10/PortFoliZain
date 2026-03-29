import img from "../assets/zain1.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="px-4 pb-20 ">
      <p className="text-center mb-20 text-6xl font-bold">About Me</p>
      <div className="grid grid-cols-1 md:grid-cols-2  flex  justify-between px-13  ">
        <div className="flex  flex-col gap-4 ">
          <p className="py-3 pl-3 mt-10 leading-10 text-xl text-gray-400">
            I'm a passionate Computer Engineering with a deep obsession for
            Artificial Intelligence and Machine Learning — always pushing to
            learn more, go deeper, and build smarter. I specialize in designing
            end-to-end ML pipelines built to solve real-world problems, working
            across the full cycle from data to deployment. My technical toolkit
            includes PyTorch, TensorFlow, Scikit-learn, and MLflow.
          </p>
          <p className="py-3 pl-3 leading-10 text-xl text-gray-400">
            Alongside AI, I have a genuine talent for the web — I craft fast,
            clean, and modern frontend experiences using React and Tailwind CSS,
            streamlit python , bridging the gap between intelligent systems and
            beautiful interfaces.
          </p>
          <p className="py-3 pl-3 leading-10 text-xl text-gray-400">
            I don't just build interfaces — I build experiences. Every pixel is
            intentional, every interaction is smooth, and every component is
            crafted with performance in mind.
          </p>
        </div>
        <div className="flex flex-row-reverse ">
          <img
            className="rounded-4xl w-5/6 h-[600px] object-cover "
            src={img}
          />
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
