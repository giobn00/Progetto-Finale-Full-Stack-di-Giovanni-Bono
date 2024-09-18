import { Index } from '@/page-components/Index';
import { Helmet } from 'react-helmet';



const IndexPage = () => {
  return (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>cookiescracking</title>
      <link rel="canonical" href="https://cookiescracking.giovannibono.com/" />
    </Helmet>
    <Index />
  </>);
};

export default IndexPage;
