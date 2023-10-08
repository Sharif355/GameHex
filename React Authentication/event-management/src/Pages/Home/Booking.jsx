import Swal from "sweetalert2";

const Booking = () => {
  const handleBooking = () => {
    Swal.fire({
      title: "Booking Confirmed",
      text: "We will contact you soon",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  return (
    <div>
      <div className="bg-[#FFFFFF] w-full">
        <div className="">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleBooking} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Institution/Company Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Event Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text font-medium">From</span>
                  </label>
                  <input
                    type="text"
                    className="border w-full rounded-lg p-2 "
                    required
                    placeholder="04/09"
                  />

                  <label className="label">
                    <span className="label-text font-medium">To</span>
                  </label>
                  <input
                    type="text"
                    className="border rounded-lg w-full p-2  "
                    required
                    placeholder="08/09"
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white normal-case">
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
