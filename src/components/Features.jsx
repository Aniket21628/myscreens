import { features } from "./CardDetails"

export default function Features() {
    return (
        <div className="w-full h-full bg-gray-50">
            <div className="mx-[205px] mt-[150px] ">
        <div className="grid lg:grid-cols-2 gap-[168px] mb-[100px]">
          <h1 className="font-montserrat font-bold text-custom-60 leading-custom-73 text-[#2E2F2E]">
            Our
            <span className="text-[#FF6812]"> Key Features </span>
            & Capabilities
          </h1>
          <p className="text-[#888987] font-semibold font-nunito text-custom-24 leading-custom-32">
          Harnessing the power of AI and cloud technologies, our advanced solutions are designed to proactively identify and neutralize threats before they can compromise your digital assets. Delivering adaptive security that evolves with your business, ensuring a resilient and secure digital landscape.
          </p>
      </div>
            <div className="grid lg:grid-cols-12 gap-[32px] mb-[200px]">
        {features.map((feature, index) => (
        <div
          key={index}
          className=" bg-[#FCF7F0] col-span-4 w-[482px] h-[386.01px] rounded-custom-40 p-[35px] transition-colors duration-300 hover:bg-[#2E2F2E] group relative"
        >
    <div className="mb-24 relative h-12 w-12 ">
      <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        {feature.defaultSvg}
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {feature.hoverSvg}
      </div>
    </div>
    <h3 className="text-3xl text-[#2E2F2E] font-montserrat font-semibold mb-[20px] group-hover:text-[#FCF7F0] transition-colors duration-300">
      {feature.title}
    </h3>
    <p className="text-muted-foreground font-medium font-nunito text-xl text-[#888987] group-hover: transition-colors duration-300">
      {feature.description}
    </p>
  </div>
))}
</div>     
</div> 
      </div>
    )
}