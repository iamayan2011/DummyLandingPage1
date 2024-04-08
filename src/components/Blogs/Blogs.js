import React from "react";
import { Container } from "react-bootstrap";
import right from "../../assets/banner/Solidright.png";
import "./Blog.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import Blogcard from "./Blogcard";
import topright from "../../assets/banner/topright.png";

export default function Blogs() {
  const data = [
    {
      imge: img1,
      cat: "Design",
      heading: "Agency Needs To Embrace Social Media..",
      desc: "Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla",
    },

    {
      imge: img2,
      cat: `Business`,
      heading: "Lead Designer’s UI/UX Core Checklist.",
      desc: "Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla",
    },

    {
      imge: img3,
      cat: `Development`,
      heading: "Lead Designer’s UI/UX Core Checklist.",
      desc: "Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla",
    },

    {
      imge: img4,
      cat: `Marketing`,
      heading: "We Are Building Everything You Needed",
      desc: "Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla",
    },
  ];

  return (
    <div className="parentprojects" id='blog'>
      <div className="d-flex row">
        <div className="d-flex col-12 col-xl-5 mt-4">
          <Container style={{ marginTop: "30px" }}>
            <div className="d-flex flex-row">
              <img
                src={right}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <span className="aboutus">OUR BLOGS AND NEWS</span>
            </div>

            <div
              className="d-flex flex-col heading mt-4 mb-2"
              style={{ lineHeight: "1" }}
            >
              Get More Update For News
            </div>

            <div className="description mt-4">
              We are 100+ professional software engineers with more than 10
              years of experience in delivering super products it because you've
              seen it.
            </div>

            <div className="d-flex flex-row mt-4">
              <button className="btnbn" style={{ width: "auto" }}>
                VIEW ALL BLOGS
              </button>
              <img
                src={topright}
                alt=""
                style={{ padding: "0px", width: "54px", height: "54px" }}
              />
            </div>
          </Container>
        </div>

        <div className="d-flex col-12 col-xl-7 mt-4 flex-column">
          {data.map((d) => (
            <>
              <Blogcard item={d}></Blogcard>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

// const data = [
//     {
//         img: `./img1.png` ,
//         cat: `Design`,
//         heading: 'Agency Needs To Embrace Social Media..'

//     },

// ]
