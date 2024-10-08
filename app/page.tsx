import Image from "next/image";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { InputAdornment, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export default async function Home() {
  const res = await fetch("https://restaurant-api.dicoding.dev/list");
  const data = await res.json();
  console.log(data);
  return (
    <main className="flex h-screen relative flex-col items-center justify-center w-100 ">
      <div className="bg-[url('/image/bg-image.jpg')] w-full bg-cover bg-no-repeat  flex-col text-white justify-center items-center flex h-[100vh] flex-1 p-24">
        {/* <div className="absolute bg-black opacity-40 w-100 max-w-[800px] max-h-[400px] rounded-lg"></div> */}
        <div className=" w-full p-20 rounded-xl shadow-2xl bg-transparent shadow-gray-700">
          <div className="z-30 flex flex-col items-center gap-20 p-20">
            <h1 className="text-6xl font-bold">Title</h1>
            <h2 className="text-4xl font-lighter">Lorem ipsum dolor sit amet consectetur,</h2>
            <div className="flex gap-4 flex-col items-center">
              <h3>Explore</h3>
              <TextField
                id="input-with-icon-textfield"
                label="TextField"
                sx={{ color: "white" }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  },
                }}
                variant="standard"
              />
              <button className="relative w-80 px-4 py-2 border bg-transparent border-gray-100 rounded-lg text-white-500 hover:bg-white hover:text-gray-600 transition-all duration-300">
                Discover
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
