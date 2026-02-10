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
              <h2 className="sm:section-title--medium text-[30px] font-bold">Never miss a new listing</h2>
              <p className="text-body-medium-vietnam">Be the first to know when verified breeders list new pets</p>
            </div>

            <form className="mt-8 mx-auto max-w-[max(624px,32vw)]" onSubmit={e => e.preventDefault()}>
              <div className="relative flex  overflow-hidden flex-row items-center p-1 pr-[5px] bg-white rounded-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full sm:flex-1 px-3 pl-[20px] md:px-12 py-1 bg-transparent placeholder-foreground text-foreground outline-none text-body-medium-vietnam text-left! placeholder:text-sm sm:placeholder:text-lg"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:max-w-full max-w-[114px] sm:w-auto sm:px-10 sm:h-[66px] h-[38px] bg-primary hover:bg-primary-light cursor-pointer text-white rounded-full uppercase tracking-wider font-black text-[max(12px,1vw)]"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>

            <p className="text-body-small-vietnam pt-2 max-w-[max(340px,32vw)] mx-auto">
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
