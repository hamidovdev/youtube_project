import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import { Box, Grid, Typography, Container } from "@mui/material"
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi"

import { AiOutlineMore, AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai"
import { BiMessageDetail } from "react-icons/bi"
import { IoIosShareAlt } from "react-icons/io"

import { BiPlay } from "react-icons/bi"
import { ImVolumeMedium } from "react-icons/im"


import service from '../../services/getAll'
import "./style.css"
export default () => {
  const [people, setPeople] = useState([])
  const [index, setIndex] = React.useState(0)

  useEffect(() => {
    service.getAll().then((resp) => {
      setPeople(resp)
      console.log("data=>", resp)
    })
    console.log("people->", people);
  }, [])
  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  }

  // useEffect(() => {
  //   const lastIndex = people.length - 1
  //   if (index < 0) {
  //     setIndex(lastIndex)
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0)
  //   }
  // }, [index, people])

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex((oldIndex) => {
  //       let index = oldIndex + 1
  //       if (index > people.length - 1) {
  //         index = 0
  //       }
  //       return index
  //     })
  //   }, 5000)
  //   return () => {
  //     clearInterval(slider)
  //   }
  // }, [index])

  return (
    <section className='section'>
      <Box className='section-center'>
        {people.map((person, personIndex) => {
          const { id, img, name, title, eye, like } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <Box sx={{ display: "flex", justifyContent: "center", width: "100%", height: "100%",padding:"2%" }}>
                <Box sx={{ width: "30%", height: "58%", backgroundImage: `url(${person.img})`, display: "flex", justifyContent: "center", borderRadius: "15px", flexDirection: "column" }}>
                  <Box sx={{ display: "flex", width: "100%", height: "50%" }}>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "-45%" }}>
                      <BiPlay style={{ color: "white", fontSize: "28px", margin: "2%" }} />
                      <ImVolumeMedium style={{ color: "white", fontSize: "26px", margin: "2%" }} />
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", padding: "2%", height: "50%", marginBottom: "-99%", width: "100%" }}>
                    <Typography sx={{ fontFamil: "sans-serif", color: "white", fontSize: "15px" }}>
                      {title}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                      <Box width="80%" sx={{ display: "flex", alignItems: "center" }}>
                        <img src={img} alt="bu yerda img bor" style={{ width: "15%", height: "60%", borderRadius: "50%" }} />
                        <Typography sx={{ fontFamil: "sans-serif", color: "white", fontSize: "15px", fontWeight: "600" }}>
                          {name}
                        </Typography>
                      </Box>
                      <Box sx={{ width: "42%", height: "100%", display: "flex", alignItems: "center" }}>
                        <button style={{ color: "white", backgroundColor: "red", border: "none", borderRadius: "3px", padding: "7%", height: "70%", fontSize: "16px" }}>SUBSCRIBE</button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "2%" }}>
                  <AiOutlineMore style={{ fontSize: "32px", color: "#AAAAAA", marginTop: "20px" }} />
                  <Box sx={{ ":hover": { cursor: "pointer" } }}>
                    <AiTwotoneLike style={{ fontSize: "34px", color: "#AAAAAA", marginTop: "210px" }} />
                    <Typography sx={{ fontSize: "14px", color: "#AAAAAA" }}>
                      {like}
                    </Typography>
                  </Box>
                  <Box sx={{ ":hover": { cursor: "pointer" } }}>
                    <AiTwotoneDislike style={{ fontSize: "34px", color: "#AAAAAA", marginTop: "30px" }} />
                    <Typography sx={{ fontSize: "14px", color: "#AAAAAA" }}>
                      Dislike
                    </Typography>
                  </Box >
                  <Box sx={{ ":hover": { cursor: "pointer" } }}>
                    <BiMessageDetail style={{ fontSize: "34px", color: "#AAAAAA", marginTop: "30px" }} />
                    <Typography sx={{ fontSize: "14px", color: "#AAAAAA" }}>
                      Comment
                    </Typography>
                  </Box>
                  <Box sx={{ ":hover": { cursor: "pointer" } }}>
                    <IoIosShareAlt style={{ fontSize: "34px", color: "#AAAAAA", marginTop: "30px" }} />
                    <Typography sx={{ fontSize: "14px", color: "#AAAAAA" }}>
                      Share
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Typography>{name}</Typography>
              <Typography className='title'>{title}</Typography>
              <Typography className='text'>{eye}</Typography>
              <Typography className='text'>{like}</Typography>
              <FaQuoteRight className='iconn' />
            </article>
          )
        })}
        <button className='prev' onClick={prevSlide}>
          <BiArrowToTop />
        </button>
        <button className='next' onClick={nextSlide}>
          <BiArrowToBottom />
        </button>
      </Box>
    </section>
  )
}













// import React, { useState, useEffect } from 'react';
// import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
// import { FaQuoteRight } from 'react-icons/fa';
// import service from '../../services/getAll';
// import "./App.css"
// export default () => {
//   const [shorts, setShorts] = useState([]);
//   const [index, setIndex] = useState();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     service.getAll().then((resp) => {
//       setShorts(resp)
//       console.log("data=>", resp)
//   })
//   console.log("shorts->",shorts);
//     const lastIndex = shorts.length - 1;
//     if (index < 0) {
//       setIndex(lastIndex);
//     }
//     if (index > lastIndex) {
//       setIndex(0);
//     }
//   }, [index, loading]);

//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1);
//     }, 5000);
//     return () => {
//       clearInterval(slider);
//     };
//   }, [index,loading]);

//   return (
//     <section className="section">
//       <div className="title">
//         <h2>
//           <span>/</span>reviews
//         </h2>
//       </div>
//       <div className="section-center">
//         {shorts.map((val, personIndex) => {

//           let position = 'nextSlide';
//           if (personIndex === index) {
//             position = 'activeSlide';
//           }
//           if (
//             personIndex === index - 1 ||
//             (index === 0 && personIndex === shorts.length - 1)
//           ) {
//             position = 'lastSlide';
//           }

//           return (
//             <article className={position} key={val.id}>
//               <img src={val.img} alt={val.name} className="person-img" />
//               <h4 style={{color:"red"}}>{val.name}</h4>
//               <p className="text">{val.title}</p>
//               <FaQuoteRight className="icon" />
//             </article>
//           );
//         })}
//         <button className="prev" onClick={() => setIndex(index - 1)}>
//           <FiChevronLeft />
//         </button>
//         <button className="next" onClick={() => setIndex(index + 1)}>
//           <FiChevronRight />
//         </button>
//       </div>
//     </section>
//   );
// }
