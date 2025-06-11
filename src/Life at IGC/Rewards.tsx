export default function Component() {
  return (
    <section className="bg-gradient-to-l from-slate-900 to-slate-600 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="justify-start text-white text-4xl font-bold font-['Nunito'] mb-6">Recognition & Rewards</h1>

        <p className="justify-start text-white text-xl font-medium font-['Nunito'] max-w-4xl mb-12">
          At IGC, we believe in recognizing and rewarding hard work and dedication. We offer a variety of rewards and
          recognition programs that celebrate our employees' achievements and contributions to the company's success.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black rounded-xl border-2 border-black p-8">
            <h2 className="justify-start text-white text-2xl font-bold font-['Nunito'] mb-4">Employee Recognition Programs</h2>
            <p className="justify-start text-white text-2xl font-normal font-['Nunito']">
              From peer-to-peer recognition to company-wide awards, we celebrate the efforts and accomplishments of our
              employees.
            </p>
          </div>

          <div className="bg-black rounded-xl border-2 border-black p-8">
            <h2 className="justify-start text-white text-2xl font-bold font-['Nunito'] mb-4">Performance-Based Bonuses</h2>
            <p className="justify-start text-white text-2xl font-normal font-['Nunito']">
              We offer performance-based bonuses to reward employees who go above and beyond in their roles.
            </p>
          </div>

          <div className="bg-black rounded-xl border-2 border-black p-8">
            <h2 className="justify-start text-white text-2xl font-bold font-['Nunito'] mb-4">Career Advancement Opportunities</h2>
            <p className="justify-start text-white text-2xl font-normal font-['Nunito']">
              As you grow within the company, you'll have opportunities for promotions, leadership roles, and new career
              paths.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
