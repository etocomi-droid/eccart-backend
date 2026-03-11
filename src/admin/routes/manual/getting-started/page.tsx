import {
  ManualPage, Step, ScreenMockup, MockButton, MockField,
  Result, Tip, Warning, defaultSidebar,
} from "../../../components/manual/ui"

const GettingStartedPage = () => (
  <ManualPage
    title="はじめに：初期セットアップ"
    goal="管理画面にログインし、ストアの基本設定（地域・配送・決済）を完了して、商品を登録できる状態にする"
  >
    {/* Step 1 */}
    <Step
      number={1}
      title="管理画面にアクセスする"
      description="ブラウザのアドレスバーに管理画面のURLを入力します。"
    >
      <ScreenMockup header="login">
        <div className="max-w-sm mx-auto py-8">
          <div className="text-center mb-6">
            <div className="text-2xl font-bold">Medusa</div>
            <div className="text-sm text-ui-fg-muted mt-1">管理画面にログイン</div>
          </div>
          <MockField label="メールアドレス" value="admin@example.com" required />
          <MockField label="パスワード" value="••••••••" required />
          <div className="mt-4">
            <MockButton primary highlight>ログイン</MockButton>
          </div>
        </div>
      </ScreenMockup>
      <Tip>
        初回ログインのメールアドレスとパスワードは、セットアップ時にエンジニアが作成したものを使います。
        パスワードを忘れた場合はエンジニアに再発行を依頼してください。
      </Tip>
    </Step>

    {/* Step 2 */}
    <Step
      number={2}
      title="ダッシュボード画面を確認する"
      description="ログインすると、管理画面のダッシュボードが表示されます。左側のサイドバーで各機能にアクセスできます。"
    >
      <ScreenMockup
        sidebar={defaultSidebar}
        activeMenu="Orders"
        header="orders"
      >
        <div>
          <div className="text-lg font-semibold mb-4">Orders</div>
          <div className="border border-dashed border-ui-border-base rounded-lg p-8 text-center text-ui-fg-muted">
            <div className="text-4xl mb-2">📋</div>
            <div className="font-medium">No records</div>
            <div className="text-sm">Your orders will show up here.</div>
          </div>
        </div>
      </ScreenMockup>
      <div className="bg-ui-bg-subtle rounded-lg p-4 my-3">
        <div className="font-semibold text-ui-fg-base mb-2">サイドバーの各メニュー</div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div><span className="font-medium">Orders</span> → 注文の確認・処理</div>
          <div><span className="font-medium">Products</span> → 商品の登録・管理</div>
          <div><span className="font-medium">Inventory</span> → 在庫数の管理</div>
          <div><span className="font-medium">Customers</span> → 顧客情報</div>
          <div><span className="font-medium">Promotions</span> → 割引・キャンペーン</div>
          <div><span className="font-medium">Price Lists</span> → 価格表の管理</div>
        </div>
      </div>
    </Step>

    {/* Step 3 */}
    <Step
      number={3}
      title="言語を日本語に切り替える"
      description="管理画面はデフォルトで英語です。日本語に切り替えましょう。"
    >
      <ScreenMockup sidebar={defaultSidebar} header="settings/profile">
        <div>
          <div className="text-lg font-semibold mb-4">Profile</div>
          <MockField label="First name" value="太郎" />
          <MockField label="Last name" value="山田" />
          <div className="mb-3">
            <div className="text-sm font-medium text-ui-fg-base mb-1">Language</div>
            <div className="border border-ui-border-base rounded-lg px-3 py-2 bg-white text-sm inline-flex items-center gap-2 ring-2 ring-blue-500 ring-offset-1">
              日本語
              <span className="text-xs text-blue-600 bg-blue-50 px-1 rounded">← ここで「日本語」を選択</span>
            </div>
          </div>
        </div>
      </ScreenMockup>
      <div className="bg-ui-bg-subtle rounded-lg p-3 text-sm">
        <strong>手順：</strong> 左下のユーザーアイコン → Settings → Profile → Language ドロップダウンで「日本語」を選択 → Save
      </div>
    </Step>

    {/* Step 4 */}
    <Step
      number={4}
      title="地域（リージョン）を設定する"
      description="どの国・通貨で販売するかを設定します。詳細は「地域・配送・決済の設定」マニュアルを参照してください。"
    >
      <ScreenMockup sidebar={["...Settings"]} activeMenu="...Settings" header="settings/regions">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold">Regions</div>
            <MockButton primary highlight>Add Region</MockButton>
          </div>
          <div className="border border-ui-border-base rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">日本</div>
                <div className="text-sm text-ui-fg-muted">JP · JPY（円）</div>
              </div>
              <div className="text-sm text-ui-fg-subtle">1 country</div>
            </div>
          </div>
        </div>
      </ScreenMockup>
      <Tip>
        最低限「日本」リージョン（通貨: JPY、国: JP）を作成すればOKです。
        海外販売をする場合は、後から追加できます。
      </Tip>
    </Step>

    {/* Step 5 */}
    <Step
      number={5}
      title="配送方法を設定する"
      description="リージョンに配送方法を紐づけます。"
    >
      <ScreenMockup sidebar={["...Settings"]} header="settings/regions/japan">
        <div>
          <div className="text-lg font-semibold mb-4">日本リージョン - 配送方法</div>
          <MockButton primary highlight>Add Shipping Option</MockButton>
          <div className="mt-3 border border-ui-border-base rounded-lg p-3">
            <MockField label="名前" value="通常配送" required />
            <MockField label="料金" value="¥700" required />
            <MockField label="配送プロバイダ" value="Manual Fulfillment" />
          </div>
        </div>
      </ScreenMockup>
    </Step>

    {/* Step 6 */}
    <Step
      number={6}
      title="決済方法を設定する"
      description="リージョンに決済方法を紐づけます。Stripeのクレジットカード決済がおすすめです。"
    >
      <ScreenMockup sidebar={["...Settings"]} header="settings/regions/japan">
        <div>
          <div className="text-lg font-semibold mb-4">日本リージョン - 決済方法</div>
          <MockButton primary highlight>Add Payment Provider</MockButton>
          <div className="mt-3 border border-ui-border-base rounded-lg p-3">
            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" checked readOnly className="w-4 h-4" />
              <div>
                <div className="font-medium text-sm">Stripe</div>
                <div className="text-xs text-ui-fg-muted">クレジットカード決済</div>
              </div>
            </div>
          </div>
        </div>
      </ScreenMockup>
      <Warning>
        Stripe を使うにはアカウント登録とAPIキーの設定が必要です。エンジニアに設定を依頼してください。
      </Warning>
    </Step>

    {/* Step 7 */}
    <Step
      number={7}
      title="Sales Channel を確認する"
      description="商品を販売するチャネル（ストアフロント）が設定されているか確認します。"
    >
      <ScreenMockup sidebar={["...Settings"]} header="settings/sales-channels">
        <div>
          <div className="text-lg font-semibold mb-4">Sales Channels</div>
          <div className="border border-ui-border-base rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Default Sales Channel</div>
                <div className="text-sm text-ui-fg-muted">Created by Medusa</div>
              </div>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Active</span>
            </div>
          </div>
        </div>
      </ScreenMockup>
      <Tip>
        通常は「Default Sales Channel」が自動作成されています。
        ここに Publishable API Key が紐づいていることを確認してください。
      </Tip>
    </Step>

    {/* Result */}
    <Result>
      <div className="space-y-1">
        <div>✓ 管理画面にログインできた</div>
        <div>✓ 画面が日本語で表示されている</div>
        <div>✓ リージョン（日本 / JPY）が設定された</div>
        <div>✓ 配送方法（通常配送）が設定された</div>
        <div>✓ 決済方法（Stripe）が設定された</div>
        <div>✓ Sales Channel が有効になっている</div>
        <div className="mt-2 font-semibold">→ 次は「商品管理」マニュアルで商品を登録しましょう！</div>
      </div>
    </Result>
  </ManualPage>
)

export default GettingStartedPage
