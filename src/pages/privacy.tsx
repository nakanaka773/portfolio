import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'

export default function privacy() {
  return (
    <div>
        <Header />
        <h1 className='text-center text-3xl m-8'>プライバシーポリシー</h1>
        <h2  className="border-4 border-solid border-y-gray-500 mx-8 pl-4 py-4 text-xl">個人情報について</h2>
        <p className="mx-8 pl-4 py-4">本サービスでは、利用者の個人情報をデータ保存のみに利用します。第三者に個人を特定できる情報を提供することはありません。個人情報の管理には細心の注意を払い、以下に掲げた通りに扱います。本サービスではアプリの利便性向上のため、匿名で、個人を特定できない範囲に細心の注意を払い、アクセス解析をしております。例えば、アプリがクラッシュした時、どの部分でクラッシュしたかを匿名で送信し、バグの素早い修正に役立たせております。 また、デバイスやアプリバージョンの使用率、特定の機能の使用率などを解析し、アプリの改善に役立てています。(例えば、使われていない機能はシンプルにするため省くなど)</p>
        <h2  className="border-4 border-solid border-y-gray-500 mx-8 pl-4 py-4 text-xl">免責事項</h2>
        <p className="mx-8 pl-4 py-4">本サービスのコンテンツにつきまして、古くなっていることもございます。<br/>当アプリのご利用および掲載された内容について生じた障害等の一切の責任は追いかねますことをご了承ください。</p>
        <h2  className="border-4 border-solid border-y-gray-500 mx-8 pl-4 py-4 text-xl">お問い合わせ</h2>
        <p className="mx-8 pl-4 py-4">本サービスに関するお問い合わせは「hirayama773@icloud.com」までご連絡ください。</p>
    </div>
  )
}
