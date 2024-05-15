import React from "react";

const Home = () => {
  return (
    <>
      <div
        className="flex justify-center items-center w-full h-screen bg-[url('https://wallpapers/images/high/chinese-food-pictures-283a542wre04dt2j.webp')] bg-cover bg-fixed bg-no-repeat"
        id="home"
      >
        <h1 className=" text-6xl">Italian Specialities</h1>
      </div>
      <div className=" min-h-screen w-full " id="about">
        <h1 className=" text-center text-3xl py-5">About</h1>
        <div className="flex flex-wrap px-40 py-20">
          <div className=" md:w-[50%] w-full">
            <img src="https://wallpapers.com/images/high/chinese-food-pictures-283a542wre04dt2j.webp" alt="" className="md:w-96  md:h-96 " />
          </div>
          <div className=" md:w-[50%] w-full">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              error accusamus veniam deserunt reiciendis magnam molestias
              dignissimos vero possimus? Nam doloremque voluptatum pariatur id
              suscipit molestiae, distinctio, nesciunt ad est quod autem,
              repellat reprehenderit accusamus dolorem totam eum aperiam atque
              fuga repudiandae quisquam provident quae! Quaerat similique esse
              accusantium, maiores omnis eligendi aliquam sapiente ex culpa
              repudiandae. Deserunt doloribus cum commodi iusto neque cumque
              omnis ullam veritatis quisquam labore eum quis modi obcaecati
              sapiente, perferendis beatae facere iure earum tempora voluptas.
              Ea expedita deserunt consequatur tempore doloremque excepturi.
              Optio laudantium alias, error earum velit totam. Optio odit quia
              porro aspernatur!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-[url('/special.jpg')] bg-cover bg-no-repeat bg-fixed flex justify-center items-center">
        <h1 className=" text-8xl ">Our Special</h1>
      </div>
    </>
  );
};

export default Home;
