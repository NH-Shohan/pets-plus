'use client';

/* 
  Newsletter Section
  - Premium subscription card with a teal gradient background
  - Integrated input and button design
  - Responsive and accessible
*/

const Newsletter = () => {
  return (
    <section className="bg-white section-padding-bottom">
      <div className="main-container">
        <div className="relative bg-primary rounded-[20px] px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24 text-center text-white shadow-2xl shadow-teal-900/10">
          <div className="relative z-10 mx-auto space-y-4">
            <div className="space-y-3">
              <h2 className="section-title--medium ">Never miss a new listing</h2>
              <p className="text-body-medium-vietnam">Be the first to know when verified breeders list new pets</p>
            </div>

            <form className="mt-8 mx-auto max-w-3xl" onSubmit={e => e.preventDefault()}>
              <div className="relative flex flex-col overflow-hidden sm:flex-row items-center p-1 pr-[5px] bg-white rounded-2xl sm:rounded-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full sm:flex-1 px-8 py-3 bg-transparent placeholder-foreground text-foreground outline-none text-body-medium-vietnam text-left!"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 h-[60px] bg-primary hover:bg-primary-light cursor-pointer text-white rounded-xl sm:rounded-full uppercase tracking-wider text-body-large-vietnam"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>

            <p className="text-body-small-vietnam pt-2 max-w-[max(32vw,340px)] mx-auto">
              We respect your privacy. Your email address will only be used to send you updates and offers. We do not
              sell or share your information with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
