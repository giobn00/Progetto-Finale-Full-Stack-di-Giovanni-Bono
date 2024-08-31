import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input';
import { useRef } from 'react';
import { useRouter } from "next/router";
import { Wrapper } from "@/components/Layout";

const Hero = () => {
  const serchRef = useRef();
  const router = useRouter();
  
  const search = () => { 
    router.push(`/food/${serchRef.current.value}`);
  }
    
  return (
    <Wrapper>
      <div className='flex flex-col place-items-center '>
        <h1 className="grow m-0 pb-10 text-center text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl  dark:text-white font-black leading-10">
          <span className="text-orange-500 px-2">Inserisci</span> 
          il codice di un 
          <span className="text-green-500 px-2">prodotto</span>
        </h1>
        <div className="flex flex-row max-w-80 shadow-md rounded-3xl text-black">
          <Input
              type="text"
              placeholder="Search..."
              name="search"
              ref={serchRef}
              className="rounded-l-3xl rounded-r-none"
          />

          <Button 
            type="submit" 
            onClick={search} 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-r-3xl rounded-l-none"
            >
              Search
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
