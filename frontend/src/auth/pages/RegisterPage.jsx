// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
import SVG from "../../assets/devchallenges.svg";
import facebook from "../../assets/Facebook.svg";
import google from "../../assets/Google.svg";
import twitter from "../../assets/Twitter.svg";
import github from "../../assets/Github.svg";
import { useRef } from "react";
import { createUser } from "../../api/usuarios-service";

export const RegisterPage = () => {
  const email = useRef("");
  const password = useRef("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: email.current.value,
      password: password.current.value,
      // habilitado: true,
      // id_persona: 1,
      // id_rol: 1,
    };
    console.log(user);

    await createUser(user);

    navigate("/usuarios", {
      replace: true,
    });
  };

  return (
    <div className="h-screen flex items-center justify-center m-auto">
      <div className="px-10 border-2 rounded-md text-xl w-[600px] h-[650px] flex flex-col justify-center gap-3">
        <div>
          <img src={SVG} alt="devchallenges" />
        </div>
        <h1 className="font-bold mb-3 text-4xl">
          Join thousands of learners from around the world
        </h1>
        <p>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
        <form onSubmit={onSubmit}>
          <div>
            <input
              className="p-2 border-2 rounded-md w-full mb-5"
              type="text"
              placeholder="Email"
              ref={email}
            />
          </div>

          <div>
            <input
              className="p-2 border-2 rounded-md w-full mb-5"
              type="password"
              placeholder="Password"
              ref={password}
            />
          </div>
          <button className="bg-blue-500 text-white w-full p-2 rounded mb-2">
            Start coding now
          </button>
        </form>
        <span className="align-middle text-center w-full text-gray-600">
          or continue with these social profile
        </span>
        <div className="flex items-center justify-center gap-x-8">
          <div className="cursor-pointer">
            <img src={google} alt="google_logo" />
          </div>
          <div className="cursor-pointer">
            <img src={facebook} alt="facebook_logo" />
          </div>
          <div className="cursor-pointer">
            <img src={twitter} alt="twitter_logo" />
          </div>
          <div className="cursor-pointer">
            <img src={github} alt="github_logo" />
          </div>
        </div>
        <span className="text-center">
          Adready a member?{" "}
          <a href="" className="text-blue-400">
            Login
          </a>
        </span>
      </div>
    </div>
  );
};
