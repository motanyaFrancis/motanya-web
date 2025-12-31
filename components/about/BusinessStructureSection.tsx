export default function BusinessStructureSection() {
  return (
    <section className="w-full">
      {/* Top Purple Section */}
      <div className="w-full bg-[#4B3FA8] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            How We Structure <br /> Innovative Business Models
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Item 1 */}
            <div>
              <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-white/20 rounded"></span>
                Strategic Planning
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                We help businesses define a clear strategy that aligns goals with action.
                A well-planned strategy ensures direction, clarity, and measurable success.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-white/20 rounded"></span>
                Business Model Innovation
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                By re-structuring operations and workflows, we improve efficiency,
                create new opportunities, and drive sustainable growth for businesses.
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-white/20 rounded"></span>
                Performance Optimization
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Leveraging analytics, technology, and process improvements, we enhance
                performance, productivity, and outcomes across teams and operations.
              </p>
            </div>

            {/* Item 4 */}
            <div>
              <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-white/20 rounded"></span>
                Evaluation & Insights
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Continuous testing, measurement, and evaluation allow businesses to
                adapt, refine strategies, and deliver value consistently to customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-16 bg-gradient-to-b from-white to-[#E8E6FF]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 max-w-4xl">
            Driving Growth Through Innovation, Branding & Digital Strategy
          </h2>

          <div className="flex flex-wrap items-center gap-12 mb-10">
            <div>
              <span className="text-5xl font-bold text-[#4B3FA8]">300+</span>
              <p className="text-gray-600 text-sm">Successful Enterprise Collaborations</p>
            </div>

            <div>
              <span className="text-5xl font-bold text-[#4B3FA8]">180+</span>
              <p className="text-gray-600 text-sm max-w-xs">
                Projects, product innovations, and digital solutions delivered to diverse business sectors
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/articles/digital-presence.jpg"
              alt="Business Strategy and Innovation"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
