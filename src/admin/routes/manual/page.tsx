import { defineRouteConfig } from "@medusajs/admin-sdk"
import { BookOpen } from "@medusajs/icons"
import { Container, Heading, Text, Badge, Tabs, Table } from "@medusajs/ui"

const manualSections = [
  {
    id: "overview",
    title: "運営の全体像",
    content: [
      {
        type: "text",
        value:
          "eccart の運営では、お客様向けサイト（ストアフロント）と管理画面（Medusa Admin）の2つを使い分けます。",
      },
      {
        type: "table",
        headers: ["名称", "役割", "誰が使うか"],
        rows: [
          ["ストアフロント", "お客様が商品を見て購入するサイト", "お客様"],
          [
            "Medusa バックエンド",
            "データの保管・処理を行うサーバー",
            "自動動作",
          ],
          [
            "Medusa Admin",
            "商品登録や注文管理を行う管理画面",
            "運営スタッフ",
          ],
        ],
      },
      {
        type: "note",
        variant: "info",
        value:
          "運営者は主に Medusa Admin（管理画面）を使って日常業務を行います。",
      },
    ],
  },
  {
    id: "admin-basics",
    title: "管理画面の基本操作",
    content: [
      {
        type: "text",
        value:
          "ブラウザで管理画面のURLにアクセスしてログインします。左サイドバーのメニューから各機能にアクセスできます。",
      },
      {
        type: "table",
        headers: ["メニュー", "内容"],
        rows: [
          ["Orders（注文）", "注文一覧の確認、注文の処理"],
          ["Products（商品）", "商品の登録・編集・削除"],
          ["Inventory（在庫）", "在庫数の管理"],
          ["Customers（顧客）", "顧客情報の確認・編集"],
          ["Promotions（プロモーション）", "割引・プロモーション管理"],
          ["Price Lists（価格表）", "価格リストの管理"],
        ],
      },
    ],
  },
  {
    id: "products",
    title: "商品管理",
    content: [
      {
        type: "heading",
        value: "商品登録の手順",
      },
      {
        type: "steps",
        items: [
          '管理画面の「Products」→「Create Product」を選択',
          "基本情報を入力（商品名、ハンドル、説明文、画像）",
          "詳細情報を入力（素材、原産国、重量、寸法、タグ）",
          "バリエーションを設定（サイズ、カラーなどのオプション）",
          "各バリアントの価格・在庫数を設定",
          "Sales Channel に紐づけ",
          "公開状態に設定して保存",
        ],
      },
      {
        type: "table",
        headers: ["入力項目", "必須", "入力のコツ"],
        rows: [
          [
            "商品名",
            "○",
            "検索キーワードを含める。30文字以内が理想",
          ],
          [
            "ハンドル",
            "○",
            "英数字とハイフン。例: organic-cotton-towel",
          ],
          ["説明文", "○", "商品の魅力を伝える文章を入力"],
          ["サムネイル", "○", "一覧用。正方形で見栄えの良い1枚"],
          ["画像", "○", "最低3枚、理想は5〜8枚"],
          ["素材", "△", "商品詳細の「商品情報」タブに表示"],
          ["原産国", "△", "同上"],
          ["重量", "△", "配送料の計算に使われる場合あり"],
        ],
      },
      {
        type: "heading",
        value: "在庫管理",
      },
      {
        type: "table",
        headers: ["設定", "説明", "推奨"],
        rows: [
          ["Manage Inventory", "在庫数の追跡をするか", "ON"],
          [
            "Allow Backorder",
            "在庫ゼロでも注文を受けるか",
            "通常はOFF",
          ],
          ["在庫数", "現在の在庫数", "正確に入力"],
        ],
      },
      {
        type: "note",
        variant: "warning",
        value:
          "商品の反映にはキャッシュの関係で最大1時間かかる場合があります。",
      },
    ],
  },
  {
    id: "collections-categories",
    title: "コレクション・カテゴリ管理",
    content: [
      {
        type: "heading",
        value: "コレクション（特集テーマ）",
      },
      {
        type: "text",
        value:
          "商品を特定のテーマでまとめたグループです。「春の新作」「セール品」「ギフトにおすすめ」など。",
      },
      {
        type: "steps",
        items: [
          '管理画面の「Collections」を開く',
          "「Create Collection」をクリック",
          "タイトルとハンドルを入力",
          "保存後、商品をコレクションに追加",
        ],
      },
      {
        type: "heading",
        value: "カテゴリ（商品分類）",
      },
      {
        type: "text",
        value:
          "商品を分類するための階層構造です。親子関係を持てます。",
      },
      {
        type: "note",
        variant: "info",
        value:
          "カテゴリ階層は3段まで、1カテゴリ5〜30商品を目安に設計しましょう。",
      },
    ],
  },
  {
    id: "orders",
    title: "注文管理",
    content: [
      {
        type: "heading",
        value: "注文処理の流れ",
      },
      {
        type: "steps",
        items: [
          '管理画面「Orders」で新規注文を確認',
          "注文内容・配送先・支払い状況を確認",
          "入金確認（カード決済は自動、銀行振込は手動確認）",
          "商品の準備・梱包",
          "「Create Fulfillment」で発送処理、追跡番号を入力",
          "お客様に発送通知が届く",
        ],
      },
      {
        type: "table",
        headers: ["項目", "推奨時間"],
        rows: [
          ["注文確認メール", "自動送信（即時）"],
          ["入金確認（手動決済）", "毎日午前中に確認"],
          ["出荷準備", "注文から2営業日以内"],
          ["発送通知", "発送後1時間以内"],
        ],
      },
    ],
  },
  {
    id: "regions",
    title: "地域・通貨・配送の設定",
    content: [
      {
        type: "heading",
        value: "リージョン（地域）の設定",
      },
      {
        type: "table",
        headers: ["リージョン例", "対象国", "通貨"],
        rows: [
          ["日本", "JP", "JPY（円）"],
          ["北米", "US, CA", "USD（ドル）"],
          ["ヨーロッパ", "DE, FR ...", "EUR（ユーロ）"],
        ],
      },
      {
        type: "steps",
        items: [
          "管理画面の Settings → Regions を開く",
          "「Add Region」をクリック",
          "リージョン名、通貨、対象国、税率を設定",
          "保存",
        ],
      },
      {
        type: "heading",
        value: "配送方法",
      },
      {
        type: "table",
        headers: ["配送方法例", "料金", "到着目安"],
        rows: [
          ["通常配送", "¥700", "2〜4日"],
          ["速達配送", "¥1,200", "翌日"],
          ["メール便", "¥350", "3〜5日"],
          ["店舗受取", "¥0", "翌営業日以降"],
        ],
      },
    ],
  },
  {
    id: "payment",
    title: "決済方法の設定",
    content: [
      {
        type: "table",
        headers: ["決済方法", "特徴", "手数料目安"],
        rows: [
          [
            "クレジットカード（Stripe）",
            "最も利用率が高い。Visa/Master/AMEX対応",
            "3.6%",
          ],
          ["PayPal", "海外顧客に強い", "3.6% + ¥40"],
          [
            "Medusa Payments",
            "Medusa組み込み決済",
            "要確認",
          ],
          ["手動決済", "銀行振込、代引きなど", "なし"],
        ],
      },
      {
        type: "note",
        variant: "error",
        value:
          "Stripe のシークレットキー（sk_ で始まるもの）は絶対に公開しないでください。",
      },
    ],
  },
  {
    id: "promotions",
    title: "プロモーション・割引コード",
    content: [
      {
        type: "steps",
        items: [
          '管理画面の「Promotions」を開く',
          "新しいプロモーションを作成",
          "コード、割引タイプ（%/固定額）、割引額を設定",
          "適用条件（最低注文金額、期間など）を設定",
          "保存",
        ],
      },
      {
        type: "table",
        headers: ["割引タイプ", "例"],
        rows: [
          ["割合割引（%）", "20%OFF → コード: SUMMER20"],
          ["固定額割引", "¥500OFF → コード: SAVE500"],
          ["自動適用", "コード入力なしで自動的に割引"],
        ],
      },
    ],
  },
  {
    id: "customers",
    title: "顧客管理",
    content: [
      {
        type: "text",
        value:
          '管理画面の「Customers」から登録済みの顧客一覧を確認できます。',
      },
      {
        type: "table",
        headers: ["確認できる情報", "内容"],
        rows: [
          ["名前", "姓・名"],
          ["メールアドレス", "登録メールアドレス"],
          ["電話番号", "登録電話番号"],
          ["注文履歴", "過去の注文一覧"],
          ["住所一覧", "登録済みの配送先住所"],
        ],
      },
    ],
  },
  {
    id: "daily-checklist",
    title: "日常運用チェックリスト",
    content: [
      {
        type: "heading",
        value: "毎日の確認事項",
      },
      {
        type: "checklist",
        items: [
          "新しい注文が入っていないか確認",
          "未処理の注文がないか確認",
          "在庫切れの商品がないか確認",
          "問い合わせに回答漏れがないか確認",
        ],
      },
      {
        type: "heading",
        value: "週次の確認事項",
      },
      {
        type: "checklist",
        items: [
          "注文の処理状況を確認",
          "在庫数の確認と補充判断",
          "SNS投稿の実施",
        ],
      },
      {
        type: "heading",
        value: "月次の確認事項",
      },
      {
        type: "checklist",
        items: [
          "売上レポートの確認",
          "プロモーションの効果検証",
          "新商品の登録",
          "商品ラインナップの見直し",
        ],
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "トラブルシューティング",
    content: [
      {
        type: "heading",
        value: "商品がストアフロントに表示されない",
      },
      {
        type: "table",
        headers: ["原因", "対処"],
        rows: [
          ["商品が下書き状態", '管理画面で商品を「公開」状態にする'],
          [
            "キャッシュが更新されていない",
            "最大1時間待つか、再デプロイを依頼",
          ],
          [
            "リージョンに紐づいていない",
            "商品がリージョンの Sales Channel に含まれているか確認",
          ],
        ],
      },
      {
        type: "heading",
        value: "お客様が購入できない",
      },
      {
        type: "table",
        headers: ["原因", "対処"],
        rows: [
          [
            "決済方法が未設定",
            "管理画面でリージョンに決済方法を追加",
          ],
          [
            "配送方法が未設定",
            "管理画面でリージョンに配送方法を追加",
          ],
          ["在庫切れ", "管理画面で在庫数を確認・追加"],
        ],
      },
    ],
  },
  {
    id: "glossary",
    title: "用語集",
    content: [
      {
        type: "table",
        headers: ["用語", "意味"],
        rows: [
          [
            "ストアフロント",
            "お客様が商品を閲覧・購入するウェブサイト",
          ],
          [
            "バックエンド",
            "データの管理・処理を行うサーバー側のシステム",
          ],
          [
            "リージョン（Region）",
            "販売対象の地域設定。通貨や配送方法をリージョンごとに設定",
          ],
          [
            "コレクション",
            '特定のテーマで商品をまとめたグループ（例: 「夏物セール」）',
          ],
          [
            "カテゴリ",
            '商品を分類するための階層構造（例: 「メンズ > トップス」）',
          ],
          [
            "バリアント",
            "同じ商品の異なるサイズ・色などの組み合わせ",
          ],
          [
            "SKU",
            "在庫管理単位。商品バリアントごとに付ける管理番号",
          ],
          [
            "ハンドル",
            "URLに使われる識別子（例: summer-collection）",
          ],
          [
            "チェックアウト",
            "購入手続きのこと。カートから注文確定までの流れ",
          ],
          [
            "フルフィルメント",
            "注文を受けてから商品を発送するまでの処理",
          ],
          [
            "Sales Channel",
            "商品を販売するチャネル（ストアフロント、アプリなど）",
          ],
          [
            "公開APIキー",
            "ストアフロントがバックエンドと通信するための認証キー",
          ],
        ],
      },
    ],
  },
]

type ContentBlock =
  | { type: "text"; value: string }
  | { type: "heading"; value: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "steps"; items: string[] }
  | { type: "checklist"; items: string[] }
  | { type: "note"; variant: "info" | "warning" | "error"; value: string }

const NoteBlock = ({
  variant,
  value,
}: {
  variant: "info" | "warning" | "error"
  value: string
}) => {
  const colors = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800",
  }
  const icons = { info: "ℹ️", warning: "⚠️", error: "🚫" }
  return (
    <div
      className={`rounded-lg border p-3 my-3 ${colors[variant]}`}
    >
      <span className="mr-2">{icons[variant]}</span>
      {value}
    </div>
  )
}

const renderContent = (block: ContentBlock, idx: number) => {
  switch (block.type) {
    case "text":
      return (
        <Text key={idx} className="mb-3 text-ui-fg-subtle">
          {block.value}
        </Text>
      )
    case "heading":
      return (
        <h3 key={idx} className="font-semibold text-ui-fg-base mt-4 mb-2">
          {block.value}
        </h3>
      )
    case "table":
      return (
        <div key={idx} className="my-3 overflow-x-auto">
          <Table>
            <Table.Header>
              <Table.Row>
                {block.headers.map((h, i) => (
                  <Table.HeaderCell key={i}>{h}</Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {block.rows.map((row, ri) => (
                <Table.Row key={ri}>
                  {row.map((cell, ci) => (
                    <Table.Cell key={ci}>{cell}</Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      )
    case "steps":
      return (
        <ol key={idx} className="my-3 space-y-2 pl-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <Badge color="blue" className="mt-0.5 shrink-0">
                {i + 1}
              </Badge>
              <Text className="text-ui-fg-subtle">{item}</Text>
            </li>
          ))}
        </ol>
      )
    case "checklist":
      return (
        <ul key={idx} className="my-3 space-y-1.5 pl-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2 items-center">
              <span className="text-ui-fg-muted">☐</span>
              <Text className="text-ui-fg-subtle">{item}</Text>
            </li>
          ))}
        </ul>
      )
    case "note":
      return <NoteBlock key={idx} variant={block.variant} value={block.value} />
    default:
      return null
  }
}

const ManualPage = () => {
  return (
    <Container className="divide-y p-0">
      <div className="px-6 py-4">
        <Heading level="h1">マニュアル・ガイド</Heading>
        <Text className="text-ui-fg-subtle mt-1">
          eccart の管理画面の操作方法と日常運用の手順をまとめたガイドです。
        </Text>
      </div>
      <div className="px-6 py-4">
        <Tabs defaultValue="overview">
          <Tabs.List>
            {manualSections.map((section) => (
              <Tabs.Trigger key={section.id} value={section.id}>
                {section.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {manualSections.map((section) => (
            <Tabs.Content key={section.id} value={section.id}>
              <div className="py-4">
                <Heading level="h2" className="mb-4">
                  {section.title}
                </Heading>
                {section.content.map((block, idx) =>
                  renderContent(block as ContentBlock, idx)
                )}
              </div>
            </Tabs.Content>
          ))}
        </Tabs>
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "マニュアル",
  icon: BookOpen,
})

export default ManualPage
