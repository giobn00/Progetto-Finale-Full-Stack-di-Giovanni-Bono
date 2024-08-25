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
          <span className="text-orange-500 px-2">Inserisci</span> un codice
          <br />
          o 
          <br />
          <span className="text-green-500 px-2">cerca</span>un prodotto
        </h1>
        <div className="flex flex-row max-w-80 shadow-md rounded-3xl">
          <Input
              type="text"
              placeholder="Search..."
              name="search"
              ref={serchRef}
          />
          <Button type="submit" onClick={search} >Search</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
