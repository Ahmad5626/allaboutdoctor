 <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-6  lg:p-4  ">

          {/* POPUP BOX */}
          <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden relative animate-fadeIn">
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-3 bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl z-50"
            >
              ×
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* LEFT SIDE EXACT AS YOUR DESIGN */}
              <div className="p-2 md:p-8 flex lg:flex-col justify-between bg-[#eaf6ff]">

                {/* Bullet Points */}
                <div className="space-y-4 text-[#003b99] font-semibold text-[8px] md:text-sm">
                  <p className="flex items-start gap-2">
                    <span className="text-[#0057ff] text-sm">✔</span> Expert Guidance for MBBS Admissions
                  </p>
                  <p className="flex items-start gap-2 ml-6">
                    <span className="text-[#0057ff] text-sm">✔</span> University Selection Based on Budget & NEET Score
                  </p>
                  <p className="flex items-start gap-2 ml-10">
                    <span className="text-[#0057ff] text-sm">✔</span> Complete Support: Documentation, Visa & Hostel
                  </p>
                  <p className="flex items-start gap-2 ml-16">
                    <span className="text-[#0057ff] text-sm">✔</span> Personal Counselling & Student Assistance
                  </p>
                </div>

                {/* Doctor Images */}
                <div className=" mt-8 flex  justify-center">
                  <img
                    src="/assets/img/man-1.png"
                    className="w-10 lg:w-54 object-cover z-10"
                  />
                  <img
                    src="/assets/img/girl-1.png"
                    className="w-10 lg:w-44 object-cover  bottom-0"
                  />
                </div>
              </div>

              {/* RIGHT SIDE EXACT AS YOUR DESIGN */}
              <div className="p-2 md:p-8">
                <h2 className="text-[16px] md:text-[26px] font-bold text-[#f68b1e] leading-tight text-center">
                  START YOUR MBBS <br /> JOURNEY WITH CONFIDENCE
                </h2>

                <p className="mt-3 text-[#003b99] font-semibold text-[12px] border-b pb-2 text-center">
                  SECURE ADMISSION IN TOP MEDICAL UNIVERSITIES IN INDIA & ABROAD
                </p>

                {/* Icons Row */}
                <p className="text-center mt-4 text-[12px] font-semibold text-[#003b99]">
                  With All About Doctor Global Medical Admission Program
                </p>

                <div className="mt-3 grid grid-cols-4 gap-3 text-center text-[9px] font-semibold text-[#003b99]">
                  <div>
                    <img src="/assets/img/popup-icon-1.png" className="w-6 md:w-8 mx-auto" />
                    15,000+ <br /> STUDENTS GUIDED
                  </div>
                  <div>
                    <img src="/assets/img/popup-icon-2.png" className="w-6 md:w-8 mx-auto" />
                    TRUSTED SINCE <br /> 2015
                  </div>
                  <div>
                    <img src="/assets/img/popup-icon-3.png" className="w-6 md:w-8 mx-auto" />
                    OFFICIAL TIE-UPS <br /> TOP UNIVERSITIES
                  </div>
                  <div>
                    <img src="/assets/img/popup-icon-4.png" className="w-6 md:w-8 mx-auto" />
                    DEDICATED <br /> COUNSELLOR SUPPORT
                  </div>
                </div>

                {/* Form */}
                <div className="mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-primary py-2 px-3 rounded-md text-[#003b99] font-semibold"
                  />
                  <input
                    type="text"
                    placeholder="Mobile"
                    className="w-full border border-primary py-2 px-3 rounded-md text-[#003b99] "
                  />
                </div>

                {/* Checkbox */}
                <div className="mt-4 flex gap-3">
                  <div className="bg-[#f68b1e] w-6 h-6 rounded flex items-center justify-center text-white font-bold">✔</div>
                  <p className="text-[13px] text-[#003b99]">
                    I agree to be contacted by All About Doctor Education through call, WhatsApp, and SMS for admission guidance.
                  </p>
                </div>

                {/* Button */}
                <button className="mt-6 w-full bg-[#f68b1e] hover:bg-[#e27a17] text-white font-bold py-3 rounded-xl text-lg">
                  GET FREE COUNSELLING →
                </button>
              </div>

            </div>
          </div>
        </div>