import "./App.css";
import { motion } from "framer-motion";
import { BiComment, BiLike, BiSolidLike } from "react-icons/bi";
import { PiShareFatBold } from "react-icons/pi";
import { useState } from "react";

function App() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div
      className={
        "w-screen h-screen text-white flex justify-center items-center text-center bg-black"
      }
    >
      <div
        className={
          "bg-gradient-to-tl from-[#0FEFFD] to-[#FF00F5] w-[18rem] flex justify-center items-center px-[1px]  py-[2px]"
        }
      >
        <div className={"w-[18rem] bg-black  px-2 py-6"}>
          <div className={"flex items-center mb-7 justify-between"}>
            <div className={"bg-white rounded-full h-10  "}>
              <img
                src="https://i.ibb.co/bdFJTJK/daily-male-avatar-1.png"
                alt="male image"
                className={"w-10 h-10"}
              />
            </div>
            <h2 className={"-ml-4"}>Shihab</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              className={"ml-20 "}
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
          </div>
          <p className={"mb-4 w-full text-left ml-4"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <img src="https://i.ibb.co/KFx0CVg/img.png" alt="" />
          <div className={"flex justify-between items-center mt-4"}>
            <div
              className={"flex items-center  gap-1 cursor-pointer "}
              onClick={() => setLike(!like)}
            >
              {like ? (
                <BiSolidLike className={"h-6 w-6"}></BiSolidLike>
              ) : (
                <BiLike className={"h-6 w-6"}></BiLike>
              )}

              <p>
                Like{" "}
                {like ? (
                  <span>{count + 1}</span>
                ) : (
                  <span className={"hidden"}>{count - 1}</span>
                )}{" "}
              </p>
            </div>
            <div className={"flex items-center gap-1 "}>
              <BiComment className={"h-6 w-6"}></BiComment>
              <p>Comment</p>
            </div>
            <div className={"flex items-center  gap-1"}>
              <PiShareFatBold className={"h-6 w-6 "}></PiShareFatBold>
              <p>Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
