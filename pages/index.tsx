import { useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import ReviewStar from "../components/ReviewStar";
import { Datas } from "../json/Datas";
import { fiexdSentence } from "../json/fixedSentence";

const Home: NextPage = () => {
  const ranking = Datas.slice(0, 100);

  return (
    <Layout
      title={`${fiexdSentence.date}H-NEXTでエロアニメが大量配信中｜人気作品をまとめました`}
      description={`${fiexdSentence.hnext}で見放題の人気作品を毎月チェック！人気作品を一括で確認するのにおすすめです。`}
      keyword={fiexdSentence.keywords}
      url={`${fiexdSentence.url}/`}
      type="website"
    >
      <h1 className="text-xl sm:text-2xl text-gray-600">
        {`${fiexdSentence.date}H-NEXTでエロアニメが大量配信中｜人気作品をまとめました`}
      </h1>
      <div className="flex flex-col justify-center items-center py-4 cursor-pointer">
        <span className="py-1 text-sm">＼H-NEXTとは？／</span>
        <a
          className="py-3 px-8 text-xl text-white bg-pink-500 hover:bg-pink-400 rounded transition"
          href={fiexdSentence.affiliateLink}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          詳しくはこちらから
        </a>
      </div>
      <div className="my-16 text-lg">{`現在のエロアニメ作品数：${Datas.length}本`}</div>
      <h2 className="text-3xl">H-NEXTで見れるエロアニメランキングTOP100！</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 w-11/12">
        {ranking.map((content, index) => {
          return (
            <div key={content.forUrlNumber}>
              <div className="flex flex-col justify-center items-center">
                <span className="inline-block py-2 px-8 text-xl text-white bg-pink-400 rounded">{`${
                  index + 1
                }位`}</span>
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
              <Link href={`/posts/${content.forUrlNumber}`} passHref>
                <a>
                  <h3 className="py-1 truncate">{content.title}</h3>
                </a>
              </Link>
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
      <div className="flex flex-col justify-center items-center py-4 cursor-pointer">
        <span className="py-1 text-sm">{fiexdSentence.microCopy}</span>
        <a
          className="py-3 px-8 text-xl text-white bg-pink-500 hover:bg-pink-400 rounded transition"
          href={fiexdSentence.affiliateLink}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          エロアニメをもっと見る
        </a>
      </div>
    </Layout>
  );
};

export default Home;
