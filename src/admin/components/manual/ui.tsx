import { Badge, Container, Heading, Text, Table } from "@medusajs/ui"
import { ArrowLeftMini } from "@medusajs/icons"

/* ─── Page wrapper ─── */
export const ManualPage = ({
  title,
  goal,
  children,
}: {
  title: string
  goal: string
  children: React.ReactNode
}) => (
  <Container className="divide-y p-0">
    <div className="px-6 py-4">
      <a
        href="/app/manual"
        className="inline-flex items-center gap-1 text-ui-fg-subtle hover:text-ui-fg-base text-sm mb-3"
      >
        <ArrowLeftMini />
        マニュアル一覧に戻る
      </a>
      <Heading level="h1">{title}</Heading>
      <div className="mt-3 rounded-lg bg-ui-bg-subtle border border-ui-border-base p-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">🎯</span>
          <Text className="font-semibold text-ui-fg-base">このページのゴール</Text>
        </div>
        <Text className="text-ui-fg-subtle">{goal}</Text>
      </div>
    </div>
    <div className="px-6 py-6 space-y-8">{children}</div>
  </Container>
)

/* ─── Step with screenshot mockup ─── */
export const Step = ({
  number,
  title,
  description,
  children,
}: {
  number: number
  title: string
  description?: string
  children?: React.ReactNode
}) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
      {number}
    </div>
    <div>
      <h3 className="font-semibold text-ui-fg-base text-base">{title}</h3>
      {description && (
        <Text className="text-ui-fg-subtle mt-1">{description}</Text>
      )}
      {children && <div className="mt-3">{children}</div>}
    </div>
  </div>
)

/* ─── Admin screenshot mockup ─── */
export const ScreenMockup = ({
  sidebar,
  activeMenu,
  header,
  children,
  highlight,
}: {
  sidebar?: string[]
  activeMenu?: string
  header?: string
  children: React.ReactNode
  highlight?: string
}) => (
  <div className="border border-ui-border-base rounded-lg overflow-hidden bg-white shadow-sm my-3">
    {/* title bar */}
    <div className="bg-gray-100 border-b border-ui-border-base px-3 py-1.5 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <Text className="text-xs text-ui-fg-muted ml-2">
        localhost:9000/app{header ? `/${header.toLowerCase()}` : ""}
      </Text>
    </div>
    <div className="flex min-h-[200px]">
      {/* sidebar */}
      {sidebar && (
        <div className="w-44 border-r border-ui-border-base bg-ui-bg-subtle p-3 shrink-0">
          <div className="text-xs font-bold text-ui-fg-muted mb-3 px-2">eccart</div>
          {sidebar.map((item) => {
            const isActive = item === activeMenu
            const isHighlight = item === highlight
            return (
              <div
                key={item}
                className={`px-2 py-1.5 rounded text-sm mb-0.5 ${
                  isActive
                    ? "bg-ui-bg-base font-medium text-ui-fg-base shadow-sm"
                    : "text-ui-fg-subtle"
                } ${isHighlight ? "ring-2 ring-blue-500 ring-offset-1" : ""}`}
              >
                {item}
                {isHighlight && (
                  <span className="ml-1 text-blue-600 text-xs">← ここをクリック</span>
                )}
              </div>
            )
          })}
        </div>
      )}
      {/* main content */}
      <div className="flex-1 p-4">{children}</div>
    </div>
  </div>
)

/* ─── Click indicator ─── */
export const ClickHere = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-1 bg-blue-100 border border-blue-300 text-blue-800 rounded px-2 py-0.5 text-xs font-semibold">
    👆 {label}
  </span>
)

/* ─── Button mockup ─── */
export const MockButton = ({
  children,
  primary,
  highlight,
}: {
  children: React.ReactNode
  primary?: boolean
  highlight?: boolean
}) => (
  <span
    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium ${
      primary
        ? "bg-violet-600 text-white"
        : "bg-white border border-ui-border-base text-ui-fg-base"
    } ${highlight ? "ring-2 ring-blue-500 ring-offset-1" : ""}`}
  >
    {children}
    {highlight && (
      <span className="ml-2 text-xs text-blue-600 bg-blue-50 px-1 rounded">← クリック</span>
    )}
  </span>
)

/* ─── Form field mockup ─── */
export const MockField = ({
  label,
  value,
  required,
  hint,
}: {
  label: string
  value?: string
  required?: boolean
  hint?: string
}) => (
  <div className="mb-3">
    <div className="text-sm font-medium text-ui-fg-base mb-1">
      {label}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </div>
    <div className="border border-ui-border-base rounded-lg px-3 py-2 bg-white text-sm text-ui-fg-subtle">
      {value || `${label}を入力...`}
    </div>
    {hint && <div className="text-xs text-ui-fg-muted mt-1">{hint}</div>}
  </div>
)

/* ─── Table mockup ─── */
export const MockTable = ({
  headers,
  rows,
}: {
  headers: string[]
  rows: string[][]
}) => (
  <div className="my-3 overflow-x-auto">
    <Table>
      <Table.Header>
        <Table.Row>
          {headers.map((h, i) => (
            <Table.HeaderCell key={i}>{h}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {rows.map((row, ri) => (
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

/* ─── Result / success block ─── */
export const Result = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg border border-green-200 bg-green-50 p-4 my-3">
    <div className="flex items-center gap-2 mb-1">
      <span className="text-lg">✅</span>
      <Text className="font-semibold text-green-800">完了イメージ</Text>
    </div>
    <div className="text-green-700 text-sm">{children}</div>
  </div>
)

/* ─── Tip block ─── */
export const Tip = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 my-3">
    <div className="flex items-start gap-2">
      <span>💡</span>
      <Text className="text-blue-800 text-sm">{children}</Text>
    </div>
  </div>
)

/* ─── Warning block ─── */
export const Warning = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 my-3">
    <div className="flex items-start gap-2">
      <span>⚠️</span>
      <Text className="text-yellow-800 text-sm">{children}</Text>
    </div>
  </div>
)

/* ─── Default sidebar items ─── */
export const defaultSidebar = [
  "Orders",
  "Drafts",
  "Products",
  "Inventory",
  "Customers",
  "Promotions",
  "Price Lists",
  "マニュアル",
]
