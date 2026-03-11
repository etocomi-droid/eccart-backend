import {
  ManualPage, Step, ScreenMockup, MockTable,
  Tip, Warning, defaultSidebar,
} from "../../../components/manual/ui"

const TroubleshootingPage = () => (
  <ManualPage
    title="トラブルシューティング"
    goal="よくある問題の原因を特定し、自分で解決できるようになる"
  >
    {/* 問題1 */}
    <div className="border border-red-200 rounded-xl overflow-hidden">
      <div className="bg-red-50 px-5 py-3 border-b border-red-200">
        <h3 className="font-bold text-red-800">❌ 商品がストアフロントに表示されない</h3>
      </div>
      <div className="p-5 space-y-4">
        <Step number={1} title="商品のステータスを確認する">
          <ScreenMockup sidebar={defaultSidebar} activeMenu="Products" header="products">
            <div>
              <div className="text-sm mb-3">商品一覧で、該当商品のステータスを確認</div>
              <div className="flex gap-4">
                <div className="p-3 border border-red-300 rounded-lg bg-red-50">
                  <div className="text-xs text-red-600 font-medium mb-1">🚫 これが原因かも</div>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">Draft（下書き）</span>
                </div>
                <div className="p-3 border border-green-300 rounded-lg bg-green-50">
                  <div className="text-xs text-green-600 font-medium mb-1">✅ 正しい状態</div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Published（公開）</span>
                </div>
              </div>
              <div className="text-sm text-ui-fg-subtle mt-3">
                <strong>対処:</strong> 商品をクリック → ステータスを「Published」に変更 → Save
              </div>
            </div>
          </ScreenMockup>
        </Step>

        <Step number={2} title="Sales Channel に紐づいているか確認する">
          <div className="bg-ui-bg-subtle rounded-lg p-4 text-sm">
            <div className="mb-2">商品詳細画面の「Sales Channels」セクションを確認</div>
            <div className="flex gap-4">
              <div className="p-3 border border-red-300 rounded-lg bg-red-50">
                <div className="text-xs text-red-600 font-medium mb-1">🚫 チェックなし</div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" readOnly className="w-4 h-4" />
                  <span>Default Sales Channel</span>
                </div>
              </div>
              <div className="p-3 border border-green-300 rounded-lg bg-green-50">
                <div className="text-xs text-green-600 font-medium mb-1">✅ チェックあり</div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="w-4 h-4" />
                  <span>Default Sales Channel</span>
                </div>
              </div>
            </div>
          </div>
        </Step>

        <Step number={3} title="キャッシュの更新を待つ">
          <div className="bg-ui-bg-subtle rounded-lg p-4 text-sm">
            <p>商品の変更は、キャッシュの関係で最大<strong>1時間</strong>かかる場合があります。</p>
            <p className="mt-2">すぐに反映させたい場合は、エンジニアにストアフロントの再デプロイを依頼してください。</p>
          </div>
        </Step>
      </div>
    </div>

    {/* 問題2 */}
    <div className="border border-red-200 rounded-xl overflow-hidden">
      <div className="bg-red-50 px-5 py-3 border-b border-red-200">
        <h3 className="font-bold text-red-800">❌ お客様が購入できない（チェックアウトエラー）</h3>
      </div>
      <div className="p-5 space-y-4">
        <Step number={1} title="配送方法が設定されているか確認する">
          <div className="bg-ui-bg-subtle rounded-lg p-4 text-sm">
            Settings → Regions → 該当リージョン → <strong>Shipping Options</strong> を確認
            <div className="mt-2 p-3 border border-red-300 rounded-lg bg-red-50">
              <div className="text-red-600 font-medium">配送方法が0件の場合、お客様はチェックアウトできません</div>
              <div className="mt-1">→ 最低1つの配送方法を追加してください</div>
            </div>
          </div>
        </Step>

        <Step number={2} title="決済方法が設定されているか確認する">
          <div className="bg-ui-bg-subtle rounded-lg p-4 text-sm">
            Settings → Regions → 該当リージョン → <strong>Payment Providers</strong> を確認
            <div className="mt-2 p-3 border border-red-300 rounded-lg bg-red-50">
              <div className="text-red-600 font-medium">決済プロバイダが0件の場合、お客様は支払いできません</div>
              <div className="mt-1">→ 最低1つの決済プロバイダを追加してください</div>
            </div>
          </div>
        </Step>

        <Step number={3} title="在庫切れでないか確認する">
          <div className="bg-ui-bg-subtle rounded-lg p-4 text-sm">
            Products → 該当商品 → バリアントの在庫数を確認
            <div className="mt-2">在庫が0で「Manage Inventory」がONの場合、お客様は購入できません。</div>
          </div>
        </Step>
      </div>
    </div>

    {/* 問題3 */}
    <div className="border border-red-200 rounded-xl overflow-hidden">
      <div className="bg-red-50 px-5 py-3 border-b border-red-200">
        <h3 className="font-bold text-red-800">❌ 管理画面にログインできない</h3>
      </div>
      <div className="p-5">
        <MockTable
          headers={["考えられる原因", "確認方法", "対処"]}
          rows={[
            ["URLが間違っている", "アドレスバーを確認", "正しいURL（localhost:9000/app）を入力"],
            ["パスワードが間違っている", "入力内容を確認", "エンジニアにパスワード再設定を依頼"],
            ["バックエンドが停止している", "ページが表示されるか確認", "エンジニアにサーバー稼働状況を確認してもらう"],
            ["ブラウザのキャッシュ", "別のブラウザで試す", "ブラウザのキャッシュをクリア"],
          ]}
        />
      </div>
    </div>

    {/* 問題4 */}
    <div className="border border-red-200 rounded-xl overflow-hidden">
      <div className="bg-red-50 px-5 py-3 border-b border-red-200">
        <h3 className="font-bold text-red-800">❌ 画像が表示されない</h3>
      </div>
      <div className="p-5">
        <MockTable
          headers={["考えられる原因", "対処"]}
          rows={[
            ["画像がアップロードされていない", "管理画面で商品を開き、画像が登録されているか確認"],
            ["画像のURLが許可されていない", "エンジニアに next.config.js の remotePatterns に追加を依頼"],
            ["ファイルサイズが大きすぎる", "画像を圧縮して再アップロード（推奨: 1MB以下）"],
          ]}
        />
      </div>
    </div>

    {/* 問題5 */}
    <div className="border border-red-200 rounded-xl overflow-hidden">
      <div className="bg-red-50 px-5 py-3 border-b border-red-200">
        <h3 className="font-bold text-red-800">❌ 価格が正しく表示されない</h3>
      </div>
      <div className="p-5">
        <MockTable
          headers={["考えられる原因", "対処"]}
          rows={[
            ["リージョンの通貨設定が不正", "Settings → Regions で通貨を確認（日本はJPY）"],
            ["バリアントの価格が未設定", "Products → 商品 → バリアントの価格を確認・入力"],
            ["リージョン別の価格未設定", "バリアント価格をリージョンごとに設定する"],
          ]}
        />
      </div>
    </div>

    <div className="bg-ui-bg-subtle rounded-xl p-5 mt-4">
      <h3 className="font-bold text-ui-fg-base mb-3">🆘 それでも解決しない場合</h3>
      <div className="space-y-2 text-sm">
        <div className="flex items-start gap-2">
          <span>1️⃣</span>
          <div>エンジニアチームに問い合わせてください</div>
        </div>
        <div className="flex items-start gap-2">
          <span>2️⃣</span>
          <div>伝える情報: <strong>何をしたか</strong>、<strong>どうなったか</strong>（エラーメッセージがあればスクリーンショット）、<strong>いつから発生しているか</strong></div>
        </div>
        <div className="flex items-start gap-2">
          <span>3️⃣</span>
          <div>ブラウザの開発者ツール（F12）→ Console タブのエラーメッセージも共有すると解決が早くなります</div>
        </div>
      </div>
    </div>
  </ManualPage>
)

export default TroubleshootingPage
