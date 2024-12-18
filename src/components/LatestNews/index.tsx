import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2022 Is Back",
    image: "/assets/blog3-450x580.jpg.png", // Replace with actual paths
  },
  {
    id: 2,
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2022 Is Back",
    image: "/assets/blog2-450x580.jpg.png",
  },
  {
    id: 3,
    date: "17 MAR",
    title: "Hac hendrerit mus nons semper suspendisse",
    image: "/assets/blog3-450x580.jpg.png",
  },
  {
    id: 4,
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2023 Is Back",
    image: "/assets/blog2-450x580.jpg.png",
  },
  {
    id: 5,
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2022 Is Back",
    image: "/assets/blog3-450x580.jpg.png", // Replace with actual paths
  },
  {
    id: 6,
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2022 Is Back",
    image: "/assets/blog2-450x580.jpg.png",
  },
  {
    id: 7,
    date: "17 MAR",
    title: "Hac hendrerit mus nons semper suspendisse",
    image: "/assets/blog3-450x580.jpg.png",
  },
  {
    id: 8,
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2023 Is Back",
    image: "/assets/blog2-450x580.jpg.png",
  },
];

const LatestNews = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h4 className="text-blue-600 uppercase font-semibold">Our Blog</h4>
          <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full justify-center">
          {blogPosts.map((post, index) =>
            index % 2 == 0 ? (
              <div key={post.id} className="flex flex-col gap-1.5 w-full">
                <div className="relative overflow-hidden rounded-lg p-4 flex justify-center">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={250}
                    height={(index/2) % 2 == 0 ? 250 : 200}
                    className={`${(index/2) % 2 !== 0 ? "h-[200px] object-fill" : "object-cover"} rounded-2xl`}
                    loading="lazy"
                  />
                  <div className="absolute top-0 flex flex-col justify-end p-4 z-50">
                    <span className="text-white bg-blue-600 px-3 py-1 rounded text-sm mb-2 w-20 top-7 rounded-r-xl">
                      {post.date}
                    </span>
                    <h3 className="text-white text-lg font-semibold mt-13">
                      {post.title}
                    </h3>
                  </div>
                </div>
                {index + 1 < blogPosts.length ? (
                  <div className="relative overflow-hidden rounded-lg p-4 flex justify-center">
                    <Image
                      src={blogPosts[index + 1].image}
                      alt={blogPosts[index + 1].title}
                      width={250}
                      height={(index/2) % 2 == 0 ? 200 : 250}
                      className={`${(index/2) % 2 === 0 ? "h-[200px] object-fill" : "object-cover"} rounded-2xl justify-center`}
                    />
                    <div className="absolute top-0 flex flex-col justify-end p-4 z-50">
                      <span className="text-white bg-blue-600 px-3 py-1 rounded text-sm mb-2 w-20 top-7 rounded-r-xl">
                        {blogPosts[index + 1].date}
                      </span>
                      <h3 className="text-white text-lg font-semibold mt-13">
                        {blogPosts[index + 1].title}
                      </h3>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
