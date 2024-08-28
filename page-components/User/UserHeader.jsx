import { Avatar } from '@/components/Avatar';
import { Container } from '@/components/Layout';
import { 
  Card ,
  CardHeader,
  CardContent,
} from '@/components/ui/card';
import styles from './UserHeader.module.css';

const UserHeader = ({ user }) => {
  return (
    <Card  className='flex flex-col justify-center max-w-96'>
      <CardHeader>
          <Avatar size={168} username={user.username} url={user.profilePicture} />
      </CardHeader>
      <CardContent className='flex flex-col'>
          <div className={styles.name}>{user.name}</div>
          <div className={styles.username}>@{user.username}</div>
        <p className={styles.bio}>{user.bio}</p>
      </CardContent>
    </Card>
  );
};

export default UserHeader;
