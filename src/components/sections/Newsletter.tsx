"use client";
/* 
  Newsletter Section
  - Premium subscription card with a teal gradient background
  - Integrated input and button design
  - Responsive and accessible
*/

const Newsletter = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 font-jakarta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary rounded-4xl px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24 text-center text-white shadow-2xl shadow-teal-900/10">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-[40px] font-bold leading-tight">
                Never miss a new listing
              </h2>
              <p className="text-lg font-light opacity-90">
                Be the first to know when verified breeders list new pets
              </p>
            </div>

            <form
              className="mt-8 max-w-xl mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex flex-col sm:flex-row items-center p-1 bg-white rounded-2xl sm:rounded-full shadow-lg">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full sm:flex-1 px-8 py-4 bg-transparent text-gray-800 placeholder-gray-400 outline-none font-normal text-base"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-xl sm:rounded-full uppercase tracking-wider text-sm transition-transform active:scale-95"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>

            <p className="text-sm font-light opacity-80 pt-2 leading-relaxed max-w-lg mx-auto">
              We respect your privacy. Your email address will only be used to
              send you updates and offers. We do not sell or share your
              information with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
