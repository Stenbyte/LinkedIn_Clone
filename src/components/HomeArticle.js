import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

export default function HomeArticle({ art }) {
  const [open, setOpen] = useState(false);
  const [likes, setLikes] = useState(0);

  return (
    <Article>
      <SharedActor>
        <a>
          {art.actor.image ? (
            <img src={art.actor.image} alt="" />
          ) : (
            <img src="/images/photo.svg" alt="" />
          )}
          <div>
            <span>{art.actor.title}</span>
            <span>{art.actor.description}</span>
            <span>{art.actor.date.toDate().toLocaleDateString()}</span>
          </div>
        </a>
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src="/images/ellipsis.svg" alt="" />
        </button>
        {open && (
          <div
            style={{
              position: "absolute",
              right: "10px",
              backgroundColor: "white",
              cursor: "default",
            }}
          >
            delete
          </div>
        )}
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
            <span>{likes}</span>
          </button>
        </li>
        {/* <li>
      <a>{art.comments}</a>
    </li> */}
      </SocialCounts>
      <SocialActions>
        <button
          onClick={() => {
            likes === 0 ? setLikes(likes + 1) : setLikes(0);
          }}
        >
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
  );
}
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
