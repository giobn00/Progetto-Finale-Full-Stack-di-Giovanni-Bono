import { Food } from '@/page-components/Food';
import Head from 'next/head';
import { findFoodById } from '@/api-lib/db';
import { getMongoDb } from '@/api-lib/mongodb';

// export const config = { runtime: 'nodejs' };

export default function FoodPage({data}) {

  return (
    <>
      <Head>
        <title>{data? data.id: "Prodotto non trovato"} </title>
      </Head>
      <Food 
        foodId= {data? data.id : "Prodotto non trovato"}
        name= {data? data.generic_name || data.product_name_it : ""}
      /> : <></>
    </>
  );
};

export async function getServerSideProps(context) {
  const db = await getMongoDb();
  const foodId = context.query.id;
  const data = await findFoodById(db, foodId);

  return { props: { data } }
}