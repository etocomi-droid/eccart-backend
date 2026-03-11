import {
  ManualPage, Step, ScreenMockup, MockButton, MockField, MockTable,
  Result, Tip, Warning, ClickHere, defaultSidebar,
} from "../../../components/manual/ui"

const ProductsPage = () => (
  <ManualPage
    title="商品管理"
    goal="新しい商品を登録し、ストアフロント（お客様のサイト）に表示されるまでの全手順をマスターする"
  >
    {/* ── 商品登録 ── */}
    <div className="border-b border-ui-border-base pb-6 mb-6">
      <h2 className="text-xl font-bold text-ui-fg-base mb-4">📦 商品を新規登録する</h2>
    </div>

    <Step
      number={1}
      title="Products メニューを開く"
      description="左サイドバーから「Products」をクリックします。"
    >
      <ScreenMockup
        sidebar={defaultSidebar}
        activeMenu="Products"
        highlight="Products"
        header="products"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold">Products</div>
            <MockButton primary>Create Product</MockButton>
          </div>
          <div className="border border-dashed border-ui-border-base rounded-lg p-8 text-center text-ui-fg-muted">
            <div className="text-4xl mb-2">📦</div>
            <div>商品がまだ登録されていません</div>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Step
      number={2}
      title="「Create Product」ボタンをクリック"
      description="右上の紫色のボタンをクリックして、新しい商品の登録画面を開きます。"
    >
      <ScreenMockup sidebar={defaultSidebar} activeMenu="Products" header="products">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold">Products</div>
            <MockButton primary highlight>Create Product</MockButton>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Step
      number={3}
      title="基本情報を入力する"
      description="商品名、ハンドル（URL用の識別子）、説明文を入力します。"
    >
      <ScreenMockup header="products/create">
        <div className="max-w-lg">
          <div className="text-lg font-semibold mb-4">Create Product</div>

          <div className="bg-ui-bg-subtle rounded-lg p-4 mb-4">
            <div className="font-medium text-sm mb-3 text-ui-fg-base">General</div>
            <MockField
              label="Title（商品名）"
              value="オーガニックコットンTシャツ"
              required
              hint="お客様に表示される商品名です。検索キーワードを含めると◎"
            />
            <MockField
              label="Subtitle（サブタイトル）"
              value="肌にやさしい100%オーガニック"
              hint="任意。商品一覧で商品名の下に表示されます"
            />
            <MockField
              label="Handle（ハンドル）"
              value="organic-cotton-tshirt"
              required
              hint="URLに使われます。英数字とハイフンのみ。自動生成もされます"
            />
            <MockField
              label="Description（説明文）"
              value="厳選されたオーガニックコットン100%で作られた..."
              required
              hint="商品詳細ページに表示される説明文です"
            />
          </div>
        </div>
      </ScreenMockup>
      <MockTable
        headers={["入力項目", "必須", "入力のコツ"]}
        rows={[
          ["Title（商品名）", "◎ 必須", "検索されやすいキーワードを含める。30文字以内が理想"],
          ["Handle（ハンドル）", "◎ 必須", "英数字とハイフンのみ。例: organic-cotton-tshirt"],
          ["Description（説明文）", "◎ 必須", "商品の魅力・特徴・素材・サイズ感を記載"],
          ["Subtitle", "任意", "一覧ページで簡潔に商品を説明するテキスト"],
        ]}
      />
    </Step>

    <Step
      number={4}
      title="画像をアップロードする"
      description="商品のサムネイル画像と、商品詳細ページに表示する画像を追加します。"
    >
      <ScreenMockup header="products/create">
        <div className="max-w-lg">
          <div className="bg-ui-bg-subtle rounded-lg p-4 mb-4">
            <div className="font-medium text-sm mb-3 text-ui-fg-base">Media</div>

            <div className="mb-4">
              <div className="text-sm font-medium mb-1">Thumbnail（サムネイル）<span className="text-red-500">*</span></div>
              <div className="border-2 border-dashed border-ui-border-base rounded-lg p-6 text-center bg-white">
                <div className="text-3xl mb-2">🖼️</div>
                <div className="text-sm text-ui-fg-muted">ここに画像をドラッグ＆ドロップ</div>
                <div className="text-xs text-ui-fg-muted mt-1">または <ClickHere label="クリックしてファイルを選択" /></div>
              </div>
              <div className="text-xs text-ui-fg-muted mt-1">一覧表示用。正方形（1:1）で見栄えの良い1枚を選ぶ</div>
            </div>

            <div>
              <div className="text-sm font-medium mb-1">Images（商品画像）<span className="text-red-500">*</span></div>
              <div className="border-2 border-dashed border-ui-border-base rounded-lg p-6 text-center bg-white">
                <div className="text-3xl mb-2">📸</div>
                <div className="text-sm text-ui-fg-muted">複数の画像をドラッグ＆ドロップ</div>
              </div>
              <div className="text-xs text-ui-fg-muted mt-1">最低3枚、理想は5〜8枚。さまざまな角度から撮影</div>
            </div>
          </div>
        </div>
      </ScreenMockup>
      <Tip>
        画像は「正面」「背面」「ディテール」「着用イメージ」「サイズ感がわかるもの」を揃えると購入率がアップします。
      </Tip>
    </Step>

    <Step
      number={5}
      title="バリエーション（サイズ・カラー）を設定する"
      description="同じ商品に複数のサイズやカラーがある場合、オプションとバリアントを設定します。"
    >
      <ScreenMockup header="products/create">
        <div className="max-w-lg">
          <div className="bg-ui-bg-subtle rounded-lg p-4 mb-4">
            <div className="font-medium text-sm mb-3 text-ui-fg-base">Options（オプション）</div>
            <MockButton highlight>Add Option</MockButton>

            <div className="mt-3 border border-ui-border-base rounded-lg p-3 bg-white">
              <MockField label="Option name" value="サイズ" required />
              <div className="text-sm font-medium mb-1">Values（値）</div>
              <div className="flex gap-2 flex-wrap">
                {["S", "M", "L", "XL"].map((s) => (
                  <span key={s} className="bg-ui-bg-subtle border border-ui-border-base rounded px-2 py-1 text-sm">{s}</span>
                ))}
              </div>
            </div>

            <div className="mt-3 border border-ui-border-base rounded-lg p-3 bg-white">
              <MockField label="Option name" value="カラー" required />
              <div className="text-sm font-medium mb-1">Values（値）</div>
              <div className="flex gap-2 flex-wrap">
                {["ホワイト", "ブラック", "ネイビー"].map((c) => (
                  <span key={c} className="bg-ui-bg-subtle border border-ui-border-base rounded px-2 py-1 text-sm">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScreenMockup>
      <Tip>
        オプションを設定すると、全組み合わせのバリアントが自動生成されます。
        例: サイズ4種 × カラー3色 = 12バリアント
      </Tip>
    </Step>

    <Step
      number={6}
      title="各バリアントの価格を設定する"
      description="バリアントごとに価格を設定します。リージョン（地域）ごとに異なる価格を設定できます。"
    >
      <ScreenMockup header="products/create">
        <div className="max-w-lg">
          <div className="bg-ui-bg-subtle rounded-lg p-4">
            <div className="font-medium text-sm mb-3 text-ui-fg-base">Variants - Pricing</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-ui-border-base rounded">
                <thead className="bg-ui-bg-subtle">
                  <tr>
                    <th className="text-left p-2 border-b">バリアント</th>
                    <th className="text-left p-2 border-b">JPY（円）</th>
                    <th className="text-left p-2 border-b">SKU</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["S / ホワイト", "¥3,980", "OCT-S-W"],
                    ["M / ホワイト", "¥3,980", "OCT-M-W"],
                    ["L / ホワイト", "¥4,280", "OCT-L-W"],
                    ["S / ブラック", "¥3,980", "OCT-S-B"],
                  ].map(([v, p, sku], i) => (
                    <tr key={i} className="border-b bg-white">
                      <td className="p-2 font-medium">{v}</td>
                      <td className="p-2">{p}</td>
                      <td className="p-2 text-ui-fg-muted">{sku}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ScreenMockup>
      <Warning>
        価格を設定しないバリアントはストアフロントに表示されません。必ず全バリアントに価格を入力してください。
      </Warning>
    </Step>

    <Step
      number={7}
      title="在庫数を設定する"
      description="各バリアントの在庫数と在庫管理の設定をします。"
    >
      <ScreenMockup header="products/edit/inventory">
        <div className="max-w-lg">
          <div className="bg-ui-bg-subtle rounded-lg p-4">
            <div className="font-medium text-sm mb-3 text-ui-fg-base">Inventory</div>
            <MockTable
              headers={["設定項目", "推奨設定", "説明"]}
              rows={[
                ["Manage Inventory", "✅ ON", "在庫数を追跡する。在庫ゼロで購入不可に"],
                ["Allow Backorder", "❌ OFF", "ONにすると在庫ゼロでも注文受付可能"],
                ["在庫数（Stock）", "正確な数値", "現在手元にある在庫数を入力"],
              ]}
            />
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Step
      number={8}
      title="Sales Channel に紐づけて公開する"
      description="商品を Sales Channel（販売チャネル）に紐づけて、ステータスを「Published（公開）」にします。"
    >
      <ScreenMockup header="products/edit">
        <div className="max-w-lg">
          <div className="bg-ui-bg-subtle rounded-lg p-4 mb-4">
            <div className="font-medium text-sm mb-3 text-ui-fg-base">Sales Channels</div>
            <div className="flex items-center gap-3 p-2 bg-white rounded border border-ui-border-base">
              <input type="checkbox" checked readOnly className="w-4 h-4" />
              <div>
                <div className="font-medium text-sm">Default Sales Channel</div>
              </div>
            </div>
            <div className="text-xs text-ui-fg-muted mt-2">✅ チェックが入っていることを確認</div>
          </div>

          <div className="bg-ui-bg-subtle rounded-lg p-4">
            <div className="font-medium text-sm mb-3 text-ui-fg-base">Status</div>
            <div className="flex gap-3">
              <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">Draft（下書き）</span>
              <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 ring-2 ring-blue-500 ring-offset-1">
                Published（公開）← これを選択
              </span>
            </div>
          </div>

          <div className="mt-4">
            <MockButton primary highlight>Save（保存）</MockButton>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Result>
      <div className="space-y-1">
        <div>✓ 商品が登録された</div>
        <div>✓ 画像がアップロードされた</div>
        <div>✓ バリエーション（サイズ・カラー）が設定された</div>
        <div>✓ 価格が設定された</div>
        <div>✓ 在庫数が設定された</div>
        <div>✓ Sales Channel に紐づけられた</div>
        <div>✓ ステータスが「Published（公開）」になった</div>
        <div className="mt-2 font-semibold">→ 最大1時間でストアフロントに商品が表示されます！</div>
      </div>
    </Result>

    {/* ── 商品編集 ── */}
    <div className="border-t border-ui-border-base pt-8 mt-8">
      <h2 className="text-xl font-bold text-ui-fg-base mb-4">✏️ 商品を編集する</h2>
    </div>

    <Step
      number={1}
      title="商品一覧から編集したい商品をクリック"
    >
      <ScreenMockup sidebar={defaultSidebar} activeMenu="Products" header="products">
        <div>
          <div className="text-lg font-semibold mb-4">Products</div>
          <div className="border border-ui-border-base rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-ui-bg-subtle">
                <tr>
                  <th className="text-left p-3">商品名</th>
                  <th className="text-left p-3">ステータス</th>
                  <th className="text-left p-3">在庫</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t bg-blue-50 ring-2 ring-blue-500 ring-inset cursor-pointer">
                  <td className="p-3 font-medium">オーガニックコットンTシャツ ← クリック</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Published</span></td>
                  <td className="p-3">150</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">シルクブラウス</td>
                  <td className="p-3"><span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">Draft</span></td>
                  <td className="p-3">30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Step
      number={2}
      title="編集したい項目を修正して保存"
      description="商品名、価格、画像、在庫数など、どの項目でも自由に編集できます。編集後は必ず「Save」をクリックしてください。"
    >
      <Tip>
        商品を一時的に非表示にしたい場合は、ステータスを「Draft（下書き）」に変更すると、ストアフロントから非表示になります。商品を削除する必要はありません。
      </Tip>
    </Step>

    {/* ── 商品削除 ── */}
    <div className="border-t border-ui-border-base pt-8 mt-8">
      <h2 className="text-xl font-bold text-ui-fg-base mb-4">🗑️ 商品を削除する</h2>
    </div>

    <Step
      number={1}
      title="商品詳細画面で「…」メニューから Delete を選択"
    >
      <ScreenMockup header="products/organic-cotton-tshirt">
        <div className="max-w-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold">オーガニックコットンTシャツ</div>
            <div className="relative">
              <MockButton highlight>⋯</MockButton>
              <div className="absolute right-0 top-10 bg-white border border-ui-border-base rounded-lg shadow-lg py-1 w-40 z-10">
                <div className="px-3 py-2 text-sm hover:bg-ui-bg-subtle">Edit</div>
                <div className="px-3 py-2 text-sm hover:bg-ui-bg-subtle">Duplicate</div>
                <div className="border-t border-ui-border-base" />
                <div className="px-3 py-2 text-sm text-red-600 font-medium bg-red-50">Delete ← クリック</div>
              </div>
            </div>
          </div>
        </div>
      </ScreenMockup>
      <Warning>
        削除した商品は元に戻せません。非公開（Draft）にすることも検討してください。
        注文履歴に紐づいた商品を削除しても、注文データは残ります。
      </Warning>
    </Step>
  </ManualPage>
)

export default ProductsPage
