import Link from 'next/link'; // Imports the Link component for client side navigation
import Image from 'next/image'; // Imports the Image component
import thumbs from './images/thumbs.jpg'; // Imports an image of me from the image folder in app that I will use for all images

export default function Home() { // Defines and exports the Home component
  return ( /* Returns the TSX to render the page */
    <main> {/* Main container for the page */} 
      <div> {/* Div wrapper for the heading */} 
        <h1 className="h1"> {/* Heading using the h1 class to style the text */} 
          Next JS will allow you to make cool projects, so learn it! You can make pretty much any style of website you want and can have a marketable skill.
        </h1> {/* text encouraging learning Next.js */}
      </div> {/* End of the heading Div */} 
      <div className="container"> {/* Container for the practice button */}
        <div className="center"> {/* Div with a class to center the practice button on the page */} 
          <a className="globalPracticeButton"> {/* Anchor tag with a class to format a practice button */} 
            <Link href="/practice_home">Practice</Link> {/* Next.js link component for client-side routing to the practice page */} 
            </a> {/* Centered button for the practice home page */}
        </div> {/* End div for the center */} 
      </div> {/* End div for the container */} 
      <div className="container"> {/* Container for image */}
        <div className="center"> {/*Centers the image on the page within the container*/}
          <Image src={thumbs} width={1000} height={1000} alt="picture with my thumbs up and a wide smile"/> {/* Image component displaying a thumbs up picture */}
        </div> {/* End div for centering the image */} 
      </div> {/* End div for the container having the image */} 
    </main> /* End of the main container */
  ); /* End of the return */
} /* End of the function Home */ 
