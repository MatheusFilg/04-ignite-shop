'use client'

import { stripe } from '@/lib/stripe'
import { GetServerSideProps } from 'next'
import { CaretRight } from 'phosphor-react'
import { useKeenSlider } from 'keen-slider/react'

import camiseta1 from '../assets/Camiseta1.png'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <div
      className="keen-slider flex min-h-[35rem] w-full flex-row"
      ref={sliderRef}
    >
      {products &&
        products.map((product) => {
          return (
            <a
              key={product.id}
              className="keen-slider__slide group relative flex cursor-pointer items-center justify-center rounded-lg bg-gradient-to-b from-green3 from-0% to-purple to-100%"
            >
              <Image
                src={camiseta1}
                alt=""
                width={520}
                height={480}
                className="mb-12 object-cover"
              />
              <footer className="absolute bottom-1 left-1 right-1 flex animate-bounce items-center justify-between rounded-md bg-gray2/90 p-8 opacity-0 group-hover:opacity-100">
                <strong className="text-lg">{product.name}</strong>
                <span className="text-xl font-bold text-green2">
                  {product.price}
                </span>
              </footer>
            </a>
          )
        })}

      <button>
        <CaretRight size={48} />
      </button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
    active: true,
    type: 'service',
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0] || '',
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount as number) / 100),
    }
  })

  return {
    props: {
      products,
    },
  }
}
