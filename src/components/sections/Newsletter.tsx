'use client';

const Newsletter = () => {
  return (
    <section className="bg-white section-padding-bottom">
      <div className="main-container">
        <div className="relative bg-primary rounded-[max(20px,1.0416666667vw)] px-[max(20px,3.125vw)] py-[max(60px,3.125vw)] text-center text-white shadow-2xl shadow-teal-900/10">
          <div className="relative z-10 mx-auto space-y-[max(16px,0.8333333333vw)]">
            <div className="space-y-[max(12px,0.625vw)]">
              <h2 className="section-title--medium text-[max(30px,2.0833333333vw)] font-bold">
                Never miss a new listing
              </h2>
              <p className="text-body-medium-vietnam">Be the first to know when verified breeders list new pets</p>
            </div>

            <form
              className="py-[max(19px,0.9895833333vw)] mx-auto max-w-[max(296px,32.5vw)]"
              onSubmit={e => e.preventDefault()}
            >
              <div className="relative flex  overflow-hidden flex-row items-center bg-white rounded-full pr-[max(4px,0.2083333333vw)]">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-[max(44px,3.4895833333vw)] pl-[max(20px,2.0833333333vw)] sm:flex-1 bg-transparent placeholder-foreground text-foreground outline-none text-body-medium-vietnam text-left! text-body-medium"
                  required
                />
                <button
                  type="submit"
                  className="w-full lg:max-w-full sm:w-auto px-[max(20px,2.0833333333vw)] py-[max(8px,0.4166666667vw)] h-[max(38px,3.125vw)] bg-primary hover:bg-primary-light cursor-pointer text-white rounded-full uppercase tracking-wider font-black text-[max(12px,1vw)]"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>

            <p className="text-body-small-vietnam max-w-[max(340px,32vw)] mx-auto">
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
