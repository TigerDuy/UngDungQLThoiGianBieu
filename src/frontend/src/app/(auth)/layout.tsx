import AuthLayout from '@/components/auth/AuthLayout'

export default function AuthLayoutPage({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthLayout>{children}</AuthLayout>
}
