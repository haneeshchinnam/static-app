import React from 'react'
import IngredientsHeader from '../IngredientsHeader'
import ImageCard from '../ImageCard'

const IngredientComponent = () => {
  return (
    <section className="flex w-full justify-center mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-3/4 justify-center">
          <IngredientsHeader />
          <ImageCard
            description={"Niacin for healthy gut and skin"}
            image="/assets/bn2-2.jpg.png"
            title="Vitamin B3"
          />
          <ImageCard
            description={"Boost energy and support muscle function"}
            image="/assets/bn2-3.jpg.png"
            title="Magnesium"
          />
          <ImageCard
            description={"For smooth, suple and soft skin!"}
            image="/assets/bn2-4.jpg.png"
            title="Hyaluronic Acid"
          />
          <ImageCard
            description={"Invigorate your gut microbiome"}
            image="/assets/bn2-5.jpg.png"
            title="Lactobacillus"
          />
          <ImageCard
            description={"Vitamin C as ascorbic acid"}
            image="/assets/h2-b1.jpg.png"
            title="Vitamin C"
          />
        </div>
      </section>
  )
}

export default IngredientComponent