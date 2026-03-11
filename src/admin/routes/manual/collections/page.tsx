import {
  ManualPage, Step, ScreenMockup, MockButton, MockField,
  Result, Tip, defaultSidebar,
} from "../../../components/manual/ui"

const CollectionsPage = () => (
  <ManualPage
    title="コレクション・カテゴリ管理"
    goal="商品をグループ分けして整理する方法をマスターする"
  >
    {/* ── コレクション ── */}
    <div className="border-b border-ui-border-base pb-4 mb-6">
      <h2 className="text-xl font-bold text-ui-fg-base">🏷️ コレクションを作成する</h2>
      <p className="text-sm text-ui-fg-subtle mt-1">
        コレクションは「春の新作」「セール品」「ギフトにおすすめ」など、テーマで商品をまとめるグループです。
      </p>
    </div>

    <Step
      number={1}
      title="Products メニューの中の Collections を開く"
      description="左サイドバー「Products」をクリックし、Products ページのタブから「Collections」を選択します。"
    >
      <ScreenMockup
        sidebar={defaultSidebar}
        activeMenu="Products"
        header="collections"
      >
        <div>
          <div className="flex gap-4 border-b border-ui-border-base mb-4 text-sm">
            <span className="pb-2 text-ui-fg-muted">Products</span>
            <span className="pb-2 border-b-2 border-violet-600 font-medium">Collections</span>
            <span className="pb-2 text-ui-fg-muted">Categories</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold">Collections</div>
            <MockButton primary highlight>Create Collection</MockButton>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Step
      number={2}
      title="コレクション情報を入力する"
    >
      <ScreenMockup header="collections/create">
        <div className="max-w-lg">
          <div className="text-lg font-semibold mb-4">Create Collection</div>
          <div className="bg-ui-bg-subtle rounded-lg p-4">
            <MockField
              label="Title（タイトル）"
              value="春の新作"
              required
              hint="お客様に表示されるコレクション名"
            />
            <MockField
              label="Handle（ハンドル）"
              value="spring-new-arrivals"
              required
              hint="URLに使われます: /collections/spring-new-arrivals"
            />
            <div className="mt-4">
              <MockButton primary highlight>Save（保存）</MockButton>
            </div>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Step
      number={3}
      title="コレクションに商品を追加する"
      description="コレクション作成後、商品を追加します。"
    >
      <ScreenMockup header="collections/spring-new-arrivals">
        <div className="max-w-lg">
          <div className="text-lg font-semibold mb-4">春の新作</div>
          <div className="bg-ui-bg-subtle rounded-lg p-4">
            <div className="font-medium text-sm mb-3">Products in this collection</div>
            <MockButton highlight>Add Products</MockButton>

            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-3 p-2 bg-white rounded border border-ui-border-base">
                <input type="checkbox" checked readOnly className="w-4 h-4" />
                <div className="w-8 h-8 bg-gray-200 rounded" />
                <span className="text-sm font-medium">オーガニックコットンTシャツ</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-white rounded border border-ui-border-base">
                <input type="checkbox" checked readOnly className="w-4 h-4" />
                <div className="w-8 h-8 bg-gray-200 rounded" />
                <span className="text-sm font-medium">リネンワンピース</span>
              </div>
            </div>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Result>
      <div className="space-y-1">
        <div>✓ コレクション「春の新作」が作成された</div>
        <div>✓ 商品がコレクションに追加された</div>
        <div>✓ ストアフロントの /collections/spring-new-arrivals に表示される</div>
      </div>
    </Result>

    {/* ── カテゴリ ── */}
    <div className="border-t border-ui-border-base pt-8 mt-8">
      <div className="border-b border-ui-border-base pb-4 mb-6">
        <h2 className="text-xl font-bold text-ui-fg-base">📂 カテゴリを作成する</h2>
        <p className="text-sm text-ui-fg-subtle mt-1">
          カテゴリは商品を分類するための階層構造です。「メンズ → トップス → Tシャツ」のように親子関係を持てます。
        </p>
      </div>
    </div>

    <div className="bg-ui-bg-subtle rounded-lg p-4 mb-6">
      <div className="font-semibold text-sm mb-2">カテゴリ階層の例</div>
      <div className="text-sm font-mono space-y-0.5 text-ui-fg-subtle">
        <div>メンズ</div>
        <div className="pl-4">├── トップス</div>
        <div className="pl-8">├── Tシャツ</div>
        <div className="pl-8">└── シャツ</div>
        <div className="pl-4">├── ボトムス</div>
        <div className="pl-4">└── アウター</div>
        <div className="mt-2">レディース</div>
        <div className="pl-4">├── トップス</div>
        <div className="pl-4">├── ボトムス</div>
        <div className="pl-4">└── ワンピース</div>
      </div>
    </div>

    <Step
      number={1}
      title="Categories タブを開く"
      description="Products ページのタブから「Categories」を選択します。"
    >
      <ScreenMockup
        sidebar={defaultSidebar}
        activeMenu="Products"
        header="categories"
      >
        <div>
          <div className="flex gap-4 border-b border-ui-border-base mb-4 text-sm">
            <span className="pb-2 text-ui-fg-muted">Products</span>
            <span className="pb-2 text-ui-fg-muted">Collections</span>
            <span className="pb-2 border-b-2 border-violet-600 font-medium">Categories</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold">Categories</div>
            <MockButton primary highlight>Create Category</MockButton>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Step
      number={2}
      title="カテゴリ情報を入力する"
    >
      <ScreenMockup header="categories/create">
        <div className="max-w-lg">
          <div className="text-lg font-semibold mb-4">Create Category</div>
          <div className="bg-ui-bg-subtle rounded-lg p-4">
            <MockField label="Name（名前）" value="メンズ" required />
            <MockField label="Handle" value="mens" required />
            <MockField label="Description" value="メンズ向け商品のカテゴリ" />
            <MockField
              label="Parent Category（親カテゴリ）"
              value="なし（トップレベル）"
              hint="子カテゴリを作る場合は、ここで親を選択します"
            />
            <div className="mt-4">
              <MockButton primary highlight>Save</MockButton>
            </div>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Step
      number={3}
      title="子カテゴリを作成する"
      description="同じ手順で子カテゴリを作成し、Parent Category で親を指定します。"
    >
      <ScreenMockup header="categories/create">
        <div className="max-w-lg">
          <div className="bg-ui-bg-subtle rounded-lg p-4">
            <MockField label="Name" value="トップス" required />
            <MockField label="Handle" value="mens-tops" required />
            <div className="mb-3">
              <div className="text-sm font-medium text-ui-fg-base mb-1">
                Parent Category<span className="text-red-500 ml-0.5">*</span>
              </div>
              <div className="border border-ui-border-base rounded-lg px-3 py-2 bg-white text-sm ring-2 ring-blue-500 ring-offset-1">
                メンズ ← 親カテゴリを選択
              </div>
            </div>
            <div className="mt-4">
              <MockButton primary>Save</MockButton>
            </div>
          </div>
        </div>
      </ScreenMockup>
    </Step>

    <Result>
      <div className="space-y-1">
        <div>✓ トップレベルのカテゴリ「メンズ」が作成された</div>
        <div>✓ 子カテゴリ「トップス」が「メンズ」の下に作成された</div>
        <div>✓ ストアフロントのフッターやナビゲーションにカテゴリが表示される</div>
      </div>
    </Result>

    <Tip>
      カテゴリ階層は3段までにし、1カテゴリ5〜30商品を目安に設計しましょう。
      深すぎる階層はお客様が商品を見つけにくくなります。
    </Tip>

    <div className="bg-ui-bg-subtle rounded-lg p-4 mt-4">
      <div className="font-semibold text-sm mb-2">コレクションとカテゴリの違い</div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-2"></th>
            <th className="pb-2">コレクション</th>
            <th className="pb-2">カテゴリ</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2 font-medium">用途</td>
            <td className="py-2">テーマ・特集でまとめる</td>
            <td className="py-2">商品を分類する</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 font-medium">階層</td>
            <td className="py-2">なし（フラット）</td>
            <td className="py-2">あり（親子関係）</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 font-medium">例</td>
            <td className="py-2">「春の新作」「セール品」</td>
            <td className="py-2">「メンズ &gt; トップス」</td>
          </tr>
          <tr>
            <td className="py-2 font-medium">使い分け</td>
            <td className="py-2">期間限定・季節もの</td>
            <td className="py-2">恒久的な商品分類</td>
          </tr>
        </tbody>
      </table>
    </div>
  </ManualPage>
)

export default CollectionsPage
