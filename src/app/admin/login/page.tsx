import LoginForm from "./LoginForm";

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  const passwordConfigured = Boolean(process.env.ADMIN_CLICKS_PASSWORD);

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface-alt px-4">
      <div className="w-full max-w-sm rounded-card border border-line bg-surface p-8 shadow-sm">
        <h1 className="text-xl font-bold text-ink">Yönetim Girişi</h1>
        <p className="mt-1 text-sm text-ink-soft">
          Tıklama raporunu görüntülemek için şifrenizi girin.
        </p>

        {passwordConfigured ? (
          <LoginForm />
        ) : (
          <div className="mt-6 rounded-btn border border-warning/40 bg-brand-purple-soft p-4 text-sm text-ink">
            <p className="font-semibold">Şifre ayarlanmamış</p>
            <p className="mt-1 text-ink-soft">
              Giriş yapabilmek için sunucu ortam değişkeni{" "}
              <code className="rounded bg-surface-alt px-1 py-0.5 font-mono">
                ADMIN_CLICKS_PASSWORD
              </code>{" "}
              tanımlanmalıdır.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
