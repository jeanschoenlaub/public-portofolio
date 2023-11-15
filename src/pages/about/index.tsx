import Link from "next/link";

export default function Home() {

  return (
    <>
      <main className="flex min-h-screen flex-col  bg-custom-beige p-4">
        <div className="container mx-auto px-8" style={{ maxWidth: '210mm' }}> {/* A4 paper width */}
          <nav className="flex justify-end space-x-6 mb-4 text-xl font-montserrat"> {/* Larger text and Montserrat font */}
            <Link href={"/"} className="underline-custom-mint-green ">Home</Link>
            <Link href={"/"} className="underline-custom-mint-green">Projects</Link>
            <Link href={"/"} className="underline-custom-mint-green">Blog</Link>
            <Link href={"/about/"} className="underline-custom-mint-green font-semibold">About</Link>
          </nav>


          <div className="flex mt-12">
            <img src="/profile_image.jpeg" alt="Jean's Profile" className="rounded-full w-32 h-32 mr-12" />
            <div className="flex flex-col items-center justify-center text-center">
                    
                    <h1 className="text-2xl font-semibold mb-2">Hey, I’m Jean.</h1>
                    <p className="mb-4">An engineer from Switzerland passionate about making the world a better place.</p>
                    <div className="flex space-x-12 text-lg mb-6">

                        <div className="flex items-center border py-1 px-2 border-custom-mint-green hover:border-black rounded-lg">
                            <Link href="https://github.com/jeanschoenlaub">
                                <div className="text-custom-mint-green flex items-center">
                                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                                </svg>
                                Github
                                </div>
                            </Link>
                        </div>

                        <div className="flex items-center border py-1 px-2 border-custom-mint-green hover:border-black rounded-lg">
                            <Link href="https://www.linkedin.com/in/jean2020/">
                                <div className="text-custom-mint-green flex items-center">
                                <svg className="w-4 h-4 mb-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                    <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
                                    <path d="M3 5.012H0V15h3V5.012Z"/>
                                </svg>
                                LinkedIn
                                </div>
                            </Link>
                        </div>
    
                        <div className="flex items-center border py-1 px-2 border-custom-mint-green hover:border-black rounded-lg">
                            <Link href="/CV.pdf" download="Jean_Resume.pdf">
                                <div className="text-custom-mint-green flex items-center">
                                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"/>
                                </svg>
                                Resume
                                </div>
                            </Link>
                        </div>

                        <div className="flex items-center border py-1 px-2 border-custom-mint-green hover:border-black rounded-lg">
                            <Link href="mailto:jeanschoen@hotmail.com">
                                <div className="text-custom-mint-green flex items-center">
                                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4a4 4 0 0 1 4 4v6M5 4a4 4 0 0 0-4 4v6h8M5 4h9M9 14h10V8a3.999 3.999 0 0 0-2.066-3.5M9 14v5m0-5h4v5m-9-8h2m8-4V1h2"/>
                                </svg>
                                Email
                                </div>
                            </Link>
                        </div>

                        </div>
                    </div>          
                </div>   
            </div>       
      </main>
    </>
  );
}
