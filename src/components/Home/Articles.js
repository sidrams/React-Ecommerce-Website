import { BsDot } from "react-icons/bs";
function Articles() {
    const articles = [
        {
            url: "https://dummyimage.com/600x400",
            title: 'Best Summer Outfit Style',
            date: '14 Feb',
            edition: 'Livina Style',
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            url: "https://dummyimage.com/600x400",
            title: 'Best Summer Outfit Style',
            date: '14 Feb',
            edition: 'Livina Style',
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            url: "https://dummyimage.com/600x400",
            title: 'Best Summer Outfit Style',
            date: '14 Feb',
            edition: 'Livina Style',
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            url: "https://dummyimage.com/600x400",
            title: 'Best Summer Outfit Style',
            date: '14 Feb',
            edition: 'Livina Style',
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        
    ]

    return (
        
        <div className='bg-gray-100 p-24'>
            <div className="flex justify-between px-4">
                <h2 className="lg:w-1/2 font-bold text-5xl leading-[120%] text-[#1A242D] tracking-wide text-left mb-11">
                    Get Better Insights from Our Articles
                </h2>
                <a className="mt-10 text-[#F86338] inline-flex items-center font-bold">
                    <p>
                        See more
                    </p>
                </a>
            </div>
            <div className="flex flex-wrap">
                {articles.map((article) => (
                    <div className="w-1/2 p-4">
                        <img alt="feature" class="object-cover object-center m-auto" src={article.url} />
                        <h4 className="text-3xl font-bold my-4 text-[#11142D]">{article.title}</h4>
                        <p className="flex items-center font-bold text-[#515151]">{article.date} <BsDot/> {article.edition} </p>
                        <p className="text-[#9A9AB0] my-4">{article.text}</p>
                        <a className=" text-[#F86338] inline-flex items-center font-bold">Explore more</a>
                    </div>
                ))}
            </div>

        </div>
    );
  }
  
  export default Articles;
  