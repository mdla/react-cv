import React, { Component } from 'react';

class Courses extends Component {
  render() {

    if(this.props.data){
      var courses = this.props.data.map(function(course){
        ;
        return <div className="columns portfolio-item">
           <div className="item-wrap">
            <a href={course.link} title={course.title}>
               <img alt={course.title} src={process.env.PUBLIC_URL + course.image} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{course.title}</h5>
                     <p>{course.description}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="courses">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Cursos</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {courses}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Courses;
