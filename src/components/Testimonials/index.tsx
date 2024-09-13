import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "TESTE",
    name: "TESTE",
    title: "TESTE",
  },
  {
    quote: "TESTE",
    name: "TESTE",
    title: "TESTE",
  },
  {
    quote: "TESTE",
    name: "TESTE",
    title: "TESTE",
  },
  {
    quote: "TESTE",
    name: "TESTE",
    title: "TESTE",
  },
  {
    quote: "TESTE",
    name: "TESTE",
    title: "TESTE",
  }
];

export default InfiniteMovingCardsDemo