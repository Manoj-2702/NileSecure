import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen p-4 space-y-4 text-white">
      <div className="flex flex-row w-full p-4 space-x-2 border border-white rounded-md">
        <div className="px-4 py-2 border border-white rounded-md ">
          Open Issues
        </div>
        <div className="px-4 py-2 border border-white rounded-md ">
          Issue ID: 132
        </div>
        <div className="px-4 py-2 border border-white rounded-md "></div>
      </div>
      <div className="flex flex-row space-x-4">
        <div className="w-full p-4 space-y-2 border border-white rounded-md">
          <form className="flex flex-row space-x-2">
            <input
              title="search"
              type="text"
              className="p-4 border border-white rounded-md "
            ></input>
            <button
              type="submit"
              className="p-4 border border-white rounded-md "
            >
              Search
            </button>
          </form>
          <div className="flex flex-col w-full p-4 border border-white rounded-md">
            <text>Title: Svrfsb sdfhjbhe fdve ferv erev rvervrws</text>
            <text>
              JVhjebfkbedh sdfhjbhe fdve ferv erev rvervrws sdfhjbhe fdve ferv
              erev rvervrws sdfhjbhe fdve ferv erev rvervrws
            </text>
            <text>16 June 2020</text>
          </div>
          <div className="flex flex-col w-full p-4 border border-white rounded-md">
            <text>Title: Svrfsb sdfhjbhe fdve ferv erev rvervrws</text>
            <text>
              JVhjebfkbedh sdfhjbhe fdve ferv erev rvervrws sdfhjbhe fdve ferv
              erev rvervrws sdfhjbhe fdve ferv erev rvervrws
            </text>
            <text>16 June 2020</text>
          </div>
          <div className="flex flex-col w-full p-4 border border-white rounded-md">
            <text>Title: Svrfsb sdfhjbhe fdve ferv erev rvervrws</text>
            <text>
              JVhjebfkbedh sdfhjbhe fdve ferv erev rvervrws sdfhjbhe fdve ferv
              erev rvervrws sdfhjbhe fdve ferv erev rvervrws
            </text>
            <text>16 June 2020</text>
          </div>
          <div className="flex flex-col w-full p-4 border border-white rounded-md">
            <text>Title: Svrfsb sdfhjbhe fdve ferv erev rvervrws</text>
            <text>
              JVhjebfkbedh sdfhjbhe fdve ferv erev rvervrws sdfhjbhe fdve ferv
              erev rvervrws sdfhjbhe fdve ferv erev rvervrws
            </text>
            <text>16 June 2020</text>
          </div>
          <div className="flex flex-col w-full p-4 border border-white rounded-md">
            <text>Title: Svrfsb sdfhjbhe fdve ferv erev rvervrws</text>
            <text>
              JVhjebfkbedh sdfhjbhe fdve ferv erev rvervrws sdfhjbhe fdve ferv
              erev rvervrws sdfhjbhe fdve ferv erev rvervrws
            </text>
            <text>16 June 2020</text>
          </div>
          <div className="flex flex-col w-full p-4 border border-white rounded-md">
            <text>Title: Svrfsb sdfhjbhe fdve ferv erev rvervrws</text>
            <text>
              JVhjebfkbedh sdfhjbhe fdve ferv erev rvervrws sdfhjbhe fdve ferv
              erev rvervrws sdfhjbhe fdve ferv erev rvervrws
            </text>
            <text>16 June 2020</text>
          </div>
        </div>
        <div className="flex flex-col w-1/4 p-4 border border-white rounded-md">
          <text className="text-xl font-bold">Device Details</text>
          <text className="text-xl font-bold">OS/Version: Windows 11</text>
          <text className="text-xl font-bold">Type: Laptop</text>
          <text className="text-xl font-bold">Model: Inspiron 5577</text>
          <text className="text-xl font-bold"></text>
        </div>
      </div>
    </main>
  );
}
