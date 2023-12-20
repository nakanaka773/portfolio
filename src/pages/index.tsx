import Card from "@/components/Card";
import Header from "@/components/Header";
import MyData from "@/components/MyData";
import Sidebar from "@/components/Sidebar";
import Link from "../../node_modules/next/link";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <Header />
      <MyData />
      <div className="md:grid grid-cols-3">
                <Card image="/onlytodo.png" href="./onetodo" title="1 Todo" text="1つだけのTodoを表示するTodoアプリです。たくさんのTodoに押しつぶされることなく、一歩ずつ着実にtodoをこなせます。"  />
                <Card image="/three.png" href="./three" title="３色配色" text="３色の配色を簡単に提案してくれるアプリです。ランダムに提案してくれます。"  />
                <Card image="/qr.png" href="./qr" title="GA4✖︎QR生成" text="GA4のタグに合うようなリンクを生成し、QRコードを生成してくれます。"  />
          </div>
    </main>
  )
}
