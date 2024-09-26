import Card from "@/components/card";
import data from "@/data/data.json"

export default function Home() {
  return (
    <main className="w-screen h-screen  bg-primary text-white">
      <div className="container mx-auto flex items-center justify-center h-full flex-col">
        <div className="flex items-center justify-center flex-col gap-[3px]">
          <div className="bg-[rgba(219,161,77,0.1)] border border-[#DBA14D] rounded-full font-semibold font-poppins text-[#F8F3F0CC] px-8 py-2 text-center inline-block">
            ONZE STOPPERS
          </div>

            <h1 className="font-recoleta  text-[#F8F3F0] text-[2.5rem] font-semibold">
              Ervaringen van Ex-Rokers
            </h1>

        </div>
        <div className="flex flex-row items-center gap-[3rem] w-screen">
          {data.map((profile, index) => (
            <Card key={index} {...profile} />
          ))}
        </div>
      </div>
    </main>
  );
}
