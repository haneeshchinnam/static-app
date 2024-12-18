import React from 'react'
import ContactCard from '../ContactCard'
import PhoneIcon from '../PhoneIcon'
import LocationIcon from '../LocationIcon'
import MailIcon from '../MailIcon'
import Header from '../Header'

const Footer = () => {
  return (
    <footer className="bg-deepTeal justify-center p-6">
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8 px-8 sm:px-8 md:lg:px-16">
        <ContactCard description="+974 3118 1843" label="Phone Number">
          <PhoneIcon color="#ffffff" size="40" />
        </ContactCard>
        <ContactCard description="Ambassador Street, Zone 61" label="Office Location">
          <LocationIcon color="#ffffff" size="40" />
        </ContactCard>
        <ContactCard description="Elbithcqhr@gmail.com" label="Email Address">
          <MailIcon color="#ffffff" size="40" />
        </ContactCard>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8 px-8 sm:px-8 md:lg:px-16 items-center pt-8">
          <div className="bg-white w-44 pl-2">
          <Header />
          </div>
          <p className="text-white text-xs px-1">Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find necessary vitamins.</p>
        </section>
        <section className="flex gap-2 px-8 sm:px-8 md:lg:px-16 pt-8">
        <LocationIcon color="#ffffff" size="15" />
          <p className="text-white text-xs">Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
        </section>
      </footer>
  )
}

export default Footer