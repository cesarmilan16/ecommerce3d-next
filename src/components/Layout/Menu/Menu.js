import { useState, useEffect } from "react";
import Link from "next/link";
import { map } from "lodash";
import { Category } from "@/api";
import styles from './Menu.module.scss';

const categoryCtrl = new Category();

export function Menu(props) {
    const { isOpenSearch } = props;
    const [categories, setCategories] = useState(null);
    console.log(categories);
    

    useEffect(() => {
      (async () => {
        try {
            const response = await categoryCtrl.getAll();
            setCategories(response.data);
        } catch (error) {
            console.error(error);            
        }
      })();
    }, []);
    

  return (
    <div className={styles.categories}>
        {map(categories, (category) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
                <img src={category.icon.url} />
                {category.title}
            </Link>
        ))}
    </div>
  )
}
