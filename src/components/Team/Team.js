import React from "react";

//icons
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

//Const
import Images from "../../conatants/Images";

function Team() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-5">Meet the team</h1>

      <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <div className="flex gap-4">
              {" "}
              <BsFacebook size={30} />
              <BsTwitter size={30} />
            </div>
            <p class="my-4 font-light">Social Handles</p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img
              class="rounded-full w-9 h-9"
              src={Images.Ceo}
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Haja</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Co-founder, Sustainability <br /> and recycling
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <div className="flex gap-4">
              {" "}
              <BsFacebook size={30} />
              <BsTwitter size={30} />
            </div>
            <p class="my-4 font-light">Social Handles</p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img
              class="rounded-full w-9 h-9"
              src={Images.Osman}
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Osman Yaah</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Co-founder/project manager.
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <div className="flex gap-4">
              {" "}
              <BsFacebook size={30} />
              <BsTwitter size={30} />
            </div>
            <p class="my-4 font-light">Social Handles</p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Abdul Razackbarbah</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Taylor/ production expert
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <div className="flex gap-4">
              {" "}
              <BsFacebook size={30} />
              <BsTwitter size={30} />
            </div>
            <p class="my-4 font-light">Social Handles</p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img
              class="rounded-full w-9 h-9"
              src={Images.Francis}
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Mr Francis Stevens George.</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Advisor
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Team;
