import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center space-y-8 sm:py-16 py-10'>
      {/* BADGE  */}
      <p className='rounded-full px-3 text-center w-60 sm:w-80 mx-auto py-2 bg-indigo-200 font-semibold text-lg text-slate-800'>Find the latest of the week!</p>

      {/* HERO */}
      <div className='space-y-8 sm:w-2/3 px-5 sm:px-0'>
        <h3 className='font-serif text-4xl sm:text-7xl font-light text-center text-slate-800'>
          Your next favorite book is just a click away
        </h3>
        <p className='text-slate-600 text-lg text-center'>
          Sojang is a platform that helps you find the latest books of the week. We have a collection of books that you can explore and read.
        </p>
      </div>

      {/* CTA */}
      <Link
        href='/books'
        className='flex justify-center items-center space-x-2 border border-slate-900 text-slate-800 p-2 sm:w-40 w-32 text-center rounded-full hover:bg-slate-950 hover:text-white font-semibold sm:text-lg text-sm'
      >
        <span>Get Started</span>
        <MoveRight className='inline-block w-4 h-4' />
      </Link>
    </div>
  );
}
