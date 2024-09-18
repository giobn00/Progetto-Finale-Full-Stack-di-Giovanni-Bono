import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Spacer, Wrapper } from '@/components/Layout';
import { TextLink } from '@/components/Text';
import { fetcher } from '@/lib/fetch';
import { useCurrentUser } from '@/lib/user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import styles from './Auth.module.css';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const { data: { user } = {}, mutate, isValidating } = useCurrentUser();
  const router = useRouter();
  useEffect(() => {
    if (isValidating) return;
    if (user) router.replace('/');
  }, [user, router, isValidating]);

  const onSubmit = useCallback(
    async (event) => {
      setIsLoading(true);
      console.log("ok");
      event.preventDefault();
      try {
        const response = await fetcher('/api/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        });
        
        mutate({ user: response.user }, false);
        toast.success('You have been logged in.');
      } catch (e) {
        toast.error('Incorrect email or password.');
      } finally {
        setIsLoading(false);
      }
    },
    [mutate]
  );

  return (
    <Wrapper className={styles.root}>
      <div className={styles.main}>
        <h1 className={styles.title}>Login to App</h1>
        <form onSubmit={onSubmit} className='text-black' >
          <Input
            ref={emailRef}
            autoComplete="email"
            placeholder="Email Address"
            size="large"
            required
          />
          <Spacer size={0.5} axis="vertical" />
          <Input
            type="password"
            ref={passwordRef}
            autoComplete="current-password"
            placeholder="Password"
            size="large"
            required
          />
          <Spacer size={0.5} axis="vertical" />
          <div className='flex flex-row justify-between text-black' >
            <Button  
                variant='outline' 
                className='border-black rounded-xl m-3 '
            >
              Log in
            </Button>
            <Spacer size={0.25} axis="vertical" />
            <Link href="/forget-password" passHref>
              <Button 
                variant='outline' 
                className='border-black rounded-xl m-3 '
                >
                Forget password
              </Button>
            </Link>
          </div>
        </form>
      </div>
      <div className={styles.footer}>
        <Link href="/sign-up" passHref>
          <TextLink color="link" variant="highlight">
            Don&apos;t have an account? Sign Up
          </TextLink>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Login;
