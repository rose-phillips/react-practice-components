import { useEffect, useState } from "react";

function MemoryGame({ images }: { images: string[] }) {
  const doubledImages = [...images, ...images];
  const [flipped, setFlipped] = useState<HTMLImageElement[]>([]);

  const handleClick = (ev: React.MouseEvent<HTMLImageElement>) => {
    const image = ev.target as HTMLImageElement;

    //check flippedOne
    if (flipped.length === 1) {
      console.log('1')
      image.classList.remove("hidden");
      setFlipped((state) => [...state, image]);
    } else if (flipped.length === 2) {
      console.log('2')
      setFlipped([])
    } else if (flipped.length === 0) {
            console.log('0')
      image.classList.remove("hidden");
      setFlipped([image]);
    } 
  };

  useEffect(() => {
      const checkMatch = () => {
      if (flipped) {
        if (flipped[0]?.src === flipped[1]?.src) {
          flipped[0]?.classList.add("matched");
          flipped[1]?.classList.add("matched");
        } else {
          setTimeout(() => {
            flipped[0]?.classList.add("hidden");
            flipped[1]?.classList.add("hidden");
          }, 1000);
        }
        setFlipped([])
      }
    };
if (flipped.length === 2) {
  checkMatch()
}
  },[flipped])

  return (
    <section className="memory-game">
      <h3>Memory Game</h3>
      <div className="cards-container">
        {doubledImages.map((image, index) => {
          return (
            <div className="image-container" key={index}>
              <img
                className="hidden"
                src={image}
                alt="flower"
                onClick={(ev) => handleClick(ev)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MemoryGame;
