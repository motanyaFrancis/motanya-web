export default function Testimonials() {
  return (
    <section className="py-20 text-center max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6 text-left">CLIENTS FEEDBACK</h2>

      <p className="text-xl leading-relaxed">
        “From concept to deployment, the experience was exceptional. The team understood our needs, delivered powerful technology, and exceeded expectations.”
      </p>

      {/* <p className="text-gray-500 text-sm max-w-xl mx-auto mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
      </p> */}

      <div className="mt-6">
        <p className="font-semibold">David Laid</p>
        <span className="text-sm text-gray-500">Founder at Zara Shop</span>
      </div>

      <div className="flex justify-between mt-10">
        <button className="py-3 px-5 border rounded-full">{`<`}</button>
        <button className="py-3 px-5 border rounded-full">{`>`}</button>
      </div>
    </section>
  );
}
