import React, { useState } from "react";

export default function JoinForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);

  const emailValidation = (e) => {
    let pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{1,5})(\.[a-z]{1,5})?$/;
    let emailValue = e.target.value;
    setEmail(emailValue);

    if (email.match(pattern)) {
      setMessage(true);
    } else {
      setMessage(false);
    }
  };

  return (
    <div className="w-[96%] mx-auto flex md:flex-col justify-center items-center pt-5">
      <div className="inoa w-[30%] xl:w-[45%] lg:w-[48%] md:w-[92%] md:mx-auto relative">

      <input
        type="text"
        id="email"
        placeholder="your email"
        autoComplete="off"
        onChange={emailValidation}
        value={email}
        required
        className={`w-full
        rounded-[6px] py-3 lg:py-3 px-5 text-xl font-[500] text-dark-blue 
        outline-none border-4  ${
          email.length == 0
            ? "border-white"
            : message
            ? "border-[#10b981]"
            : "border-soft-red"
        } `}
      />
      <i
        className={`absolute -right-1 top-5 md:right-8 md:top-14 w-10 h-5 ${
          email.length == 0 ? "hidden" : message ? "hidden" : "block"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <g fill="none" fillRule="evenodd">
            <circle cx="10" cy="10" r="10" fill="#FA5959" />
            <g fill="#FFF" transform="translate(9 5)">
              <rect width="2" height="7" rx="1" />
              <rect width="2" height="2" y="8" rx="1" />
            </g>
          </g>
        </svg>
      </i>
      <p
        className={`text-sm w-full ${
          email.length == 0
            ? "hidden"
            : message
            ? "block bg-[#10b981]"
            : "block bg-soft-red"
        }
       text-white italic p-2 rounded-b-lg tracking-[1px]
         absolute top-14 left-0`}
      >
        {email.length == 0
          ? ""
          : message
          ? "valid email"
          : "Whoops make sure it's an email."}
      </p>
      </div>
      <button
        type="submit"
        className={`w-[164px] md:w-[92.1%] h-[7.2vh] 3xl:h-[6vh] md:h-[8vh] md:ml-0 bg-soft-red text-white font-[500] hover:font-semibold
                   ml-3 py-4 px-4 uppercase rounded-[4px] tracking-[2px] text-center duration-500
                   hover:bg-white hover:text-soft-red hover:border-[5px] hover:border-soft-red
                    ${email.length == 0 ? "md:mt-4" : "md:mt-11"}`}
      >
        Contact Us
      </button>
    </div>
  );
}
