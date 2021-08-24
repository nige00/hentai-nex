import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import ReviewStar from "../components/ReviewStar";
import { Datas } from "../json/Datas";
import { fiexdSentence } from "../json/fixedSentence";

const Allpages: NextPage = () => {
  const ondemandDatas = Datas.filter((data) => {
    return data.ondemand == "見放題";
  });

  return (
    <Layout
      title={`${fiexdSentence.date}H-NEXTで見放題対象になっているエロアニメ作品一覧`}
      description={`存在する全てのページを表示`}
      keyword={fiexdSentence.keywords}
      url={`${fiexdSentence.url}/posts`}
      type="article"
    >
      <h1 className="text-xl sm:text-2xl text-gray-600">{`${fiexdSentence.date}H-NEXTで見れる、見放題対象のエロアニメ作品【${ondemandDatas.length}件】`}</h1>
      <div className="py-4 sm:px-4">
        <p>{fiexdSentence.caution}</p>
      </div>
      <div className="flex flex-col justify-center items-center py-4 cursor-pointer">
        <span className="py-1 text-sm">{fiexdSentence.microCopy}</span>
        <a
          className="py-3 px-8 text-xl text-white bg-pink-500 hover:bg-pink-400 rounded transition"
          href={fiexdSentence.affiliateLink}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          H-NEXTで見る
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 w-11/12">
        {ondemandDatas.map((content, index) => {
          return (
            <div key={content.forUrlNumber}>
              <div className="flex flex-col justify-center items-center">
                <span className="inline-block py-2 px-8 text-xl text-white bg-pink-400 rounded">{`${
                  index + 1
                } / ${ondemandDatas.length}`}</span>
              </div>
              <div className="pt-4">
                <Link href={`/posts/${content.forUrlNumber}`} passHref>
                  <a>
                    <Image
                      src={`/package_images/${content.imgName}`}
                      alt={content.title}
                      width={828}
                      height={466}
                      objectFit="contain"
                    />
                  </a>
                </Link>
              </div>
              <h3 className="py-1 truncate">{content.title}</h3>
              <ReviewStar star={content.aveReviewPoint} />
              {content.paid == "----" ? (
                <p className="my-2">
                  <span className="py-1 px-2 text-white bg-green-600 rounded">
                    {content.ondemand}
                  </span>
                </p>
              ) : (
                <p className="my-2 ">
                  <span className="py-1 px-2 text-white bg-gray-400 rounded">
                    {content.ondemand}
                  </span>
                  <span className="pl-2">{content.paid}</span>
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Allpages;
