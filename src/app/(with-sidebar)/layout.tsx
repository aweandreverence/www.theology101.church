import { Sidebar } from '@/components/Sidebar';

export default function WithSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-8">{children}</div>
        <div className="col-lg-3 col-md-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
