import { Dispatch, SetStateAction } from "react";

import PostItem from "../PostItem/PostItem";
import styles from "../Posts.module.scss";

interface Iprops {
  setOpenPopupPost: Dispatch<SetStateAction<boolean>>;
}

const PostList = ({ setOpenPopupPost }: Iprops) => {
  return (
    <div className={styles.list}>
      <PostItem setOpenPopupPost={setOpenPopupPost} />
    </div>
  );
};

export default PostList;
