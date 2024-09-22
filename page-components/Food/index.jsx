import { Spacer } from '@/components/Layout';
import { useFoodPages } from '@/lib/food';
import styles from './FoodList.module.css';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FcLike } from "react-icons/fc";
import { Button } from "@/components/ui/button"
import { usePostPages } from '@/lib/post';
import { fetcher } from '@/lib/fetch';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useCurrentUser } from '@/lib/user';
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';


export const Food = ({foodId, foodName}) => {
  const { data } = useFoodPages({"foodId": foodId });
  const isUserLogegdIn = useCurrentUser();
    
  const { mutate } = usePostPages();

  const onClick = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await fetcher('/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: foodId, contentName: foodName  }),
        });
        toast.success('You have posted successfully');
        // refresh post lists
        mutate();
      } catch (e) {
        toast.error(e.message);
      } finally {
        console.log("ok");
      }
    },
    [mutate]
  );

  return (
    <div className={styles.root}>
      <Spacer size={1} axis="vertical" />
        <Card>
          <CardHeader>
            <CardTitle className='flex flex-row justify-between '>
                {data?.generic_name || data?.product_name_it}  {data?.quantity}
              {isUserLogegdIn.data && isUserLogegdIn.data.user? 
              <Button className='m-5'  variant="outline" size="icon">
               <FcLike onClick={onClick} />
              </Button> : null}
            </CardTitle>
          </CardHeader>
          { data?.ingredients_text?
                    <CardContent>
                      <CardDescription>
                        {data?.ingredients_text}
                      </CardDescription>
                    </CardContent> : null
          }
          {data?.error? 
            <CardFooter>
              <div className={styles.footerContent} >prodotto non torvato</div>
            </CardFooter>
            :
            <CardFooter>
            <div className={styles.footerContent}>
              <div className={styles.footerTitle}>
                <h5 className="mb-2 text-xl font-medium leading-tight">
                  {foodId}
                </h5>
              </div>
              <div className={styles.footerDescription}>
                <p className="text-base">
                  Qualita` nutrizionale : <a className='text-xl'>{data?.nutrition_grades}</a>
                </p>
                <p className="text-base">
                  Impatto ambientale : <a className='text-xl'>{data?.ecoscore_grade}</a>
                </p>
                <Spacer axis="vertical" size={1} />
                <p className="text-base">
                 <a>Produttore:</a> <a>{data?.brands}</a>
                </p>
              </div>
            </div>
          </CardFooter>
          }
        </Card>
    </div>
    
  );
};

