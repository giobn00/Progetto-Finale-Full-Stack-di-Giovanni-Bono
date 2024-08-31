import { Avatar } from '@/components/Avatar';
import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
 } from '@/components/ui/card'
import { format } from '@lukeed/ms';
import Link from 'next/link';
import { useMemo } from 'react';
import styles from './Post.module.css';

const Post = ({ post }) => {
  const timestampTxt = useMemo(() => {
    const diff = Date.now() - new Date(post.createdAt).getTime();
    if (diff < 1 * 60 * 1000) return 'Just now';
    return `${format(diff, true)} ago`;
  }, [post.createdAt]);

  return (
      <Card className='felx max-w-96 m-auto mt-3 mb-3'>
        <CardHeader>
          <Link href={`/user/${post.creator.username}`}>
            <div className='flex flex-row ' >
              <Avatar
                size={36}
                url={post.creator.profilePicture}
                username={post.creator.username}
              />
            <div>
            <CardTitle className={styles.name}>
              {post.creator.name}
            </CardTitle>
            <CardDescription className={styles.username}>
              @{post.creator.username}
            </CardDescription>
            </div>
            </div>
          </Link>
        </CardHeader>
        <CardContent className='flex flex-row justify-between '>
          <CardDescription className=' text-black  '>
            {post.content}
          </CardDescription>
          <time dateTime={String(post.createdAt)} className={styles.timestamp}>
          {timestampTxt}
        </time>
        </CardContent>
      </Card>
  );
};

export default Post;
