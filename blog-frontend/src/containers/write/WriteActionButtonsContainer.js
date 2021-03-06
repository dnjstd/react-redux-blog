import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButton';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { writePost } from '../../modules/write';

const WriteActionButtonsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, body, tags, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
  }));

  //포스트 등록
  const onPublish = () => {
    dispatch(
      writePost({
        title,
        body,
        tags,
      }),
    );
  };

  //취소

  const onCancel = () => {
    navigate(-1);
  };

  //성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (post) {
      console.log('post 성공');
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log('post 실패');
      console.log(postError);
    }
  }, [navigate, post, postError]);

  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteActionButtonsContainer;
