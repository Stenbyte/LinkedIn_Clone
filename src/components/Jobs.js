import React from "react";
import styled from "styled-components";
import JobsList from "./JobsList";
export default function Jobs(props) {
  return (
    <Container>
      <Left>
        <LeftCont>
          <a>
            <img src="/images/jobss.png" alt="" />
            <span>Job Alerts</span>
          </a>
          <a>
            <img src="/images/suitcase.png" alt="" />
            <span>My Jobs</span>
          </a>
          <a>
            <img src="/images/salary.png" alt="" />
            <span>Salary</span>
          </a>
          <a>
            <img src="/images/pencil.png" alt="" />
            <span>Skill Assesments</span>
          </a>
          <a>
            <img src="/images/interview.png" alt="" />
            <span>Interview Prep</span>
          </a>
          <a>
            <img src="/images/resume.png" alt="" />
            <span>Resume Builder</span>
          </a>
          <a>
            <img src="/images/application1.png" alt="" />
            <span>Application Settings</span>
          </a>
          <a>
            <img src="/images/new-post.png" alt="" />
            <span>Post a free job</span>
          </a>
          <div>
            Icons made by
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </LeftCont>
      </Left>
      <Center>
        <CenterTop>
          <h1>Recent job searches</h1>
          <CentTop>
            <div>
              <h4>frontend developer</h4>
              <p>(3new)</p>
            </div>
            <a>Sweden • entry level • and 3 more</a>
            <hr
              style={{ opacity: 0.4, width: "700px", marginRight: "3.2rem" }}
            />
          </CentTop>
          <CentTop>
            <div>
              <h4>frontend developer</h4>
              <p>(3new)</p>
            </div>
            <a>Sweden • entry level • and 3 more</a>
            <hr
              style={{ opacity: 0.4, width: "700px", marginRight: "3.2rem" }}
            />
          </CentTop>
          <CentTop>
            <div>
              <h4>frontend developer</h4>
              <p>(3new)</p>
            </div>
            <a>Sweden • entry level • and 3 more</a>
            <hr
              style={{ opacity: 0.4, width: "700px", marginRight: "3.2rem" }}
            />
          </CentTop>
        </CenterTop>
        <CenterBottom>
          <h1>Jobs you are top applicant</h1>
          <JobsList />
          <JobsList />
          <JobsList />
          <JobsList />
        </CenterBottom>
      </Center>
      <Right>
        <div>
          <h1>Ways to prepare</h1>
          <div>
            <h5>Best practices</h5>
            <div className="last">
              <img src="/images/bulb.png" alt="" />
              <p>
                Get the most out of your job search and stand out to recruiters
              </p>
            </div>
          </div>
        </div>
      </Right>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  height: 90vh;
  padding: 2rem;
`;
const Left = styled.div`
  flex: 1;
  flex-direction: column;
`;
const LeftCont = styled.div`
  background-color: white;
  width: 250px;
  margin-right: 1rem;
  border-radius: 10px;

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    padding: 0 1rem;
    img {
      margin-right: 10px;
      width: 30px;
      height: 30px;
    }
    span {
      color: grey;
      width: 130px;
      text-align: left;
      font-size: 16px;
    }
  }
  div {
    padding: 1rem;
  }
`;
const Center = styled.div`
  flex: 2;
`;
const CenterTop = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  h1 {
    padding-bottom: 1rem;
    font-size: 20px;
    font-weight: 400;
  }
`;
const CentTop = styled.div`
  div {
    display: flex;
    padding: 0.8rem 0;
    p {
      padding-left: 1rem;
      color: green;
    }
  }
`;
const CenterBottom = styled.div`
  margin-top: 1rem;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 30px;
    }
    .logo {
      width: 60px;
      height: 60px;
      margin-right: -30rem;
    }
    img {
      width: 30px;
      height: 30px;
      margin-right: 1rem;
    }
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 0 1rem;
  div {
    background-color: white;
    border-radius: 10px;
    width: 300px;
    height: 150px;
    h1 {
      text-align: left;
      padding: 0.6rem;
    }
    div {
      h5 {
        text-align: center;
        padding-top: 1rem;
        margin-bottom: -2rem;
        color: rgba(0, 0, 0, 0.5);
      }
      .last {
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.5);
        p {
          padding: 0 0.5rem;
        }
        img {
          width: 40px;
          padding: 0.5rem;
        }
      }
    }
  }
`;
