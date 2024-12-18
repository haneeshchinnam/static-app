import Image from 'next/image'
import React from 'react'
import FeatureCard from '../FeatureCard'

const VitaminComponent = () => {
  return (
    <section className="flex flex-col bg-blue-50 pb-28">
        <h1 className="text-5xl font-bold text-darkBlue text-center pt-10">
          <span className="font-extrabold">Essential</span> Vitamins
        </h1>
        <section className="flex flex-col sm:flex-col md:lg:flex-row md:lg:justify-evenly items-center px-6 pb-10 bg-blue-50 text-center gap-10 sm:md:gap-10 lg:gap-0">
          <div>
            <p className="mt-2 text-deepTeal">Online Medical Supplies</p>
            <h3 className="mt-1 text-lg font-medium text-deepTeal">
              Get Your Vitamins & Minerals
            </h3>
            <button className="mt-4 px-6 py-2 bg-deepTeal text-white font-medium rounded-3xl hover:bg-deepTeal">
              EXPLORE
            </button>
          </div>

          <div className="mt-[70px] bg-yellow-100 rounded-tl-[50px] rounded-br-[50px] w-[200px]">
            <Image
              src="/assets/product-3.png.png"
              alt="Probiotic Supplement"
              width={200}
              height={150}
              className="rounded-lg -rotate-[20deg] -mt-16 mb-4"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col items-start gap-3">
            <FeatureCard
              src={"/assets/icon_1.png"}
              title="Vitamins"
              description="Increased vitamins and minerals in your diet"
            />
            <FeatureCard
              src={"/assets/icon_2.png"}
              title="Weight Loss"
              description="Find scientifically proven solutions"
            />
            <FeatureCard
              src={"/assets/icon_3.png"}
              title="Functional Foods"
              description="From protein powders to baby formula"
            />
          </div>
        </section>
      </section>
  )
}

export default VitaminComponent