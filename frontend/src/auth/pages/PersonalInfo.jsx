import SVG from "../../assets/devchallenges.svg";

export const PersonalInfo = () => {
  return (
    <div>
      <nav className="flex justify-between p-5">
        <div>
          <img src={SVG} alt="devchallenges" />
        </div>
        <span>Alirio Mieres</span>
      </nav>
      <div className="mb-6">
        <h1 className="text-center text-4xl">Personal info</h1>
        <h2 className="text-center text-xl">
          Basic info, like your name and photo
        </h2>
      </div>

      <div className="border-2 max-w-[700px] m-auto p-2">
        <div>
        <div className="flex justify-between items-center  rounded-md ">
          <div className="py-10">
            <h3 className="text-3xl">Profile</h3>
            <span>Some info may be visible to other people</span>
          </div>

          <button className="cursor-pointer text-gray-500 border-2 px-4 py-2 rounded">Edit</button>
        </div>
      </div>
      <div className="flex items-center justify-between  -2 rounded-md" >
        <p>NAME</p>
        <p>Alirio Mieres</p>
      </div>
      <div>
        <span>BIO</span>
        <p>Alirio Mieres</p>
      </div>
      <div>
        <span>PHONE</span>
      </div>
      <div>
        <span>EMAIL</span>
      </div>
      <div>
        <span>PASSWORD</span>
      </div>
      </div>

    </div>
  );
};
