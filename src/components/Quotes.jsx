import { useEffect, useState } from "react";

const Quotes = () => {
  let [quoteIndex, setQuoteIndex] = useState(0);
  const quotes = [
    "Cooking is more than a skill, it's an art. Let our app be your palette of flavors.",
    "In every recipe, discover a story. Our app brings those stories to your kitchen.",
    "Where passion for food meets the precision of recipes – welcome to a tasteful revolution.",
    "Cooking is love made edible. Embrace the love affair with our curated recipes.",
    "Spice up your culinary routine with a dash of inspiration from Recipe App.",
    "Turn your kitchen into a stage, and let our recipes be your masterpiece.",
    "Flavors that dance, textures that sing – our app orchestrates a symphony for your senses.",
    "Cooking is the poetry of the palate. Let our recipes be your verses.",
    "Unleash your inner chef with recipes that inspire, ingredients that delight, and flavors that enchant.",
    "From comforting classics to bold culinary adventures – discover the artistry of home cooking with Recipe App.",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQuoteIndex((quoteIndex) => (quoteIndex + 1) % quotes.length);
      document.querySelector(".quote").classList.add("scale-up-center");
      setTimeout(() => {
        document.querySelector(".quote").classList.remove("scale-up-center");
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container quotes">
      <p className="quote">{quotes[quoteIndex]}</p>
    </div>
  );
};

export default Quotes;
