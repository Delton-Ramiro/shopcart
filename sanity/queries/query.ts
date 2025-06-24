import { defineQuery } from "next-sanity";

export const BRANDS_QUERY = defineQuery(
  `*[_type == 'brand'] | order(name desc)`
);

export const LATEST_BLOG_QUERY = defineQuery(
  ` *[_type == 'blog' && isLatest == true]|order(name asc){
      ...,
      blogcategories[]->{
      title
    }
    }`
);
