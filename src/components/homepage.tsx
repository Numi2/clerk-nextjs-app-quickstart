/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/rVMdfhHGg7A
 */
import Link from "next/link"


export function Homepage() {
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <CrossIcon className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">eMedic</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/chat">
            Chat
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Blog  
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sign-in">
            Login         </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/signin">

          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <section className="container mx-auto px-4 md:px-6">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Velkommen til eMedic</h1>
            <p className="mx-auto max-w-2xl text-gray-500 md:text-lg dark:text-gray-400">
              Ta en del i demokratiseringen av medisinsk informasjon.
            </p>

      </div>
      
    
        </section>
   
        
      </main>
 
    </>
  )
}


function CrossIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
    </svg>
  )
}
