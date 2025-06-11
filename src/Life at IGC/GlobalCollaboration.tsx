import International from "../assets/International Projects.png"
import Cross from "../assets/Cross-Cultural Exchange.png"

export default function Component() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="justify-start text-black text-4xl font-bold font-['Nunito'] mb-6">Global Collaboration</h1>
        <p className="justify-start text-black text-xl font-medium font-['Nunito'] max-w-5xl">
          As a global organization, IGC provides opportunities to collaborate with teams from around the world. Working
          in a truly international environment, you will gain exposure to different perspectives, ideas, and approaches,
          helping you build the skills needed to succeed in the global marketplace.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div>
          <div className="mb-6">
            <img
              src={International}
              alt=""
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
          <h2 className="justify-start text-black text-3xl font-semibold font-['Nunito'] mb-4">International Projects</h2>
          <p className="justify-start text-black text-xl font-medium font-['Nunito']">
            Work on projects that have a global impact, collaborating with colleagues from different countries and
            cultures.
          </p>
        </div>

        <div>
          <div className="mb-6">
            <img
              src={Cross}
              alt=""
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
          <h2 className="justify-start text-black text-3xl font-semibold font-['Nunito'] mb-4">Cross-Cultural Exchange</h2>
          <p className="justify-start text-black text-xl font-medium font-['Nunito']">
            Learn from diverse teams and expand your understanding of global markets, industries, and customer needs.
          </p>
        </div>
      </div>
    </div>
  )
}
