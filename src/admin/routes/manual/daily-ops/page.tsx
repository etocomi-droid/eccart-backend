import {
  ManualPage, Step, ScreenMockup, MockTable,
  Tip, Warning, defaultSidebar,
} from "../../../components/manual/ui"
import { Text } from "@medusajs/ui"

const CheckItem = ({ children, priority }: { children: React.ReactNode; priority: "high" | "medium" | "low" }) => {
  const colors = {
    high: "border-red-200 bg-red-50",
    medium: "border-yellow-200 bg-yellow-50",
    low: "border-green-200 bg-green-50",
  }
  const labels = {
    high: "🔴 必須",
    medium: "🟡 推奨",
    low: "🟢 推奨",
  }
  return (
    <div className={`flex items-start gap-3 p-3 rounded-lg border ${colors[priority]}`}>
      <span className="w-5 h-5 rounded border border-ui-border-base bg-white flex items-center justify-center text-xs shrink-0 mt-0.5">☐</span>
      <div className="flex-1 text-sm">{children}</div>
      <span className="text-xs font-medium shrink-0">{labels[priority]}</span>
    </div>
  )
}

const DailyOpsPage = () => (
  <ManualPage
    title="日常運用チェックリスト"
    goal="毎日・毎週・毎月のルーティン作業を漏れなく実施する"
  >
    {/* 毎日 */}
    <div>
      <h2 className="text-xl font-bold text-ui-fg-base mb-1">📅 毎日やること（朝イチ 10分）</h2>
      <Text className="text-ui-fg-subtle text-sm mb-4">毎朝、業務開始時に以下を確認します。</Text>

      <div className="space-y-3">
        <CheckItem priority="high">
          <div className="font-medium">新しい注文を確認する</div>
          <div className="text-ui-fg-subtle mt-0.5">
            管理画面「Orders」→ ステータスが「Not fulfilled（未発送）」の注文がないか確認
          </div>
        </CheckItem>

        <CheckItem priority="high">
          <div className="font-medium">未処理の注文を処理する</div>
          <div className="text-ui-fg-subtle mt-0.5">
            支払い済みで未発送の注文 → 梱包 → Create Fulfillment → 追跡番号を入力
          </div>
        </CheckItem>

        <CheckItem priority="medium">
          <div className="font-medium">在庫切れの商品を確認する</div>
          <div className="text-ui-fg-subtle mt-0.5">
            管理画面「Inventory」→ 在庫数が0または少ない商品を確認し、補充を手配
          </div>
        </CheckItem>

        <CheckItem priority="medium">
          <div className="font-medium">問い合わせに回答漏れがないか確認</div>
          <div className="text-ui-fg-subtle mt-0.5">
            メールや問い合わせフォームの未回答メッセージを確認
          </div>
        </CheckItem>
      </div>

      <ScreenMockup
        sidebar={defaultSidebar}
        activeMenu="Orders"
        header="orders"
      >
        <div>
          <div className="text-lg font-semibold mb-2">Orders</div>
          <div className="text-sm text-ui-fg-muted mb-3">
            ステータスで絞り込み: <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">Not fulfilled</span> をクリック
          </div>
          <div className="border border-ui-border-base rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-ui-bg-subtle">
                <tr>
                  <th className="text-left p-2">注文番号</th>
                  <th className="text-left p-2">顧客</th>
                  <th className="text-left p-2">合計</th>
                  <th className="text-left p-2">発送</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t bg-yellow-50">
                  <td className="p-2">#1003</td>
                  <td className="p-2">佐藤 次郎</td>
                  <td className="p-2">¥6,280</td>
                  <td className="p-2"><span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">Not fulfilled</span></td>
                </tr>
                <tr className="border-t bg-yellow-50">
                  <td className="p-2">#1002</td>
                  <td className="p-2">鈴木 美咲</td>
                  <td className="p-2">¥3,980</td>
                  <td className="p-2"><span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">Not fulfilled</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-xs text-ui-fg-muted mt-2">↑ 黄色い行は処理が必要な注文です</div>
        </div>
      </ScreenMockup>
    </div>

    {/* 毎週 */}
    <div className="border-t border-ui-border-base pt-8">
      <h2 className="text-xl font-bold text-ui-fg-base mb-1">📆 毎週やること（週1回 30分）</h2>
      <Text className="text-ui-fg-subtle text-sm mb-4">週に1回、以下を確認します。おすすめは月曜日の朝。</Text>

      <div className="space-y-3">
        <CheckItem priority="medium">
          <div className="font-medium">注文の処理状況を総チェック</div>
          <div className="text-ui-fg-subtle mt-0.5">
            過去1週間の注文で未処理のものがないか確認。長期間放置されている注文は要対応。
          </div>
        </CheckItem>

        <CheckItem priority="medium">
          <div className="font-medium">在庫数の確認と補充判断</div>
          <div className="text-ui-fg-subtle mt-0.5">
            残り少ない商品の在庫を確認し、仕入れ・補充が必要かを判断
          </div>
        </CheckItem>

        <CheckItem priority="low">
          <div className="font-medium">SNS投稿の実施</div>
          <div className="text-ui-fg-subtle mt-0.5">
            新商品やセール情報をSNSで投稿して集客
          </div>
        </CheckItem>

        <CheckItem priority="low">
          <div className="font-medium">競合ストアのチェック</div>
          <div className="text-ui-fg-subtle mt-0.5">
            競合の価格、商品ラインナップ、プロモーションを確認
          </div>
        </CheckItem>
      </div>
    </div>

    {/* 毎月 */}
    <div className="border-t border-ui-border-base pt-8">
      <h2 className="text-xl font-bold text-ui-fg-base mb-1">📊 毎月やること（月1回 1時間）</h2>
      <Text className="text-ui-fg-subtle text-sm mb-4">月に1回、ストアの状態を振り返ります。</Text>

      <div className="space-y-3">
        <CheckItem priority="high">
          <div className="font-medium">売上レポートの確認</div>
          <div className="text-ui-fg-subtle mt-0.5">
            注文数、売上合計、平均注文金額を確認。前月比で増減をチェック。
          </div>
        </CheckItem>

        <CheckItem priority="medium">
          <div className="font-medium">プロモーションの効果検証</div>
          <div className="text-ui-fg-subtle mt-0.5">
            割引コードの使用回数、割引による売上変化を確認
          </div>
        </CheckItem>

        <CheckItem priority="medium">
          <div className="font-medium">新商品の登録</div>
          <div className="text-ui-fg-subtle mt-0.5">
            新しい商品の登録や、季節に合わせた商品ラインナップの更新
          </div>
        </CheckItem>

        <CheckItem priority="low">
          <div className="font-medium">商品ラインナップの見直し</div>
          <div className="text-ui-fg-subtle mt-0.5">
            売れ行きの悪い商品の非公開化や値下げ、人気商品の在庫確保
          </div>
        </CheckItem>
      </div>
    </div>

    {/* 季節・イベント */}
    <div className="border-t border-ui-border-base pt-8">
      <h2 className="text-xl font-bold text-ui-fg-base mb-4">🎉 季節・イベント時の作業</h2>

      <MockTable
        headers={["時期", "作業内容", "参照マニュアル"]}
        rows={[
          ["セール前（1週間前）", "プロモーションコード作成、特集コレクション作成", "プロモーション / コレクション"],
          ["セール開始日", "商品の価格変更、バナー更新依頼", "商品管理"],
          ["セール終了日", "プロモーション終了、価格を元に戻す", "プロモーション"],
          ["新シーズン", "新商品登録、カテゴリ整理、旧商品の整理", "商品管理 / コレクション"],
          ["年末年始", "営業日・配送スケジュールの告知", "注文管理"],
        ]}
      />
    </div>

    <Tip>
      このチェックリストを印刷して壁に貼っておくと、毎日の確認が漏れにくくなります。
    </Tip>
  </ManualPage>
)

export default DailyOpsPage
