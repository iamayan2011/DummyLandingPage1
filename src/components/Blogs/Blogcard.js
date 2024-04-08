import React from 'react'
import { Container } from 'react-bootstrap'

export default function Blogcard(props) {

    const {imge, heading, cat, desc} = {...props.item};
    //console.log(props)

  return (
    <div>
      <div className="d-flex row mt-4">
            <div className="d-flex col-12 col-md-4 justify-content-center mt-4">
              <img src={imge} className="blogimg" alt="" />
            </div>
            <div className="d-flex col-12 flex-col col-md-8 mt-4">
              <Container className="blogcont">
                <div className="d-flex flex-row align-items-center blogdet">
                  <div className="catbtn">
                    <span className="catbtntxt">{cat}</span>
                  </div>
                  <span className="dateblog">March 7, 2024</span>
                </div>

                <div className="blogheading1">
                  {heading}
                </div>

                <div className="description">
                    {desc}
                  
                </div>
              </Container>
            </div>
          </div>
    </div>
  )
}
