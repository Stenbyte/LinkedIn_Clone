import styled from "styled-components";
import React, { useState, useEffect, Fragment } from "react";
import PostModal from "./PostModal";
import { connect } from "react-redux";
import { getArticlesApi } from "../actions";
import ReactPlayer from "react-player";
function Main(props) {
  const [showModal, setShowModal] = useState("close");

  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };
  return (
    <Fragment>
      {props.articles.length === 0 ? (
        <p>There are no articles</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}

              <button
                onClick={handleClick}
                disabled={props.loading ? true : false}
              >
                Start a post
              </button>
            </div>
            <div>
              <button>
                <img src="/images/photo-icon1.png" alt="" />
                <span>photo</span>
              </button>
              <button>
                <img src="/images/video.png" alt="" />
                <span>Video</span>
              </button>
              <button>
                <img src="/images/event.png" alt="" />
                <span>Event</span>
              </button>
              <button>
                <img src="/images/application.png" alt="" />
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {props.loading && <img src="/images/spinner.svg" alt="" />}
            {props.articles.length > 0 &&
              props.articles.map((art, key) => (
                <Article key={key}>
                  <SharedActor>
                    <a>
                      {props.user ? (
                        <img src={art.actor.image} alt="" />
                      ) : (
                        <img src="/images/photo.svg" alt="" />
                      )}
                      <div>
                        <span>{art.actor.title}</span>
                        <span>{art.actor.description}</span>
                        <span>
                          {art.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    <button>
                      <img src="/images/ellipsis.svg" alt="" />
                    </button>
                  </SharedActor>
                  <Description>{art.description}</Description>
                  <SharedImg>
                    <a>
                      {!art.sharedImg && art.video ? (
                        <ReactPlayer width={"100%"} url={art.video} />
                      ) : (
                        art.sharedImg && <img src={art.sharedImg} alt="" />
                      )}
                    </a>
                  </SharedImg>
                  <SocialCounts>
                    <li>
                      <button>
                        <img src="/images/like-button.svg" alt="" />
                        <img src="/images/clapping.svg" alt="" />
                        <span>75</span>
                      </button>
                    </li>
                    <li>
                      <a>{art.comments}</a>
                    </li>
                  </SocialCounts>
                  <SocialActions>
                    <button>
                      <img src="/images/like-button.svg" alt="" />
                      <span>Like</span>
                    </button>
                    <button>
                      <img src="/images/speech-bubble.svg" alt="" />
                      <span>Comments</span>
                    </button>
                    <button>
                      <img src="/images/share.svg" alt="" />
                      <span>Share</span>
                    </button>
                    <button>
                      <img src="/images/send.svg" alt="" />
                      <span>Send</span>
                    </button>
                  </SocialActions>
                </Article>
              ))}
          </Content>
          <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
      )}
    </Fragment>
  );
}

const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 0 rgb(0 0 0 / 10), 0 0 8px rgb(255 200 255 / 20);
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.7);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      min-width: 50px;
      background: transparent;
      border: none;
      font-weight: 600;
      display: flex;
      align-items: center;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        text-align: left;
        background-color: white;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          width: 32px;
          height: 32px;
          margin: auto;
          padding-right: 5px;
        }
        span {
          color: #70b9f5;
        }
      }
    }
  }
`;
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.7);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    outline: none;
    border: none;
    background: transparent;
    img {
      width: 30px;
      height: 20px;
    }
  }
`;
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%auto;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCounts = styled.ul`
  line-height: 1.3;
  align-items: flex-start;
  display: flex;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      border: none;
      background-color: white;
      img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }
  }
`;
const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 2px 6px;
  button {
    display: flex;
    align-items: center;
    padding: 0.2rem;
    font-size: 12px;
    color: #0a66c2;
    border: none;
    background: transparent;
    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
`;

const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;
const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
