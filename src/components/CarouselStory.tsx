"use client";

import React from 'react';
import Image from 'next/image';

// Components
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const CarouselStory = ({ slides }: { slides: { img: string; text: string }[] }) => {
  return (
    <Carousel className="w-full max-w-xl mx-auto" opts={{ loop: false }}>
      <CarouselContent>
        {slides.map((s, idx) => (
          <CarouselItem key={idx} className="flex justify-center items-center">
            <Card className="w-full max-w-md mx-auto shadow-lg">
              <div className="relative w-full h-[500px]">
                <Image
                  src={s.img}
                  alt={`Slide ${idx + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-md"
                />
              </div>
              <CardContent className="p-4 text-center text-lg font-light bg-white rounded-b-md">
                {s.text}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer" />
      <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" />
    </Carousel>
  );
};

export default CarouselStory;


































// "use client";

// import React from 'react';
// import Image from 'next/image';

// // Components
// import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card";


// const CarouselStory= ({ slides }: { slides: { img: string; text: string }[] }) => {
//   return (
//     <Carousel className='w-full max-w-lg mx-auto' opts={{ loop: false }}>
//         <CarouselContent>
//             {slides.map((s, idx) => (
//                 <CarouselItem key={idx} className='flex justify-center items-center'>
//                     <Card>
//                         <Image 
//                             src={s.img}
//                             width={300}
//                             height={200}
//                             alt='Fotos'
//                         />
//                         <CardContent className='p-4 text-center'>{s.text}</CardContent>
//                     </Card>
//                 </CarouselItem>
//             ))}
//         </CarouselContent>
//         <CarouselPrevious className='absolute left-2 top-1/2'/>
//         <CarouselNext className='absolute right-2 top-1/2 cursor-pointer'/>
//     </Carousel>
//   )
// }

// export default CarouselStory