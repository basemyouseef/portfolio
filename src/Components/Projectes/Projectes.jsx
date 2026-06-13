import React from 'react'
import './Projectes.css'
import img1 from '../../Components/image/cruds.png';
import img2 from '../../Components/image/to_do.png';
import img3 from '../../Components/image/wheater.png';
import img4 from '../../Components/image/paint-shop-main.png';
import img5 from '../../Components/image/test project.png';
import img6 from '../../Components/image/ecommerce.png';


const projectesData=[
{
  id:1,
  img:img1,
  title:"Prject cruds ",
  github:"https://github.com/basemyouseef/CRUD-Operations",
  demo:"https://basemyouseef.github.io/CRUD-Operations/"
},
{
  id:2,
  img:img2,
  title:"Prject MY-To-Do-List",
  github:"https://github.com/basemyouseef/MY-To-Do-List",
  demo:"https://basemyouseef.github.io/MY-To-Do-List/"
},
{
  id:3,
  img:img3,
  title:"Prject weather-ai",
  github:"https://github.com/basemyouseef/weather-ai/settings/pages",
  demo:"https://basemyouseef.github.io/weather-ai/"
},
{
  id:4,
  img:img5,
  title:"Prject test WebSit",
  github:"https://github.com/basemyouseef/test-project-react",
  demo:"https://basemyouseef.github.io/test-project-react/"
},
{
  id:5,
  img:img4,
  title:"Prject paint-shop-main",
  github:"https://github.com/basemyouseef/PaintShop",
  demo:"https://basemyouseef.github.io/PaintShop/"
},
{
  id:6,
  img:img6,
  title:"E-commerce-API",
  github:"https://github.com/basemyouseef/E-commerce-API",
  demo:"https://basemyouseef.github.io/E-commerce-API/"
}

]
function Projectes() {
  return (
    <section className='porjectes' id='porjectes'>
          <div className="top_section">
        <h5>My Projectes Work</h5>
        <h2 className='main_title'>My Projectes </h2>
      </div>
      <div className="container projectes_container">
        {projectesData.map(({id,img,title,github,demo})=>(
       <article key={id} className="project_item">
          <div className="project_item_img">
            <img src={img} alt="" />
          </div>
        <h3 className='title'>{title}</h3>
          <div className="project_item_btn">
            <a href={github} target='_blank' className='btn'>GitHub</a>
            <a href={demo} target='_blank' className="btn btn-primary">Live Demo</a>

          </div>
        </article>
        ))}
 
      </div>
      
    </section>
  )
}

export default Projectes
