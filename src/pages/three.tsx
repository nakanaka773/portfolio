import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

export default function three() {
  return (
    <div>
        <Header />
        <div className='flex items-center mx-8 my-12'>
        <Image src="/three.png" width={90} height={90} alt="Picture of the author" />
        <h1 className='text-center text-3xl m-8'>三色配色</h1>
        </div>
        <h2  className="border-4 border-solid border-y-cyan-500 mx-8 pl-4 py-4 text-xl">概要</h2>
        <p className="mx-8 pl-4 py-4">３色の配色をランダムで提案してくれるアプリです。</p>
        <h2  className="border-4 border-solid border-y-cyan-500 mx-8 pl-4 py-4 text-xl">３色の配色</h2>
        <p className="mx-8 pl-4 py-4">何かを作るときに、３色の組み合わせで作るといいといいます。そんな時に保存しておける便利なアプリです。</p>
        <h2  className="border-4 border-solid border-y-cyan-500 mx-8 pl-4 py-4 text-xl">ランダム提案ボタン</h2>
        <p className="mx-8 pl-4 py-4">自由な組み合わせで３色を提案してくれます。</p>
        <h2  className="border-4 border-solid border-y-cyan-500 mx-8 pl-4 py-4 text-xl">RGBスライダー</h2>
        <p className="mx-8 pl-4 py-4">RGBのスライダーで簡単に色を調整できます。</p>
    </div>
  )
}
