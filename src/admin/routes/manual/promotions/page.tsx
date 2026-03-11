import {
  ManualPage, Step, ScreenMockup, MockButton, MockField, MockTable,
  Result, Tip, Warning, defaultSidebar,
} from "../../../components/manual/ui"

const PromotionsPage = () => (
  <ManualPage
    title="プロモーション・割引"
    goal="割引コードやキャンペーンを作成して、お客様が使えるようにする"
  >
    <Step
      number={1}
      title="Promotions メニューを開く"
    >
      <ScreenMockup
        sidebar={defaultSidebar}
        activeMenu="Promotions"
        highlight="Promotions"
        header="promotions"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold">Promotions</div>
            <MockButton primary highlight>Create Promotion</MockButton>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Step
      number={2}
      title="プロモーションの種類を選ぶ"
    >
      <ScreenMockup header="promotions/create">
        <div className="max-w-lg">
          <div className="text-lg font-semibold mb-4">Create Promotion</div>
          <div className="space-y-3">
            <div className="p-4 border-2 border-violet-500 rounded-lg bg-violet-50">
              <div className="flex items-center gap-2">
                <input type="radio" checked readOnly className="w-4 h-4" />
                <div>
                  <div className="font-medium text-sm">Standard（標準）</div>
                  <div className="text-xs text-ui-fg-muted">割引コードを入力して適用するタイプ</div>
                </div>
              </div>
            </div>
            <div className="p-4 border border-ui-border-base rounded-lg">
              <div className="flex items-center gap-2">
                <input type="radio" readOnly className="w-4 h-4" />
                <div>
                  <div className="font-medium text-sm">Automatic（自動適用）</div>
                  <div className="text-xs text-ui-fg-muted">条件を満たすと自動で割引が適用される</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Step
      number={3}
      title="プロモーション情報を入力する"
    >
      <ScreenMockup header="promotions/create">
        <div className="max-w-lg">
          <div className="bg-ui-bg-subtle rounded-lg p-4 space-y-4">
            <MockField
              label="Code（コード）"
              value="SUMMER20"
              required
              hint="お客様が入力するコード。覚えやすい英数字を使いましょう"
            />

            <div>
              <div className="text-sm font-medium mb-2">Discount Type（割引タイプ）</div>
              <div className="flex gap-3">
                <span className="px-3 py-1.5 rounded-lg text-sm bg-violet-100 text-violet-800 border-2 border-violet-500 font-medium">
                  Percentage（%割引）
                </span>
                <span className="px-3 py-1.5 rounded-lg text-sm bg-white border border-ui-border-base text-ui-fg-subtle">
                  Fixed（固定額割引）
                </span>
              </div>
            </div>

            <MockField
              label="Value（割引値）"
              value="20"
              required
              hint="Percentageの場合: 20 = 20%OFF / Fixedの場合: 500 = ¥500OFF"
            />

            <div>
              <div className="text-sm font-medium mb-2">適用対象</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <input type="radio" checked readOnly className="w-4 h-4" />
                  <span>すべての商品</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <input type="radio" readOnly className="w-4 h-4" />
                  <span>特定のコレクション</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <input type="radio" readOnly className="w-4 h-4" />
                  <span>特定の商品</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Step
      number={4}
      title="適用条件を設定する（任意）"
    >
      <ScreenMockup header="promotions/create">
        <div className="max-w-lg">
          <div className="bg-ui-bg-subtle rounded-lg p-4 space-y-3">
            <div className="font-medium text-sm">Conditions（適用条件）- オプション</div>
            <MockField
              label="Minimum Order Amount（最低注文金額）"
              value="3000"
              hint="この金額以上の注文でのみ使用可能"
            />
            <MockField
              label="Start Date（開始日）"
              value="2026-04-01"
              hint="この日時以降に有効"
            />
            <MockField
              label="End Date（終了日）"
              value="2026-04-30"
              hint="この日時まで有効"
            />
            <MockField
              label="Usage Limit（使用回数制限）"
              value="100"
              hint="全体で使える回数の上限"
            />
          </div>
          <div className="mt-4">
            <MockButton primary highlight>Save（保存）</MockButton>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Step
      number={5}
      title="プロモーションが使えることを確認する"
      description="お客様のチェックアウト画面で、コードを入力して割引が適用されることを確認しましょう。"
    >
      <div className="bg-ui-bg-subtle rounded-lg p-4 max-w-md">
        <div className="text-sm font-semibold mb-3">お客様側の画面イメージ（チェックアウト）</div>
        <div className="bg-white rounded border border-ui-border-base p-3">
          <div className="flex gap-2 mb-3">
            <div className="flex-1 border border-ui-border-base rounded px-2 py-1 text-sm">SUMMER20</div>
            <button className="bg-violet-600 text-white px-3 py-1 rounded text-sm">適用</button>
          </div>
          <div className="text-sm space-y-1">
            <div className="flex justify-between"><span>小計</span><span>¥5,000</span></div>
            <div className="flex justify-between text-green-600"><span>割引（20%OFF）</span><span>-¥1,000</span></div>
            <div className="flex justify-between"><span>送料</span><span>¥700</span></div>
            <div className="flex justify-between font-bold border-t pt-1 mt-1"><span>合計</span><span>¥4,700</span></div>
          </div>
        </div>
      </div>
    </Step>

    <Result>
      <div className="space-y-1">
        <div>✓ プロモーションコード「SUMMER20」が作成された</div>
        <div>✓ 20%OFF の割引が設定された</div>
        <div>✓ お客様がチェックアウトでコードを使える状態になった</div>
      </div>
    </Result>

    <MockTable
      headers={["プロモーション例", "コード", "割引", "用途"]}
      rows={[
        ["夏のセール", "SUMMER20", "20%OFF", "季節セール"],
        ["新規会員割引", "WELCOME", "¥500OFF", "新規顧客獲得"],
        ["リピーター特典", "THANKYOU", "15%OFF", "リピーター向け"],
        ["送料無料", "FREESHIP", "送料¥0", "購入ハードルを下げる"],
      ]}
    />

    <Tip>
      プロモーションコードはSNSやメールで配信して集客に活用しましょう。
      効果測定のために、チャネルごとに異なるコードを作成すると便利です。
    </Tip>
  </ManualPage>
)

export default PromotionsPage
