import {
  ManualPage, Step, ScreenMockup, MockButton, MockField, MockTable,
  Result, Tip, Warning, defaultSidebar,
} from "../../../components/manual/ui"

const OrdersPage = () => (
  <ManualPage
    title="注文管理"
    goal="注文が入ってから発送完了するまでの全手順をマスターする"
  >
    {/* 全体の流れ */}
    <div className="bg-ui-bg-subtle rounded-lg p-4 mb-2">
      <div className="font-semibold text-ui-fg-base mb-3">注文処理の全体フロー</div>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        {[
          { label: "注文受付", icon: "📨", color: "bg-blue-100 text-blue-800" },
          { label: "→", icon: "", color: "" },
          { label: "内容確認", icon: "🔍", color: "bg-yellow-100 text-yellow-800" },
          { label: "→", icon: "", color: "" },
          { label: "入金確認", icon: "💰", color: "bg-green-100 text-green-800" },
          { label: "→", icon: "", color: "" },
          { label: "梱包・出荷", icon: "📦", color: "bg-purple-100 text-purple-800" },
          { label: "→", icon: "", color: "" },
          { label: "発送完了", icon: "🚚", color: "bg-teal-100 text-teal-800" },
          { label: "→", icon: "", color: "" },
          { label: "お届け完了", icon: "✅", color: "bg-emerald-100 text-emerald-800" },
        ].map((item, i) =>
          item.color ? (
            <span key={i} className={`${item.color} px-3 py-1.5 rounded-lg font-medium`}>
              {item.icon} {item.label}
            </span>
          ) : (
            <span key={i} className="text-ui-fg-muted">→</span>
          )
        )}
      </div>
    </div>

    <Step
      number={1}
      title="注文一覧を開く"
      description="左サイドバーの「Orders」をクリックして、注文一覧を表示します。"
    >
      <ScreenMockup
        sidebar={defaultSidebar}
        activeMenu="Orders"
        highlight="Orders"
        header="orders"
      >
        <div>
          <div className="text-lg font-semibold mb-4">Orders</div>
          <div className="border border-ui-border-base rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-ui-bg-subtle">
                <tr>
                  <th className="text-left p-3">注文番号</th>
                  <th className="text-left p-3">日時</th>
                  <th className="text-left p-3">顧客</th>
                  <th className="text-left p-3">合計</th>
                  <th className="text-left p-3">支払い</th>
                  <th className="text-left p-3">発送</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t bg-yellow-50">
                  <td className="p-3 font-medium">#1001</td>
                  <td className="p-3">2026/03/11 10:30</td>
                  <td className="p-3">田中 花子</td>
                  <td className="p-3 font-medium">¥4,680</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Paid</span></td>
                  <td className="p-3"><span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">Not fulfilled</span></td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">#1000</td>
                  <td className="p-3">2026/03/10 15:22</td>
                  <td className="p-3">山田 太郎</td>
                  <td className="p-3 font-medium">¥8,960</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Paid</span></td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Fulfilled</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <Tip>
            黄色背景の行（Not fulfilled = 未発送）が処理が必要な注文です。
          </Tip>
        </div>
      </ScreenMockup>
    </Step>

    <Step
      number={2}
      title="注文をクリックして詳細を確認する"
      description="処理したい注文の行をクリックすると、注文詳細画面が開きます。"
    >
      <ScreenMockup header="orders/1001">
        <div className="space-y-4 max-w-2xl">
          <div className="text-lg font-semibold">Order #1001</div>

          {/* summary */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-ui-bg-subtle rounded-lg p-3">
              <div className="text-xs text-ui-fg-muted mb-1">顧客情報</div>
              <div className="font-medium text-sm">田中 花子</div>
              <div className="text-xs text-ui-fg-muted">hanako@example.com</div>
              <div className="text-xs text-ui-fg-muted">090-1234-5678</div>
            </div>
            <div className="bg-ui-bg-subtle rounded-lg p-3">
              <div className="text-xs text-ui-fg-muted mb-1">配送先</div>
              <div className="text-sm">
                〒150-0001<br />
                東京都渋谷区神宮前1-2-3<br />
                ○○マンション 101号
              </div>
            </div>
          </div>

          {/* items */}
          <div className="bg-ui-bg-subtle rounded-lg p-3">
            <div className="text-xs text-ui-fg-muted mb-2">注文商品</div>
            <div className="flex items-center gap-3 py-2">
              <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-xs">IMG</div>
              <div className="flex-1">
                <div className="font-medium text-sm">オーガニックコットンTシャツ</div>
                <div className="text-xs text-ui-fg-muted">M / ホワイト × 1</div>
              </div>
              <div className="font-medium text-sm">¥3,980</div>
            </div>
            <div className="border-t pt-2 mt-2 text-sm">
              <div className="flex justify-between"><span>小計</span><span>¥3,980</span></div>
              <div className="flex justify-between"><span>送料</span><span>¥700</span></div>
              <div className="flex justify-between font-bold mt-1"><span>合計</span><span>¥4,680</span></div>
            </div>
          </div>

          {/* payment */}
          <div className="bg-ui-bg-subtle rounded-lg p-3">
            <div className="text-xs text-ui-fg-muted mb-2">支払い状況</div>
            <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Paid（支払い済み）</span>
              <span className="text-sm text-ui-fg-muted">Stripe - Visa ****4242</span>
            </div>
          </div>
        </div>
      </ScreenMockup>
      <div className="bg-ui-bg-subtle rounded-lg p-3 text-sm">
        <strong>確認すべきポイント：</strong>
        <ul className="list-disc list-inside mt-1 space-y-1 text-ui-fg-subtle">
          <li>注文商品・数量は正しいか</li>
          <li>配送先住所に不備はないか（番地、部屋番号など）</li>
          <li>支払いステータスが「Paid（支払い済み）」か</li>
          <li>手動決済（銀行振込）の場合は入金を確認してから次に進む</li>
        </ul>
      </div>
    </Step>

    <Step
      number={3}
      title="商品を梱包する"
      description="注文内容を確認したら、実際に商品を梱包します。（管理画面の操作はありません）"
    >
      <div className="bg-ui-bg-subtle rounded-lg p-4">
        <div className="font-semibold mb-2">梱包チェックリスト</div>
        <ul className="space-y-2 text-sm">
          {[
            "注文内容と商品が一致しているか確認",
            "商品に傷や汚れがないか検品",
            "緩衝材で商品を保護",
            "納品書を同梱（必要な場合）",
            "配送伝票を貼付",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-5 h-5 rounded border border-ui-border-base bg-white flex items-center justify-center text-xs">☐</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Step>

    <Step
      number={4}
      title="発送処理を行う（Create Fulfillment）"
      description="商品を発送したら、管理画面で発送処理を行います。"
    >
      <ScreenMockup header="orders/1001">
        <div className="max-w-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold">Order #1001 - Fulfillment</div>
          </div>
          <MockButton primary highlight>Create Fulfillment（発送処理）</MockButton>

          <div className="mt-4 border border-ui-border-base rounded-lg p-4 bg-white">
            <div className="font-medium text-sm mb-3">発送情報を入力</div>
            <MockField
              label="Tracking Number（追跡番号）"
              value="1234-5678-9012"
              hint="配送業者から発行された追跡番号を入力してください"
            />
            <div className="mt-3">
              <MockButton primary highlight>Submit（送信）</MockButton>
            </div>
          </div>
        </div>
      </ScreenMockup>
      <Tip>
        追跡番号を入力すると、お客様が配送状況を確認できるようになります。必ず入力しましょう。
      </Tip>
    </Step>

    <Step
      number={5}
      title="発送完了を確認する"
      description="発送処理後、注文のステータスが更新されていることを確認します。"
    >
      <ScreenMockup sidebar={defaultSidebar} activeMenu="Orders" header="orders">
        <div>
          <div className="text-lg font-semibold mb-4">Orders</div>
          <div className="border border-ui-border-base rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-ui-bg-subtle">
                <tr>
                  <th className="text-left p-3">注文番号</th>
                  <th className="text-left p-3">顧客</th>
                  <th className="text-left p-3">合計</th>
                  <th className="text-left p-3">支払い</th>
                  <th className="text-left p-3">発送</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t bg-green-50">
                  <td className="p-3 font-medium">#1001</td>
                  <td className="p-3">田中 花子</td>
                  <td className="p-3 font-medium">¥4,680</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Paid ✓</span></td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Fulfilled ✓</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Result>
      <div className="space-y-1">
        <div>✓ 注文一覧で新しい注文を確認した</div>
        <div>✓ 注文内容（商品・数量・配送先・支払い状況）を確認した</div>
        <div>✓ 商品を梱包した</div>
        <div>✓ 管理画面で「Create Fulfillment」を実行した</div>
        <div>✓ 追跡番号を入力した</div>
        <div>✓ 注文ステータスが「Fulfilled（発送済み）」になった</div>
      </div>
    </Result>

    <MockTable
      headers={["処理", "推奨タイミング"]}
      rows={[
        ["注文確認", "注文から1時間以内（営業時間内）"],
        ["入金確認（手動決済の場合）", "毎日午前中に確認"],
        ["出荷準備・梱包", "注文から2営業日以内"],
        ["発送処理（追跡番号入力）", "発送後1時間以内"],
      ]}
    />
  </ManualPage>
)

export default OrdersPage
