import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://b.imge.to/2019/09/26/vckNNt.png"
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <h2 style={{marginLeft: '20px'}}>Dusan Antonijevic</h2>
            <h4 style={{color: 'grey'}}>Junior Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I think I've already described everything on the right, but what I might add, as far as web development is, I've worked on several projects.
            The biggest project I worked on was a cryptocurrency exchange. With another friend, we started from scratch. We used NekChange API documentation, with Reach Frontend.
            We finished it but never launched it publicly.

            I also worked with Wordpress, several websites. As a freelancer, I created several ecommerce sites on the Shopify platform..</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Addrerss</h5>
            <p>Rasiska 8, 1000 Ljubljana</p>
            <h5>Phone</h5>
            <p>+38669/915-665</p>
            <h5>Email</h5>
            <p>dusan.antonijevic2404@gmail.com</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2008}
              endYear={2012}
              schoolName="Technical School"
              schoolDescription="I finished high school in Serbia.
              Direction Machines and equipment.
              Although I had a lot of hands-on teaching in high school, I never really pursued that profession after school."
               />

               <Education
                 startYear={2013}
                 endYear={2015}
                 schoolName="School of Technical Vocational Studies"
                 schoolDescription="I enrolled in Industrial Informatics.
                 I finished 2 years of study and then quit my studies because of work.
                 I learned a lot about Mechatronics and Robotics as well as some of the basics of PLC programming."
                  />

              <Education
                 startYear={2017}
                 endYear={2018}
                 schoolName="ITAcademy"
                 schoolDescription="In 2017 I decided to enroll in a one-year educational program (Software Develoment). I learned the basics of programming, database management, .Net technology ..."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
                

              <h2>Experience</h2>

            <Experience
              startYear={2014}
              endYear={2017}
              jobName="Anything"
              jobDescription="By 2017, I was doing literally everything. From production workers to sales and administration."
              />

              <Experience
                startYear={2017}
                endYear={2019}
                jobName="CNG Soft"
                jobDescription="In 2016, I first heard about cryptocurrencies.
                Since then, I started to trade and mine cryptocurrency, so I started working at CNG Soft.
                I maintained equipment, assembled and took care of the mines."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="JavaScript"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                      skill="C#"
                      progress={60}
                      />
                    <Skills
                      skill="NodeJS"
                      progress={50}
                      />
                        <Skills
                        skill="React"
                        progress={50}
                        />
                        <Skills
                        skill="SQL Server"
                        progress={25}
                        />
                          <Skills
                          skill="Blockchain/Cryptocurrency"
                          progress={100}
                          />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
