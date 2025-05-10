import AtomicHabits from "~/assets/atomic-habits.jpg";
import DeepWork from "~/assets/deep-work.jpg";
import DesigningYourLife from "~/assets/designing-your-life.jpg";
import Hyperfocus from "~/assets/hyper-focus.jpg";
import NeverSplitTheDifference from "~/assets/never-split-the-difference.jpg";
import Principles from "~/assets/principles.jpg";
import SoGoodTheyCantIgnoreYou from "~/assets/so-good-they-cant-ignore-you.jpg";
import StartWithWhy from "~/assets/start-with-why.jpg";
import TheOneThing from "~/assets/the-one-thing.jpg";
import ThePsychologyOfMoney from "~/assets/the-psychology-of-money.jpg";
import TheSubtleArtOfNotGivingAFuck from "~/assets/the-subtle-art-of-not-giving-a-fk.jpg";
import The7HabitsOfHighlyEffectivePeople from "~/assets/7-habits-of-highly-effective-people.jpg";

export interface Book {
    id: string;
    title: string;
    author: string;
    category: BookCategory;
    description: string;
    relevance: string;
    coverImage?: string;
  }
  
  export type BookCategory = 
    | "Technical" 
    | "Productivity" 
    | "Problem Solving" 
    | "Career Development" 
    | "Communication" 
    | "Leadership";
  
  export const technicalBooks: Book[] = [
    {
      id: "1",
      title: "Deep Work",
      author: "Cal Newport",
      category: "Productivity",
      description: "This book explores the concept of focused, distraction-free work as a superpower in today's economy. Newport argues that developing your ability to focus intensely on cognitively demanding tasks creates massive value and improves your skill.",
      relevance: "Essential for developers who need to maintain focus during complex problem-solving and coding sessions. The concepts directly apply to increasing coding productivity and quality.",
      coverImage: DeepWork,
    },
    {
      id: "2",
      title: "So Good They Can't Ignore You",
      author: "Cal Newport",
      category: "Career Development",
      description: "Newport debunks the passion hypothesis and instead advocates for the craftsman mindset—focusing on building rare and valuable skills through deliberate practice rather than following passion.",
      relevance: "Perfect for developers looking to build a career strategy based on skill development rather than just passion. Aligns with the continuous learning required in software development.",
      coverImage: SoGoodTheyCantIgnoreYou,
    },
    {
      id: "3",
      title: "Atomic Habits",
      author: "James Clear",
      category: "Productivity",
      description: "A comprehensive guide on how to build good habits and break bad ones. Clear explains how tiny changes can yield remarkable results through the power of compound growth.",
      relevance: "Helps developers establish consistent coding practices, learning routines, and productivity systems that compound over time.",
      coverImage: AtomicHabits,
    },
    {
      id: "4",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      category: "Problem Solving",
      description: "Through 19 short stories, Housel explores how people think about money and how their personal experiences with money shape their behavior more than what they learn about it in formal education.",
      relevance: "Provides valuable insights into decision-making under uncertainty—a critical skill for developers working with complex systems and project planning.",
      coverImage: ThePsychologyOfMoney,
    },
    {
      id: "5",
      title: "Designing Your Life",
      author: "Bill Burnett & Dave Evans",
      category: "Career Development",
      description: "Using design thinking principles, the authors provide a framework for building a joyful and fulfilling life and career through prototyping and iteration.",
      relevance: "Applies design thinking (similar to software development methodologies) to career planning, helping developers chart their professional growth.",
      coverImage: DesigningYourLife,
    },
    {
      id: "6",
      title: "Never Split the Difference",
      author: "Chris Voss",
      category: "Communication",
      description: "Former FBI hostage negotiator Chris Voss shares his field-tested techniques for high-stakes negotiations, revealing counterintuitive tactics that work in real-world situations.",
      relevance: "Provides practical negotiation strategies that developers can use when discussing requirements, deadlines, and technical trade-offs with stakeholders.",
      coverImage: NeverSplitTheDifference,
    },
    {
      id: "7",
      title: "Start with Why",
      author: "Simon Sinek",
      category: "Leadership",
      description: "Sinek explores how great leaders inspire action by communicating the purpose behind what they do rather than just explaining what they do or how they do it.",
      relevance: "Essential reading for developers who want to create meaningful products and lead teams by focusing on purpose and vision.",
      coverImage: StartWithWhy,
    },
    {
      id: "8",
      title: "The One Thing",
      author: "Gary Keller & Jay Papasan",
      category: "Productivity",
      description: "This book teaches how to cut through clutter and noise by focusing on the one most important task that will drive the greatest results in any area of life.",
      relevance: "Helps developers prioritize effectively in an industry filled with constant distractions and shifting priorities.",
      coverImage: TheOneThing,
    },
    {
      id: "9",
      title: "Principles",
      author: "Ray Dalio",
      category: "Problem Solving",
      description: "Hedge fund manager Ray Dalio shares the unconventional principles that helped him create unique results in life and business through radical transparency and algorithmic decision-making.",
      relevance: "Introduces systematic approaches to decision-making and problem-solving that complement a developer's analytical mindset.",
      coverImage: Principles,
    },
    {
      id: "10",
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      category: "Leadership",
      description: "Covey's classic presents a holistic, principle-centered approach for solving personal and professional problems by aligning with natural laws of human effectiveness.",
      relevance: "Offers fundamental principles for effectiveness that apply to both personal development and team leadership in software development contexts.",
      coverImage: The7HabitsOfHighlyEffectivePeople,
    },
    {
      id: "11",
      title: "Hyperfocus",
      author: "Chris Bailey",
      category: "Productivity",
      description: "Bailey explores the science of attention and provides practical strategies for managing focus in a distracted world, as well as how to harness the power of scattered attention.",
      relevance: "Particularly valuable for developers who need to maintain concentration during complex coding tasks while juggling multiple responsibilities.",
      coverImage: Hyperfocus,
    },
    {
      id: "12",
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      category: "Career Development",
      description: "Manson challenges conventional wisdom about positivity and argues that improving our lives hinges on our ability to set better boundaries and care about the right things.",
      relevance: "Helps developers maintain perspective and resilience in a high-pressure industry prone to burnout and imposter syndrome.",
      coverImage: TheSubtleArtOfNotGivingAFuck,
    }
  ];