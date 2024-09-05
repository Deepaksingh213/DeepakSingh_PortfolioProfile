import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import resume from "../assets/Resume.pdf"


const DownloadResume = () => {
  return (
    <>
    <a href={resume} download="Resume">
     <button className="border border-primary/50 rounded-lg text-md flex items-center gap-2 py-2 px-4 text-white ">
   
                    <MdOutlineFileDownload className="text-primary" size="22px" />
                    Download Resume  
    
                  </button>
                  </a>
   
    </>
  )
}

export default DownloadResume