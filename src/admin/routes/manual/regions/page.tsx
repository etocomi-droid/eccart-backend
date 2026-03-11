import {
  ManualPage, Step, ScreenMockup, MockButton, MockField, MockTable,
  Result, Tip, Warning,
} from "../../../components/manual/ui"

const RegionsPage = () => (
  <ManualPage
    title="地域・配送・決済の設定"
    goal="販売地域（リージョン）を作成し、配送方法と決済方法を設定して、お客様が購入できる状態にする"
  >
    {/* ── リージョン ── */}
    <div className="border-b border-ui-border-base pb-4 mb-6">
      <h2 className="text-xl font-bold text-ui-fg-base">🌏 リージョン（販売地域）を作成する</h2>
      <p className="text-sm text-ui-fg-subtle mt-1">
        リージョンは「どの国に、どの通貨で販売するか」を決める設定です。
      </p>
    </div>

    <Step number={1} title="Settings → Regions を開く">
      <ScreenMockup sidebar={["...Settings"]} activeMenu="...Settings" header="settings/regions">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold">Regions</div>
            <MockButton primary highlight>Add Region</MockButton>
          </div>
        </div>
      </ScreenMockup>
      <div className="text-sm text-ui-fg-subtle mt-2">
        左下の歯車アイコン（Settings）→ サイドメニューの「Regions」をクリック
      </div>
    </Step>

    <Step number={2} title="リージョン情報を入力する">
      <ScreenMockup header="settings/regions/create">
        <div className="max-w-lg">
          <div className="bg-ui-bg-subtle rounded-lg p-4">
            <MockField label="Region Name" value="日本" required hint="管理用の名前" />
            <MockField label="Currency" value="JPY - Japanese Yen (¥)" required hint="この地域の通貨" />
            <div className="mb-3">
              <div className="text-sm font-medium text-ui-fg-base mb-1">Countries（対象国）<span className="text-red-500">*</span></div>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-ui-bg-subtle border border-ui-border-base rounded px-2 py-1 text-sm">🇯🇵 Japan (JP)</span>
              </div>
              <div className="text-xs text-ui-fg-muted mt-1">「Japan」で検索して追加</div>
            </div>
            <MockField label="Tax Rate（税率）" value="10" hint="% で入力。日本は10%（消費税）" />
            <div className="mt-4">
              <MockButton primary highlight>Save</MockButton>
            </div>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <MockTable
      headers={["リージョン設定例", "対象国", "通貨", "税率"]}
      rows={[
        ["日本", "JP", "JPY（円）", "10%"],
        ["北米", "US, CA", "USD（ドル）", "0%（州ごと）"],
        ["ヨーロッパ", "DE, FR, IT", "EUR（ユーロ）", "20%"],
        ["東南アジア", "SG, TH, MY", "USD（ドル）", "7%"],
      ]}
    />

    <Result>
      <div>✓ リージョン「日本」が作成された（JPY / JP / 税率10%）</div>
    </Result>

    {/* ── 配送方法 ── */}
    <div className="border-t border-ui-border-base pt-8 mt-8">
      <div className="border-b border-ui-border-base pb-4 mb-6">
        <h2 className="text-xl font-bold text-ui-fg-base">🚚 配送方法を設定する</h2>
      </div>
    </div>

    <Step number={1} title="リージョン詳細画面で配送方法を追加する">
      <ScreenMockup header="settings/regions/japan">
        <div className="max-w-lg">
          <div className="text-lg font-semibold mb-4">日本 - Shipping Options</div>
          <MockButton primary highlight>Add Shipping Option</MockButton>
        </div>
      </ScreenMockup>
    </Step>

    <Step number={2} title="配送方法の詳細を入力する">
      <ScreenMockup header="settings/regions/japan/shipping/create">
        <div className="max-w-lg">
          <div className="bg-ui-bg-subtle rounded-lg p-4">
            <MockField label="Name" value="通常配送" required hint="お客様に表示される名前" />
            <MockField label="Price" value="700" required hint="配送料金（円）" />
            <MockField label="Provider" value="Manual Fulfillment" hint="配送プロバイダを選択" />
            <div className="mt-4">
              <MockButton primary highlight>Save</MockButton>
            </div>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <MockTable
      headers={["配送方法の例", "料金", "到着目安"]}
      rows={[
        ["通常配送", "¥700", "2〜4営業日"],
        ["速達配送", "¥1,200", "翌日〜2営業日"],
        ["メール便", "¥350", "3〜5営業日"],
        ["送料無料（条件付き）", "¥0", "条件: ¥5,000以上購入"],
      ]}
    />

    <Tip>
      送料無料の設定は、配送方法に「条件付き価格」を追加します。
      条件: item_total ≥ 5000 → 価格 ¥0 と設定すると、5,000円以上の注文で送料無料になります。
    </Tip>

    {/* ── 決済方法 ── */}
    <div className="border-t border-ui-border-base pt-8 mt-8">
      <div className="border-b border-ui-border-base pb-4 mb-6">
        <h2 className="text-xl font-bold text-ui-fg-base">💳 決済方法を設定する</h2>
      </div>
    </div>

    <Step number={1} title="リージョン詳細画面で決済プロバイダを追加する">
      <ScreenMockup header="settings/regions/japan">
        <div className="max-w-lg">
          <div className="text-lg font-semibold mb-4">日本 - Payment Providers</div>
          <MockButton primary highlight>Add Payment Provider</MockButton>
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-3 p-3 bg-white rounded border border-ui-border-base">
              <input type="checkbox" checked readOnly className="w-4 h-4" />
              <div>
                <div className="font-medium text-sm">Stripe</div>
                <div className="text-xs text-ui-fg-muted">クレジットカード（Visa, Master, AMEX）</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded border border-ui-border-base">
              <input type="checkbox" readOnly className="w-4 h-4" />
              <div>
                <div className="font-medium text-sm">Manual Payment</div>
                <div className="text-xs text-ui-fg-muted">銀行振込、代引きなど</div>
              </div>
            </div>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <MockTable
      headers={["決済方法", "特徴", "手数料目安", "設定難易度"]}
      rows={[
        ["Stripe（クレジットカード）", "Visa/Master/AMEX対応。最も利用率が高い", "3.6%", "エンジニア設定必要"],
        ["PayPal", "海外顧客に強い", "3.6% + ¥40", "エンジニア設定必要"],
        ["Manual Payment", "銀行振込、代引き等", "なし", "簡単（手動確認が必要）"],
      ]}
    />

    <Warning>
      Stripe のシークレットキー（sk_ で始まるもの）は絶対に公開しないでください。
      Stripe の設定はエンジニアに依頼してください。
    </Warning>

    <Result>
      <div className="space-y-1">
        <div>✓ リージョン（日本 / JPY）が作成された</div>
        <div>✓ 配送方法（通常配送 ¥700）が設定された</div>
        <div>✓ 決済方法（Stripe）が設定された</div>
        <div className="mt-2 font-semibold">→ お客様が商品を購入できる準備が整いました！</div>
      </div>
    </Result>
  </ManualPage>
)

export default RegionsPage
