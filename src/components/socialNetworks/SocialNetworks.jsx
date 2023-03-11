import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function SocialNetworks() {
  return (
    <div className="grid grid-cols-12 my-4">
      <div className="col-start-10 ">
        <a target="_blank" href="https://github.com/" className=" flex justify-center items-center ">
          <BsGithub className="text-5xl"/>
        </a>
      </div>
      <div className="">
        <a target="_blank" href="https://www.linkedin.com/in/mariano-langge-46503b235/" className="	flex justify-center items-center">
          <BsLinkedin className="text-5xl" />
        </a>
      </div>
    </div>
  );
}
