import Link from 'next/link';

const data : Array<string> = [
    `We collect the content,  communications and other information you provide when you use our  products, including when you sign up for an account, create or share  content, and message or communicate with others.`,
    `This can include  information in or about the content you provide (like metadata), such as  the location of a photo or the date a file was created. It can also  include what you see through features we provide, such as our camera, so  we can do things like suggest masks and filters that you might like, or  give you tips on using camera formats. Our systems automatically  process content and communications you and others provide to analyze  context and what's in them for the purpose of great user experience.`,
    `We  also receive and analyze content, communications and information that  other people provide when they use our products. Enjoy with. This can  include information about you, such as when others share or comment on a  photo of you, send a message to you, or upload, sync or import your  contact information.
    We collect information about how you use our  Products, such as the types of content you view or engage with; the  features you use; the actions you take; the people or accounts you  interact with; and the time, frequency and duration of your activities.  For example, we log when you're using and have last used our Products,  and what posts and other content you view on our platforms. We also  collect information about how you use features like our camera.`,
    `If  you use our Products for purchase or any other financial transactions,  we collect information about the purchase or transaction. This includes  payment information, such as your credit or debit card number and other  card information; other account and authentication information; and  billing, shipping and contact details.`,
    `All these details are  stored in our database and are used for improving user experience such  as when the user is making any transaction again then we suggest to use  the same debit or credit card to ensure hassle free experience for the  user.`,
    `We collect information about the people, pages, accounts,  hashtags and groups you are connected to and how you interact with them  across our platforms, such as people you communicate with the most or  groups you are part of. We also collect contact information if you  choose to upload, sync or import it from a device (such as an address  book or call log or SMS log history), which we use for things like  helping you and others find people you may know.`,
]

const Desclaimer = () => {
  return (
    <div className="mt-[50px] flex flex-col gap-[50px] h-auto w-full">
     

              <div className="container flex flex-col gap-7 max-w-[550px] sm:max-w-full px-4">
              <div className="flex flex-row gap-2 justify-center items-center">
              <Link href="/" className="font-regular text-sm text-red-400 hover:underline">
            Home
          </Link>
          /
          <p className="text-sm font-semibold opacity-70">Disclaimer</p>
              </div>
             </div>
    
      <div className='container px-6 sm:px-[50px] md:px-[120px] lg:px-[187px]'>
        <div className='flex flex-col gap-10 max-w-full'>
          {data.map((i, index) => (
            <p key={index} className='text-sm'>{i}</p>
          ))}
        </div>
      </div>
    </div>
    )
}

export default Desclaimer;