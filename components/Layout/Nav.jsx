import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/ui/button';
import { fetcher } from '@/lib/fetch';
import { useCurrentUser } from '@/lib/user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import Container from './Container';
import styles from './Nav.module.css';
import Spacer from './Spacer';
import Wrapper from './Wrapper';

const UserMenu = ({ user, mutate }) => {
  const menuRef = useRef();
  const avatarRef = useRef();

  const [visible, setVisible] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const onRouteChangeComplete = () => setVisible(false);
    router.events.on('routeChangeComplete', onRouteChangeComplete);
    return () =>
      router.events.off('routeChangeComplete', onRouteChangeComplete);
  });

  useEffect(() => {
    // detect outside click to close menu
    const onMouseDown = (event) => {
      if (
        !menuRef.current.contains(event.target) &&
        !avatarRef.current.contains(event.target)
      ) {
        setVisible(false);
      }
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, []);

  const onSignOut = useCallback(async () => {
    try {
      await fetcher('/api/auth', {
        method: 'DELETE',
      });
      toast.success('You have been signed out');
      mutate({ user: null });
    } catch (e) {
      toast.error(e.message);
    }
  }, [mutate]);

  return (
    <div className={styles.user}>
      <button
        className={styles.trigger}
        ref={avatarRef}
        onClick={() => setVisible(!visible)}
      >
        <Avatar size={32} username={user.username} url={user.profilePicture} />
      </button>
      <div
        ref={menuRef}
        role="menu"
        aria-hidden={visible}
        className={styles.popover}
      >
        {visible && (
          <div className={styles.menu}>
            <Link passHref href={`/user/${user.username}`}>
              <a className={styles.item}>Profile</a>
            </Link>
            <Link passHref href="/settings">
              <a className={styles.item}>Settngs</a>
            </Link>
            <button onClick={onSignOut} className={styles.item}>
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Nav = () => {
  const { data: { user } = {}, mutate } = useCurrentUser();

  return (
    <nav className='p-5'>
      <div>
        <Container
          className={styles.content}
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="/">
            <a className={styles.logo}>Cookies Cracking</a>
          </Link>
          <Container className=' text-black '>
            {user ? (
              <>
                <UserMenu user={user} mutate={mutate} />
              </>
            ) : (
              <>
                <Link passHref href="/login">
                  <Button
                    className='border-black rounded-xl m-3 '
                    variant="outline"
                  >
                    Log in
                  </Button>
                </Link>
                <Spacer axis="horizontal" size={0.25} />
                <Link passHref href="/sign-up">
                  <Button 
                    className='border-black rounded-xl m-3 '
                    variant="outline"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </Container>
        </Container>
      </div>
    </nav>
  );
};

export default Nav;
