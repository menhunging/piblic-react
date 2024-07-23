import { Dispatch, SetStateAction } from "react";

import Button from "src/components/ui/Buttons/Button";

import styles from "../Posts.module.scss";

interface Iprops {
  setOpenPopupPost: Dispatch<SetStateAction<boolean>>;
}

const PostListEmpty = ({ setOpenPopupPost }: Iprops) => {
  return (
    <div className={styles.postEmpty}>
      <p>
        You don't have any job posts yet. You can post your first job post right
        now.
      </p>
      <Button
        className={styles.postEmpty__btn}
        theme="green"
        type="default"
        onClick={() => {
          setOpenPopupPost(true);
        }}
      >
        Post a new job
      </Button>
    </div>
  );
};

export default PostListEmpty;
