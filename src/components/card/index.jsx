const CardComponent = ({ productData: { img, title, desc, type, price } }) => (
  <div className="w-72 rounded overflow-hidden shadow-lg mb-6">
    <figure className="w-full h-48">
      <img className="w-full h-full" src={img[0]} alt={`${title}`} />
    </figure>
    <div className="flex flex-col px-6 py-4">
      <div className="text-gray-600 font-bold text-base mb-2 truncate">
        {title}
      </div>
      <p className="h-16 text-gray-500 text-sm mb-2 scrollbar-default overflow-auto">
        {desc}
      </p>
      <p className="text-base font-bold">Price: ${price}</p>
    </div>
  </div>
);

export default CardComponent
