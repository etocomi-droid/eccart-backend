import {
  ManualPage, Step, ScreenMockup, MockTable,
  Result, Tip, defaultSidebar,
} from "../../../components/manual/ui"

const CustomersPage = () => (
  <ManualPage
    title="顧客管理"
    goal="顧客情報の確認・検索・注文履歴の確認方法をマスターする"
  >
    <Step
      number={1}
      title="Customers メニューを開く"
      description="左サイドバーの「Customers」をクリックします。"
    >
      <ScreenMockup
        sidebar={defaultSidebar}
        activeMenu="Customers"
        highlight="Customers"
        header="customers"
      >
        <div>
          <div className="text-lg font-semibold mb-4">Customers</div>
          <div className="border border-ui-border-base rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-ui-bg-subtle">
                <tr>
                  <th className="text-left p-3">名前</th>
                  <th className="text-left p-3">メール</th>
                  <th className="text-left p-3">注文数</th>
                  <th className="text-left p-3">登録日</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t hover:bg-ui-bg-subtle cursor-pointer">
                  <td className="p-3 font-medium">田中 花子</td>
                  <td className="p-3 text-ui-fg-muted">hanako@example.com</td>
                  <td className="p-3">3</td>
                  <td className="p-3 text-ui-fg-muted">2026/02/15</td>
                </tr>
                <tr className="border-t hover:bg-ui-bg-subtle cursor-pointer">
                  <td className="p-3 font-medium">山田 太郎</td>
                  <td className="p-3 text-ui-fg-muted">taro@example.com</td>
                  <td className="p-3">1</td>
                  <td className="p-3 text-ui-fg-muted">2026/03/01</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ScreenMockup>
      <Tip>
        上部の検索バーで名前やメールアドレスで顧客を検索できます。
      </Tip>
    </Step>

    <Step
      number={2}
      title="顧客をクリックして詳細を確認する"
      description="顧客の行をクリックすると、詳細情報と注文履歴が表示されます。"
    >
      <ScreenMockup header="customers/cus_01">
        <div className="max-w-2xl space-y-4">
          <div className="text-lg font-semibold">田中 花子</div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-ui-bg-subtle rounded-lg p-3">
              <div className="text-xs text-ui-fg-muted mb-1">基本情報</div>
              <div className="space-y-1 text-sm">
                <div><span className="text-ui-fg-muted">名前：</span>田中 花子</div>
                <div><span className="text-ui-fg-muted">メール：</span>hanako@example.com</div>
                <div><span className="text-ui-fg-muted">電話：</span>090-1234-5678</div>
              </div>
            </div>
            <div className="bg-ui-bg-subtle rounded-lg p-3">
              <div className="text-xs text-ui-fg-muted mb-1">統計</div>
              <div className="space-y-1 text-sm">
                <div><span className="text-ui-fg-muted">注文数：</span><span className="font-semibold">3件</span></div>
                <div><span className="text-ui-fg-muted">合計金額：</span><span className="font-semibold">¥15,640</span></div>
                <div><span className="text-ui-fg-muted">登録日：</span>2026/02/15</div>
              </div>
            </div>
          </div>

          <div className="bg-ui-bg-subtle rounded-lg p-3">
            <div className="text-xs text-ui-fg-muted mb-2">注文履歴</div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="pb-2">注文番号</th>
                  <th className="pb-2">日時</th>
                  <th className="pb-2">合計</th>
                  <th className="pb-2">ステータス</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-2">#1001</td>
                  <td className="py-2">2026/03/11</td>
                  <td className="py-2">¥4,680</td>
                  <td className="py-2"><span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Fulfilled</span></td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">#0985</td>
                  <td className="py-2">2026/02/28</td>
                  <td className="py-2">¥6,980</td>
                  <td className="py-2"><span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Fulfilled</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-ui-bg-subtle rounded-lg p-3">
            <div className="text-xs text-ui-fg-muted mb-2">登録住所</div>
            <div className="text-sm">
              〒150-0001 東京都渋谷区神宮前1-2-3 ○○マンション 101号
            </div>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Result>
      <div className="space-y-1">
        <div>✓ 顧客一覧を確認できた</div>
        <div>✓ 顧客の詳細情報（名前・メール・電話）を確認できた</div>
        <div>✓ 顧客の注文履歴を確認できた</div>
        <div>✓ 登録住所を確認できた</div>
      </div>
    </Result>

    <MockTable
      headers={["確認できる情報", "内容", "活用方法"]}
      rows={[
        ["名前・メール", "顧客の連絡先", "問い合わせ対応時に参照"],
        ["注文数・合計金額", "購入履歴の統計", "リピーター・VIP顧客の把握"],
        ["注文履歴", "過去の注文一覧", "クレーム対応時に過去の注文を確認"],
        ["登録住所", "配送先住所", "住所不備の確認"],
      ]}
    />

    <Tip>
      顧客はストアフロントから自分でアカウントを作成できます。
      アカウントなしでもゲスト購入は可能です。
    </Tip>
  </ManualPage>
)

export default CustomersPage
