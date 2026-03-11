import { defineRouteConfig } from "@medusajs/admin-sdk"
import { BookOpen } from "@medusajs/icons"
import { Container, Heading, Text } from "@medusajs/ui"

const pages = [
  {
    href: "/app/manual/getting-started",
    icon: "🚀",
    title: "はじめに：初期セットアップ",
    desc: "ログインから初期設定完了までの全手順",
    color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
  },
  {
    href: "/app/manual/products",
    icon: "📦",
    title: "商品管理",
    desc: "商品の登録・編集・削除・在庫管理の手順",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
  },
  {
    href: "/app/manual/collections",
    icon: "🏷️",
    title: "コレクション・カテゴリ管理",
    desc: "商品のグループ分け・分類の設定手順",
    color: "bg-cyan-50 border-cyan-200 hover:bg-cyan-100",
  },
  {
    href: "/app/manual/orders",
    icon: "🛒",
    title: "注文管理",
    desc: "注文確認から発送完了までの処理手順",
    color: "bg-green-50 border-green-200 hover:bg-green-100",
  },
  {
    href: "/app/manual/customers",
    icon: "👥",
    title: "顧客管理",
    desc: "顧客情報の確認・編集の手順",
    color: "bg-teal-50 border-teal-200 hover:bg-teal-100",
  },
  {
    href: "/app/manual/regions",
    icon: "🌏",
    title: "地域・配送・決済の設定",
    desc: "リージョン、配送方法、決済方法の設定手順",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
  },
  {
    href: "/app/manual/promotions",
    icon: "🎁",
    title: "プロモーション・割引",
    desc: "割引コード・キャンペーンの作成手順",
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
  },
  {
    href: "/app/manual/daily-ops",
    icon: "📋",
    title: "日常運用チェックリスト",
    desc: "毎日・毎週・毎月やるべきことのリスト",
    color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100",
  },
  {
    href: "/app/manual/troubleshooting",
    icon: "🔧",
    title: "トラブルシューティング",
    desc: "よくある問題と解決方法",
    color: "bg-red-50 border-red-200 hover:bg-red-100",
  },
]

const ManualIndex = () => (
  <Container className="divide-y p-0">
    <div className="px-6 py-4">
      <Heading level="h1">マニュアル・ガイド</Heading>
      <Text className="text-ui-fg-subtle mt-1">
        eccart 管理画面の操作手順書です。各項目をクリックすると、画面キャプチャ付きのステップバイステップガイドが開きます。
      </Text>
    </div>
    <div className="px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((p) => (
          <a
            key={p.href}
            href={p.href}
            className={`block p-5 border rounded-xl transition-all ${p.color}`}
          >
            <div className="text-3xl mb-3">{p.icon}</div>
            <h2 className="text-base font-semibold text-ui-fg-base mb-1">
              {p.title}
            </h2>
            <p className="text-sm text-ui-fg-subtle">{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  </Container>
)

export const config = defineRouteConfig({
  label: "マニュアル",
  icon: BookOpen,
})

export default ManualIndex
