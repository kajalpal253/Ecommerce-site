
import { StarIcon } from '@heroicons/react/20/solid'
import Rating from '@mui/material/Rating';
import {Button,Grid,Box ,LinearProgress} from '@mui/material';
import ProductReviewCard from './ProductReviewCard';
import { useEffect, useState } from 'react';
import { Menskurta } from '../../../Data/Menskurta';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findProductsById } from '../../../state/product1/Action.js';
import { addItemToCart } from '../../../state/Cart/Action.js';
import { store } from '../../../state/store.js';




const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
    { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
    { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
  ],
  sizes: [
   
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Productdetails() {
    const [selectedSize,setSelectedSize] = useState("");
    const navigate =useNavigate();
    const params = useParams();
    const dispatch =useDispatch();

  const productState = useSelector(store => store.products);

    const selectedProduct = productState?.product;



const handleAddToCart =() =>{
  const data ={productId:params.productId,size:selectedSize}
  console.log(data);
  dispatch(addItemToCart(data))
  console.log("add item" ,data);
  navigate("/cart")
}

useEffect(() =>{
  const data ={productId:params.productId}
    dispatch(findProductsById(data))

},[params.productId])

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
             {/* Image gallery */}
            < div className="flex flex-col item-center">
          <div className='overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem] '>
          <img
            alt={selectedProduct?.alt}
            src={selectedProduct?.imageUrl}
            className="h-full w-full object-cover object-center"
          />
          </div>
          <div  className='flex flex-wrap space-x-5   '>
           {product.images.map((item,index) => <div  key={index} className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[6rem] max-h-[8rem] mt-4'>
          <img
           
           
            src={item.src}
             alt={item.alt}
            className="h-full w-full object-cover object-center"
          />
          </div> )}
          </div>
          </div>

            {/* Product info */}
            
        < div className=" lg:col-span-1 max-w-2xl mx-auto px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24 ">
          <div className="lg:col-span-2 ">
            <h1 className="text-lg lg:text-xl font-semibold text-gray-900">{selectedProduct?.brand} </h1>
            <h1 className='text-lg lg:text-xl text-gray-900 pacity pt-1'>{selectedProduct?.title}</h1>
          </div>
          


          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>

            <div className='flex space-x-4 item-center text-lg lg:text-xl text-gray-900 mt-6'>
                <p className='font-semibold'>{selectedProduct?.discountedPrice}</p>
                <p className='opacity-50 line-through'> {selectedProduct?.price} </p>
                <p className=' text-green-600 font-semibold'> {selectedProduct?.discountedPersent}% off</p>
            </div>
            {/* Reviews */}
            <div className="mt-6">
              
                <div className=' flex items-center space-x-3'>
                <Rating name="read-only" value={5.5} readOnly />
                <p className='opacity-50  text-sm'>56540 Rating</p>
                <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>3870 Review</p>
              </div>
              
            </div>

            <form  className="mt-10">
              

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
  <div className="grid grid-cols-4 gap-3">
    {product.sizes.map((size, index) => (
      <label
        key={index}
        aria-label={size.name}
        className={`group relative flex items-center justify-center rounded-md border p-3 cursor-pointer
          ${!size.inStock ? 'opacity-50 cursor-not-allowed bg-gray-200 border-gray-400' : ''}
          ${selectedSize === size.name ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-gray-300'}
        `}
      >
        <input
          value={size.name}
          name="size"
          type="radio"
          disabled={!size.inStock}
          checked={selectedSize === size.name}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="absolute inset-0 appearance-none focus:outline-none"
        />
        <span className="text-sm font-medium uppercase z-10">{size.name}</span>
      </label>
    ))}
  </div>
</fieldset>

              </div>

              <Button onClick={handleAddToCart} variant="contained" sx={{px:"2rem",py:"1rem",bgcolor:"#9155fd"}}>
                Add to Cart
              </Button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{selectedProduct?.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div> 
        
        

        </section>
<section>
  <h1 className='font-semibold text-lg pb-4' >Recent Review & Rating</h1>
  <div className="border p-5">
    <Grid container spacing={37}>
      <Grid item xs={12} md={8}>
        <div className='space-y-5'>
          {[1, 1, 1, 1].map((item, index) => (
            <ProductReviewCard key={index} />
          ))}
        </div>
      </Grid>
      {/* Ratings LEFT */}
      <Grid item xs={12}  md={8} >
        <h1 className='text-xl font-semibold pb-2'>Product Ratings</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

          <Rating value={4.6} precision={0.5} readOnly />
          <p className='opacity-60'>59840 Ratings</p>
        </div>

        <Box className='mt-5 space-y-3'>

          <Box mt={3}>
            <p>Excellent</p>
            <LinearProgress variant="determinate" value={70} color="success" />
            <p>Very Good</p>
            <LinearProgress variant="determinate" value={20} color="primary" />
            <p>Good</p>
            <LinearProgress variant="determinate" value={5} color="warning" />
            <p>Average</p>
            <LinearProgress variant="determinate" value={5} color="info" />
            <p>Very Bad</p>
            <LinearProgress variant="determinate" value={2} color="error" />
          </Box>
        </Box>
      </Grid>

    
      
    </Grid>
  </div>
</section>

{/*similar product */}
<section className='pt-10 '>
  <h1 className='py-5 text-xl font-bold'>Similar Products</h1>
  <div className=' flex flex-wrap space-y-5'>
    {Menskurta.map((item)=> <HomeSectionCard product={item}/>)}
  </div>

</section>

       

       
      </div>
    </div>
  )
}
