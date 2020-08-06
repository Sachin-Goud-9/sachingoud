import React from "react";
import "./styles.css";
import { Typography, Grid, Divider } from "@material-ui/core";
import Fade from "react-reveal/Fade";

export default function App() {
  return (
    <div className="App">
      <Grid xs={12} sm={12} md={12} lg={12}>
        <Fade top>
          {/*Contact Details*/}
          <Grid style={{ margin: 20 }}>
            <Typography align="center" variant="h4" display="inline">
              SACHIN GOUD SARIKONDA
            </Typography>
            <Typography align="center" variant="body1">
              <p>
                H-No:20-95,R.B.Nagar,Shamshabad,R.R.Dist.,Telangana,India,Pincode:501218
              </p>
            </Typography>
            <Typography>
              <p>
                <b>Phone:</b> +91 9010097404, <b>email:</b>{" "}
                sachingoud200@gmail.com
              </p>
            </Typography>
            <Typography>
              <p>
                <b>LinkedIn:</b>{" "}
                <a
                  href="https://www.linkedin.com/in/sachin-goud-92277768"
                  target="_blank"
                >
                  Sachin Goud
                </a>
              </p>
            </Typography>
            <Typography>
              <p>
                <b>GitHub:</b>{" "}
                <a href="https://github.com/Sachin-Goud-9" target="_blank">
                  Sachin Goud
                </a>
              </p>
            </Typography>
          </Grid>
          {/*Contact Details*/}
        </Fade>
        {/*Education Information*/}
        <Fade left>
          <Grid style={{ marginLeft: 10 }}>
            <Typography align="left">
              <h1>
                Education
                <Divider style={{ height: 2, color: "grey" }} />
              </h1>
            </Typography>
            <Grid>
              <Typography align="justify">
                <b>Bachelor of Technology(B.Tech) -</b> <br />
                Computer Science and Engineering(CSE) - <br />
                Sreenidhi Institute of Science and Technology, Hyderabad,
                Telangana, India Pincode:501301
                <br />
                <i>Aug 2017-July 2021</i>
                <br />
                <i> CGPA- 9.02 </i>
              </Typography>
            </Grid>
            <Grid>
              <Typography align="justify">
                <b>Intermediate (MPC) - Telangana State Board </b> <br />
                Narayana Junior College,Hyderabad,Telangana,India Pincode:501510
                <br />
                <i>Jun 2015 - July 2017</i>
                <br />
                <i> Percentage:96.3%</i>
              </Typography>
            </Grid>
            <Grid>
              <Typography align="justify">
                <b>X Standard - Central Board of Secondary Education(CBSE)</b>{" "}
                <br />
                GMR Chinmaya Vidyalaya,Shamshabad,R.R.Dist.,Telangana,India
                Pincode:501218
                <br />
                <i>April 2014 - April 2015</i>
                <br />
                <i> GPA:9.6</i>
              </Typography>
            </Grid>
          </Grid>
        </Fade>
        <Fade right>
          {/*technical Details*/}
          <Grid style={{ margin: 20 }}>
            <Typography align="right">
              <h1>
                Technical Skills
                <Divider style={{ height: 2, color: "grey" }} />
              </h1>
            </Typography>
            <Typography align="left">
              <b>Languages:</b>
              C,C++,Java,Python,HTML5,CSS
            </Typography>
            <br />
            <Typography align="left">
              <b>Databases:</b>
              Oracle Database XE, Mongo DB.
            </Typography>
            <br />
            <Typography align="left">
              <b>Operating Systems:</b>
              Microsoft Windows, Linux(Ubuntu).
            </Typography>
            <br />
            <Typography align="left">
              <b>Cross-platform Application Development: </b>
              Flutter.
            </Typography>
            <br />
            <Typography align="left">
              <b>Web Development, Web Frameworks: </b>
              Node js,React js.
            </Typography>
            <br />
            <Typography align="left">
              <b>Machine Learning.</b>
            </Typography>
          </Grid>
        </Fade>
        <Fade left>
          {/*Work Experience*/}
          <Grid style={{ marginLeft: 10 }}>
            <Typography align="left">
              <h1>
                Work Experience
                <Divider style={{ height: 2, color: "grey" }} />
              </h1>
            </Typography>
            <Grid>
              <Typography align="justify">
                <b>Application Developer</b> <br />
                Worked with Bangalore based startup - PauzR as an Intern as a
                developer.
                <br />
                <i>May 2020 - July 2020</i>
              </Typography>
            </Grid>
            <Grid>
              <Typography align="justify">
                <b>Software Developer</b> <br />
                Software Developer Intern under a Scientist at Research Centre
                Imarat (RCI - A DRDO Laboratory).
                <br />
                <i>June 2019 - July 2019</i>
              </Typography>
            </Grid>
          </Grid>
        </Fade>
        <Fade right>
          {/*Work Experience*/}
          <Grid style={{ marginLeft: 10 }}>
            <Typography align="left">
              <h1>
                Courses,Certifications and Projects
                <Divider style={{ height: 2, color: "grey" }} />
              </h1>
            </Typography>
            <Grid>
              <Typography align="justify">
                <b>Computer Vision - Object Detection with OpenCV and Python</b>{" "}
                <br />
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/LUDCQB8GHH63"
                  alt="Certificate"
                >
                  Certificate
                </a>
              </Typography>
            </Grid>
            <Grid>
              <Typography align="justify">
                <b>Database Management System - NPTEL: </b>
                <a
                  href="https://drive.google.com/file/d/1U_q_QzrsTmEVj5l8sTst4m7QFOv3MfcA/view?usp=sharing"
                  alt="Certificate"
                >
                  Certificate
                </a>{" "}
                <br />
                Scored 86% in DBMS course(Feb-Apr 2019) certified by NPTEL-
                MHRD, Govt. Of India.
                <br />
              </Typography>
            </Grid>
            <Grid>
              <Typography align="justify">
                <b>Programming In Java - NPTEL:</b>
                <a
                  href="https://drive.google.com/file/d/10pIth9vzqlC4EQ3y18ZH5moM3Ecd0BWO/view?usp=sharing"
                  alt="Certificate"
                >
                  Certificate
                </a>{" "}
                <br />
                Scored 77% in Programming in Java course(Jul-Oct 2019) certified
                by NPTEL- MHRD, Govt. Of India.
                <br />
              </Typography>
            </Grid>
            <Grid>
              <Typography align="justify">
                <b>Web Development</b>
                <a
                  href="https://drive.google.com/file/d/10pIth9vzqlC4EQ3y18ZH5moM3Ecd0BWO/view?usp=sharing"
                  alt="Certificate"
                >
                  Certificate
                </a>{" "}
                <br />
              </Typography>
            </Grid>
            <Grid>
              <Typography align="justify">
                <b>Project - Prediction of Fuel Consumption of Vehicles</b>{" "}
                <br />
                It is a Machine Learning model which predicts the Fuel
                consumption of vehicles by taking Internal and External
                parameters such as CO2 emission, No. of Cylinders etc… into
                consideration.
                <br />
              </Typography>
            </Grid>
          </Grid>
        </Fade>
        <Fade left>
          {/*Achievements and Interests*/}
          <Grid style={{ marginLeft: 10 }}>
            <Typography align="left">
              <h1>
                Achievements, Extra-curricular Activities, Leadership Skills and
                Interests
                <Divider style={{ height: 2, color: "grey" }} />
              </h1>
            </Typography>
            <Grid>
              <Typography align="justify">
                <b>
                  Secured 1st Position in RURA-THON 2020 - National Level
                  Hackathon - Theme: Rural Empowerment
                </b>{" "}
                <br />
                Conducted by JHUB-Jawaharlal Nehru Technological
                University-Hyderabad(JNTU-H).
                <br />
              </Typography>
            </Grid>
            <Grid>
              <Typography align="justify">
                <b>Participated in Coding Competitions</b> <br />
                HashCode-2020,KickStart-2020 and CodeJam-2020.
                <br />
              </Typography>
            </Grid>
            <Grid>
              <Typography align="justify">
                <b>Board Member - Emerging Computer’s Arena (Student Club) </b>{" "}
                <br />
                Organised workshop on Programming, Flutter Application
                Development in College Premises.
                <br />
              </Typography>
            </Grid>
            <Grid>
              <Typography align="justify">
                <b>
                  General Secretary - Technical Association CSE - Department
                </b>{" "}
                <br />
                Conducted a Hackathon in college for shortlisting teams for
                Smart India Hackathon(SIH-2020).
                <br />
              </Typography>
            </Grid>
            <Grid>
              <Typography align="justify">
                <b>
                  Competitive Coding, Reading Books, Blog Writing and Content
                  Writing.
                </b>{" "}
                <br />
                <br />
              </Typography>
            </Grid>
          </Grid>
        </Fade>
      </Grid>
    </div>
  );
}
