
let product = {
    images:[
      'https://cdn.dsmcdn.com/mnresize/500/-/ty429/product/media/images/20220511/15/109549196/70373606/1/1_org.jpg',
      'https://cdn.dsmcdn.com/mnresize/500/-/ty431/product/media/images/20220511/15/109549196/70373606/2/2_org.jpg',
      'https://cdn.dsmcdn.com/mnresize/500/-/ty431/product/media/images/20220511/15/109549196/70373606/3/3_org.jpg'
     ]
  }




const getProduct = () => Promise.resolve((product));

// usage (1)
/* getUsers()
  .then(result => {
    console.log(result);
    return result
  });
 */
// usage (2)
export const getData = async () => {
  const result = await getProduct();
  return result
};
