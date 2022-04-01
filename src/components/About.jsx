export default function BlockChainAnimate() {
  return (
    <div id="about" className="relative bg-black">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="/graphics/grafismo-01.png"
          alt=""
        />
        <div
          className="absolute inset-0 bg-primary mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl flex flex-col items-center mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          About us
        </h1>
        <div className="mt-6 text-white prose-lg prose-xl prose-white max-w-3xl bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 p-8 rounded-md">
          <p>
            Hack-a-Chain was created in 2022, by 2 brazilian entrepreneurs that
            noticed a lack of professionals to help entrepreneurs developing
            high-quality projects for Web 3.0.
          </p>
          <ul className="list-disc">
            <li>
              They decided to create a software development company comitted to
              create long time value projects along with visionary
              entrepreneurs.
            </li>

            <li>
              Hack-a-Chain values security and quality above everything else.
            </li>

            <li>
              Hack-a-Chain has the purpose to build the future, one block at a
              time.
            </li>
          </ul>

          <p>
            We know that there are a lot of speculation around crypto and a lot
            of people that think it has no future. But the truth is that it has
            come to change the world, and good projects will survive the long
            run. That's where we want to be positioned.{" "}
          </p>

          <p>
            We aim to build long term partnerships, construct high-quality
            projects and we do believe in the projects we are working on. Let's
            go together?
          </p>
        </div>
      </div>
    </div>
  );
}
