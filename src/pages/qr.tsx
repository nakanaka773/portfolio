import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

export default function qr() {
  return (
    <div>
        <Header />
        <div className='flex items-center mx-8 my-12'>
        <Image src="/qr.png" width={90} height={90} alt="Picture of the author" />
        <h1 className='text-center text-3xl m-8'>GA4✖︎QR生成</h1>
        </div>
        <h2  className="border-4 border-solid border-y-cyan-500 mx-8 pl-4 py-4 text-xl">概要</h2>
        <p className="mx-8 pl-4 py-4">GA４の計測タグのためのURLを作成し、QRコードを生成してくれるアプリです。</p>
        <h2  className="border-4 border-solid border-y-cyan-500 mx-8 pl-4 py-4 text-xl">簡単操作</h2>
        <p className="mx-8 pl-4 py-4">入力して、ボタンを押すだけで簡単にQRコードが作れます。</p>
        <h2  className="border-4 border-solid border-y-cyan-500 mx-8 pl-4 py-4 text-xl">コピー機能</h2>
        <p className="mx-8 pl-4 py-4">リンクもコピーできるので、SNSで便利に活用できます。</p>
        <h2  className="border-4 border-solid border-y-cyan-500 mx-8 pl-4 py-4 text-xl">カメラロールに保存</h2>
        <p className="mx-8 pl-4 py-4">ワンタッチで簡単にQRコードをカメラロールへ作成してくれます。</p>
    </div>
  )
}