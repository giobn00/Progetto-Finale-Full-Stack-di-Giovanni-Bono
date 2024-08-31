import { Spacer, Wrapper } from '@/components/Layout';
import { Post as PostItem } from '@/components/Post';

export const UserPost = ({ post }) => {
  console.log(post);
  return (
    <Wrapper>
      <Spacer size={2} axis="vertical" />
      <PostItem post={post} />
    </Wrapper>
  );
};
