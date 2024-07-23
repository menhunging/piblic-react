import { useState } from "react";

import PostList from "./PostList/PostList";
import PostListEmpty from "./PostList/PostListEmpty";
import PostNew from "./PostNew/PostNew";
import FilterControls from "../Filter/FilterControls";

import BlockWhite from "../ui/BlockWhite/BlockWhite";
import Button from "../ui/Buttons/Button";
import Popup from "../ui/Popups/Popup";
import PopupMessage from "../ui/Popups/PopupMessage";

import styles from "./Posts.module.scss";

// const posts = [];
const posts = ["test"];

const Posts = () => {
  const [openPopupPost, setOpenPopupPost] = useState<boolean>(false);
  const [openPopupSucces, setOpenPopupSucces] = useState<boolean>(false);

  return (
    <div className={styles.posts}>
      <h2 className="caption">My job posts</h2>

      {posts.length > 0 ? (
        <>
          <FilterControls
            buttonName={"Post a new job"}
            setOpenPopup={setOpenPopupPost}
          />

          <BlockWhite className={styles.posts__content}>
            <PostList setOpenPopupPost={setOpenPopupPost} />
          </BlockWhite>

          <Button className={styles.posts__btn} type="default" theme="dark">
            Load more
          </Button>
        </>
      ) : (
        <PostListEmpty setOpenPopupPost={setOpenPopupPost} />
      )}

      <Popup isOpen={openPopupPost} setIsOpen={setOpenPopupPost}>
        <PostNew
          warning={true}
          setOpenPopupPost={setOpenPopupPost}
          setOpenPopupSucces={setOpenPopupSucces}
        />
      </Popup>

      <Popup
        type="small"
        isOpen={openPopupSucces}
        setIsOpen={setOpenPopupSucces}
      >
        <PopupMessage
          title={"You created a new job!"}
          text={"Your job has been sent for review"}
          btnAdditional={"All my job posts"}
          btnMain={"View this job"}
        />
      </Popup>
    </div>
  );
};

export default Posts;
