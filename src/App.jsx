import { avatar, illustration } from "./assets"
function App() {

  return (
    <>
      <div className="relative bg-Yellow w-full h-[100vh] flex items-center justify-center">

        <div className="w-4/5 md:w-[350px] bg-White flex flex-col gap-6 p-[15px] rounded-[20px] border border-[#000]" style={{ boxShadow: "8px 8px hsl(0, 0%, 7%)" }}>

          <img src={illustration} alt="illustration" className="w-full rounded-[10px]" loading="lazy" />

          <div className="font-Figtree flex flex-col">
            <span className="bg-Yellow text-Black w-fit px-4 py-1 rounded-md font-bold text-base">Learning</span>
            <p className="text-Black text-base mt-2">Published 21 Dec 2023</p>
            <h1 className="text-Black font-extrabold text-2xl my-2 cursor-pointer hover:text-Yellow">HTML & CSS foundations</h1>
            <p className="text-Grey text-sm">These languages are the backbone of every website, defining structure, content, and presentation.</p>
          </div>

          <div className="flex flex-row items-center gap-2">
            <img src={avatar} alt="avatar" loading="lazy" className="w-10" />
            <p className="font-bold text-base">Greg Hooper</p>
          </div>
        </div>
      </div>

      <div className="attribution text-[11px] text-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-[hsl(228,45%,44%)]">Frontend Mentor</a>.
        Coded by <a href="https://devemma.netlify.app" target="_blank" className="text-[hsl(228,45%,44%)]">Emmanuel Tofunmi</a>.
      </div>
    </>
  )
}

export default App
