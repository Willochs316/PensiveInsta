import "./styles.css";
import { FaEllipsisH } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import Button from "./Components/Button";
import ImageSlider from "./Components/ImageSlider";
import ImageSlides from "./Components/ImageSlides";
import NewsFeedsBar from "./Components/NewsFeedsBar";
import NewsFeedButton from "./Components/NewsFeedButton";
import NewsFeedTxt from "./Components/NewsFeedTxt";
import NewsImageIcons from "./Components/NewsImageIcons";

export default function App() {
  return (
    <div className="App">
      <div className="newsfeed-container">
        <div className="newsbar-container">
          <NewsFeedsBar />
          <NewsFeedButton icon={FaEllipsisH} className="ellipsis" />
        </div>

        <div>
          <ImageSlider slides={ImageSlides} />
        </div>

        <div className="news-icons">
          <div className="icons-btn">
            <NewsImageIcons
              src="https://img.icons8.com/windows/344/like--v1.png"
              className="comment"
            />

            <NewsImageIcons
              src="https://cdn.iconscout.com/icon/free/png-128/comment-3244516-2701887.png"
              className="comment"
            />
            <NewsImageIcons
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/2x/external-send-email-flatart-icons-outline-flatarticons.png"
              className="comment"
            />
          </div>
          <div className="dot-container">
            <NewsFeedButton icon={FaCircle} className="dot" />
            <NewsFeedButton icon={FaCircle} className="dot" />
            <NewsFeedButton icon={FaCircle} className="dot" />
          </div>

          <div className="icons-btn2">
            <NewsImageIcons
              src="https://cdn.iconscout.com/icon/free/png-128/bookmark-2358983-1970963.png"
              className="bookmark"
            />
          </div>
        </div>

        <div className="newsfeed-stat">
          <div>
            <NewsFeedTxt className="feed-stat" title="265" />
          </div>
          <div>
            <NewsFeedTxt className="feed-stat" title="likes" />
          </div>
        </div>

        <div className="comment-container">
          <div className="news-comment">
            <NewsFeedTxt className="comment-txt" title="ba.beauty" />
            <NewsFeedTxt
              className="comment-txt"
              title="A random day in January"
            />
          </div>

          <NewsFeedTxt className="comment-txt2" title="View all 104 comments" />
          <NewsFeedTxt className="comment-txt3" title="13 hours ago" />
        </div>

        <div className="addComment-container">
          <NewsImageIcons
            src="https://img.icons8.com/ios-glyphs/2x/happy.png"
            className="add-btn"
          />

          <div className="text">
            <textarea
              className="addComment"
              name="add comment"
              placeholder="Add a comment..."
            ></textarea>
          </div>
          <Button className="post-btn" title="Posts" />
        </div>
      </div>
    </div>
  );
}
