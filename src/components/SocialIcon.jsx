const SocialIcon = ({ iconData, index, iconLst }) => (
    <svg
        key={iconData.id}
        width={iconData.width}
        height={iconData.height}
        viewBox={`0 0 ${iconData.width} ${iconData.height}`}
        xmlns="http://www.w3.org/2000/svg"   
        className={`w-[21px] h-[21px] object-contain cursor-pointer fill-white hover:fill-secondary ${index !== iconLst.length - 1 ? 'mr-6' : 'mr-0'}`}  
    >
        {iconData.path.map((path) => (
        <path d={path} />
        ))}
    </svg>
);


export default SocialIcon