import CreationDate from '../articles/creationDate';
import Image from 'next/image';

type BannerProps = {
  check: 'a' | 'b' | 'c';
  headingText?: string;
  profileImage?: string;
  profileName?: string;
  articleImage?: string;
  profileReadTime?: string;
  articleNumber?: any;
};

const Banner = ({
  check,
  headingText = "Sidebar has been collecting the best design links of the day since October 2012. It's maintained by",
  profileImage,
  profileName,
  articleImage,
  profileReadTime,
  articleNumber
}: BannerProps) => {
  return (
    <>
      {/* When check is 'a' */}
      {check === 'a' && (
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
          {/* Linear Gradient Background */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_60%)] bg-cover bg-center"></div>

          {/* Background Image */}
          <div className="absolute inset-0">
            <Image src="/banner2.png" alt="Banner Image" layout="fill" objectFit="cover" />
          </div>
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center p-4 lg:p-8">
            <h1 className="text-white font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-screen-lg">
              {headingText}
            </h1>
          </div>
        </div>
      )}

      {/* When check is 'b' */}
      {check === 'b' && (
        <div className="flex flex-col items-center gap-5 p-4 sm:p-6 md:p-8 lg:p-10">
          {/* Banner with Gradient */}
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px] w-full">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.6)_100%)] bg-cover bg-center"></div>
            <Image src="/banner2.png" alt="Banner Image" layout="fill" objectFit="cover" />
          </div>
          <h1 className="p-2 px-4 font-semibold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-screen-lg">
            {headingText}
          </h1>
        </div>
      )}

      {/* When check is 'c' */}
      {check === 'c' && (
        <div className="flex flex-col items-center gap-4 p-4 lg:p-8">
          {/* Heading */}
          <div className="px-[20px]">
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold max-w-screen-md px-9">
              {headingText}
            </h1>
          </div>

          {/* Circle Image with Name and Date */}
          <div className="flex items-center gap-4 mt-4">
            {profileImage && (
              <div className="w-5 h-5 md:w-7 md:h-7 rounded-full overflow-hidden bg-gray-400">
                <Image
                  src={profileImage}
                  alt={profileName || 'Profile'}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            )}

            {/* Name and Date */}
            <div className="flex flex-row items-center gap-2">
              {profileName && <div className="font-semibold">{profileName}   |   </div>} 
              {profileReadTime && <div className="text-sm text-gray-500">{profileReadTime}   |   </div>}
              {articleNumber && <div className="text-sm text-gray-500">{<CreationDate articleNumber={articleNumber} />}</div>}
            </div>
          </div>

          {/* Banner with Gradient */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[400px] w-full max-w-screen-lg">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.6)_100%)] bg-cover bg-center"></div>

            <Image src="/banner2.png" alt="Banner Image" layout="fill" objectFit="cover" />
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
