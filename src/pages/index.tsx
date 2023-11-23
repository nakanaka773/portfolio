import Card from "@/components/Card";
import Header from "@/components/Header";
import MyData from "@/components/MyData";
import Sidebar from "@/components/Sidebar";
import Link from "../../node_modules/next/link";


export default function Home() {
  return (
    <main>
      <Header />
      <MyData />
      <div className="md:grid grid-cols-3">
                <Card href="./onetodo" title="1 Todo" text="1つだけのTodoを表示するTodoアプリです。たくさんのTodoに押しつぶされることなく、一歩ずつ着実にtodoをこなせます。"  />
          </div>
    </main>
  )
}
