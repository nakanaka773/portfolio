import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

export default function onetodo() {
  return (
    <div>
        <Header />
        <div className='flex items-center mx-8 my-12'>
        <Image src="/onlytodo.png" width={90} height={90} alt="Picture of the author" />
        <h1 className='text-center text-3xl m-8'>1 Todo</h1>
        </div>
        <h2  className="border-4 border-solid border-y-cyan-500 mx-8 pl-4 py-4 text-xl">概要</h2>
        <p className="mx-8 pl-4 py-4">たくさんのやるべきことに追いかけられてしまうあなたにおすすめなTodoアプリです。<br/>ホーム画面には1つだけのTodoを表示し、たくさんのTodoを気にすることなく、1つのTodoに集中することができます。</p>
        <h2  className="border-4 border-solid border-y-cyan-500 mx-8 pl-4 py-4 text-xl">1つだけを表示する</h2>
        <p className="mx-8 pl-4 py-4">Todoリストの中から、ランダムもしくは自分で選んだTodoを1つだけ表示します。</p>
        <h2  className="border-4 border-solid border-y-cyan-500 mx-8 pl-4 py-4 text-xl">ランダム提案ボタン</h2>
        <p className="mx-8 pl-4 py-4">Todoリストの中から、ランダムでTodoを選んでくれるので、優柔不断でも安心！</p>
        <h2  className="border-4 border-solid border-y-cyan-500 mx-8 pl-4 py-4 text-xl">残りのtodo</h2>
        <p className="mx-8 pl-4 py-4">Todoリスト一覧の残りのTodoの数もわかります！</p>
    </div>
  )
}
