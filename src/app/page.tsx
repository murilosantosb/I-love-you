
// Components
import CarouselStory from "@/components/CarouselStory";

// data
import data from "@/data/data.json"

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
        <h1 className="text-4xl text-center mb-8">Nossa História</h1>
        <CarouselStory slides={data}/>
    </main>
  );
}
