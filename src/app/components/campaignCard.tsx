import Image from 'next/image';

interface CampaignCardProps {
    title: string;
    count: number;
    bordercolor: string;
    percentage: string;
    iconSrc: string;
    arrowSrc: string;
  }
  
  const CampaignCard: React.FC<CampaignCardProps> = ({
    title,
    count,
    bordercolor,
    percentage,
    iconSrc,
    arrowSrc,
}) => {
  return (
    <div className={`flex flex-row max-w-[346px] w-full border-[2px] rounded-[12px] ${bordercolor} shadow-custom_shadow px-[20px]`}>
      <div className="pt-[20px] pr-4">
        <div className="border py-[10px] px-[10px] rounded-[8px] border-[#E9EAEB] shadow-custom-light">
          <Image src={iconSrc} height={20} width={20} alt="icon" />
        </div>
      </div>
      <div className="max-w-[250px] w-full my-[20px] space-y-2">
        <div className={`font-plus_jakarta_sans text-h5 font-semibold text-lightGray`}>
          {title}
        </div>
        <div className="flex justify-between">
          <div className={`font-plus_jakarta_sans text-h1 font-semibold text-darkGray`}>
            {count}
          </div>
          <div className="my-[7px]">
            <div className="flex flex-row py-[2px] px-[6px] border border-[#D5D7DA] rounded-[6px] items-center justify-center space-x-1 shadow-custom_shadow">
              <div>
                <Image src={arrowSrc} height={12} width={12} alt="arrow icon" />
              </div>
              <p className={`font-inter text-h5 text-center font-medium text-midgray`}>
                {percentage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;
