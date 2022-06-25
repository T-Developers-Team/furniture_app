import React from 'react'

const TestimonialComponent = ({
  testimonialData: { img, name, title, company, message },
}) => (
  <div className="p-2">
    <figure className="w-full flex justify-center items-center">
      <img className="w-1/4" src={img}/>
    </figure>
    <h4 className="text-center text-gray-200 text-xl mb-2">{name}</h4>
    <p className="text-center text-gray-300 text-sm mx-8">
      {title}, {company}
    </p>
    <hr className="my-6 mx-auto w-20"/>
    <p className="text-center text-gray-200 text-sm mx-8">{message}</p>
  </div>
);

export default TestimonialComponent
